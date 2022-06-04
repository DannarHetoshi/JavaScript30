function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; //stop function from running.
    key.classList.add('playing');
    audio.currentTime = 0; //rewind to the start
    audio.play();
    console.log(e.key);
  }
  
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return; // skip if not a transform
    console.log(e);
    this.classList.remove('playing');
  }
  
window.addEventListener('keydown', playSound);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));