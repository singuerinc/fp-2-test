import anime from 'animejs';
import { words } from './words';

const root = document.querySelector('#root');

const WORDS = words('singuerinc');
const totalWords = WORDS.length;

anime({
  duration: 1000,
  easing: 'easeInOutExpo',
  run: anim => {
    const x = Math.floor(totalWords * (anim.progress * 0.01));
    const next = WORDS[x];
    if (root.textContent !== next) {
      root.textContent = next;
    }
  }
});
