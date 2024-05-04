// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById('horn-select');
  const volume = document.getElementById('volume');
  const volumeIcon = document.querySelector('#volume-controls img');
  const audio = document.querySelector('audio');
  const image = document.querySelector('img');
  const playButton = document.querySelector('button');

  hornSelect.addEventListener('change', function() {
    const selectedHorn = hornSelect.value;
    switch (selectedHorn) {
      case 'air-horn':
        image.src = 'assets/images/air-horn.svg';
        audio.src = 'assets/audio/air-horn.mp3';
        break;
      case 'car-horn':
        image.src = 'assets/images/car-horn.svg';
        audio.src = 'assets/audio/car-horn.mp3';
        break;
      case 'party-horn':
        image.src = 'assets/images/party-horn.svg';
        audio.src = 'assets/audio/party-horn.mp3';
        break;
      default:
        image.src = 'assets/images/no-image.png';
        audio.src = '';
    }
  });

  volume.addEventListener('input', function() {
    const currentVolume = volume.value;
    if (currentVolume == 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (currentVolume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (currentVolume < 67) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }
    audio.volume = currentVolume / 100;
  });

  playButton.addEventListener('click', function() {
    audio.play();
    if (hornSelect.value === 'party-horn') {
      jsConfetti.addConfetti();
    }
  });
}
