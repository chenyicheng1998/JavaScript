document.addEventListener('DOMContentLoaded', function() {
  const trigger = document.getElementById('trigger');
  const targetImage = document.getElementById('target');

  trigger.addEventListener('mouseover', function() {
    targetImage.src = 'img/picB.jpg';
  });

  trigger.addEventListener('mouseout', function() {
    targetImage.src = 'img/picA.jpg';
  });
});