// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // DONE
  const selectedHorn = document.getElementById('horn-select');
  const selectedVolume = document.getElementById('volume');
  const selectedAudio = document.querySelector('.hidden');

  const volumeImage = document.querySelector('img[alt="Volume level 2"]');
  const playButton = document.querySelector('button');
  const confetti = new JSConfetti();

  selectedHorn.addEventListener('change', (event) => {
    const result = document.querySelector('img[alt="No image selected"]');
    result.src = `assets/images/${event.target.value}.svg`;
    //result.alt = `${event.target.value}`;
    selectedAudio.src = `assets/audio/${event.target.value}.mp3`;
  });

  selectedVolume.addEventListener('change', (event) => {
    const volume = `${event.target.value}`;
    selectedAudio.volume = volume/100;
    if(volume == 0) {
      volumeImage.src = `assets/icons/volume-level-0.svg`;
    } else if(volume >= 1 && volume < 33) {
      volumeImage.src = `assets/icons/volume-level-1.svg`;
    } else if(volume >= 33 && volume < 67) {
      volumeImage.src = `assets/icons/volume-level-2.svg`;
    } else {
      volumeImage.src = `assets/icons/volume-level-3.svg`;
    }
  });

  playButton.addEventListener('click', () => {
    selectedAudio.play();
    if(selectedHorn.value == 'party-horn') {
      confetti.addConfetti();
    }
  });
}