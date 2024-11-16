'use strict';

document.addEventListener('DOMContentLoaded', function() {

  const map = L.map('map').setView([60.172097, 24.941249], 13);  // show Helsinki center first
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const form = document.querySelector('form');

  const routeLayerGroup = L.layerGroup().addTo(map);

  form.addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally
    const address = document.getElementById('address').value;

    let target = [-1, -1];
    await fetch(
        `https://api.digitransit.fi/geocoding/v1/search?text=${encodeURIComponent(
            address)}&size=1`,
        {
          method: 'GET',
          headers: {
            'digitransit-subscription-key': 'fb084f139a0145bb8c14640b6ba72bae', // Include the API key as a header
          },
        },
    ).then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      // console.log(data);
      target = data.features[0].geometry.coordinates;
      // targetLat = data.features[0].geometry.coordinates[1];
      // console.log(targetLon);
      // console.log(targetLat);
      // console.log('here'+target);
    }).catch(error => {
      console.error('Error fetching data:', error); // Handle any errors
    });

    ////////////////////////////////////////////

    const apiAddress = 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'; // cors issues may arise, use proxy or browser plugin if necessary
    // GraphQL query  to: {lat: ${targetLat}, lon: ${targetLon}}
    // console.log('here:'+target);
    const GQLQuery = `{
    plan(
      from: {lat: ${60.223876}, lon: ${24.758061}}
      to: {lat: ${target[1]}, lon: ${target[0]}}
      numItineraries: 1
    ) {
      itineraries {
        legs {
          startTime
          endTime
          mode
          duration
          distance
          legGeometry {
            points
          }
        }
      }
    }
  }`;

// Primary key fb084f139a0145bb8c14640b6ba72bae
// Secondary key 4eedb760bc414bb29dd80601ff0ea1c9

    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'digitransit-subscription-key': 'fb084f139a0145bb8c14640b6ba72bae',
      },
      body: JSON.stringify({query: GQLQuery}),
    };


    await fetch(apiAddress, fetchOptions).then(function(response) {
      return response.json();
    }).then(function(result) {
      console.log(result);
      console.log(result.data.plan.itineraries[0].legs);


      const timeStart = new Date(result.data.plan.itineraries[0].legs[0].startTime);
      const timeEnd = new Date(result.data.plan.itineraries[0].legs[result.data.plan.itineraries[0].legs.length - 1].endTime);

      document.getElementById("usetime").textContent = `From ${timeStart} to ${timeEnd}`;

      const googleEncodedRoute = result.data.plan.itineraries[0].legs;

      routeLayerGroup.clearLayers();

      for (let i = 0; i < googleEncodedRoute.length; i++) {
        let color = '';
        switch (googleEncodedRoute[i].mode) {
          case 'WALK':
            color = 'green';
            break;
          case 'BUS':
            color = 'red';
            break;
          case 'RAIL':
            color = 'cyan';
            break;
          case 'TRAM':
            color = 'magenta';
            break;
          default:
            color = 'blue';
            break;
        }
        const route = (googleEncodedRoute[i].legGeometry.points);
        const pointObjects = L.Polyline.fromEncoded(route).getLatLngs(); // fromEncoded: convert Google encoding to Leaflet polylines
        L.polyline(pointObjects).setStyle({
          color,
        }).addTo(routeLayerGroup);
      }
      map.fitBounds([
        [60.223876, 24.758061],
        [target[1], target[0]]]);
    }).catch(function(e) {
      console.error(e.message);
    });

  });
});
