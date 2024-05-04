// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textToSpeakInput = document.getElementById('text-to-speak');
  const voiceSelect = document.getElementById('voice-select');
  const talkButton = document.querySelector('button');
  const speakingImage = document.querySelector('img');

  let synth = window.speechSynthesis;
  let voices = [];

  // Populate voice options
  function populateVoiceList() {
    voices = synth.getVoices();
    voices.forEach(voice => {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    });
  }

  populateVoiceList();

  synth.onvoiceschanged = populateVoiceList; // Update voice list when voices change

  talkButton.addEventListener('click', () => {
    if (synth.speaking) {
      synth.cancel();
    }

    const text = new SpeechSynthesisUtterance(textToSpeakInput.value);
    const selectedVoice = voices.find(voice => voice.name === voiceSelect.selectedOptions[0].getAttribute('data-name'));
    text.voice = selectedVoice;

    speakingImage.src = 'assets/images/open-mouth.png';
    text.onend = () => {
      speakingImage.src = 'assets/images/smiling.png';
    };

    synth.speak(text);
  });
}
