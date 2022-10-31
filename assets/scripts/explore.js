// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const selectedVoice = document.getElementById('voice-select');
  const textToSpeak = document.getElementById('text-to-speak');
  const playButton = document.querySelector('button');
  const synth = window.speechSynthesis;
  let voices = [];
  
  synth.addEventListener('voiceschanged', () => {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name}`;
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-voicename', voices[i].name);
      //option.value = voices[i];
      selectedVoice.appendChild(option);
    }
  });
  
  playButton.addEventListener('click', () => {
    const sayThis = new SpeechSynthesisUtterance(textToSpeak.value);
    const selectedOption = selectedVoice.value;
    for (let i = 0; i < voices.length ; i++) {
      let voicename = voices[i].name;
      if (voices[i].name === selectedOption) {
        sayThis.voice = voices[i];
      }
    }
    //sayThis.voice = selectedVoice.value;
    synth.speak(sayThis);
  });
}