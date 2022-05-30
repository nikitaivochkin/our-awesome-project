import '@/styles/main.scss';
import substract from './module';

console.log('Hello world');

let x = 5;
let y = 0;

const arr = [1, 2, 3, 4, 5];
const [first, ...rest] = arr;

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const newNode = document.createElement('p');
  newNode.textContent = `result is ${x}`;

  body.appendChild(newNode);
});
