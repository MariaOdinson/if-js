import { sum, getNewColor } from './src/module.js';

// задание 1

console.log(sum(5)(2));

// задание 2

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

const func1 = getNewColor();
const func2 = getNewColor();
const func3 = getNewColor();

text1.addEventListener('click', (event) => {
  event.target.style.color = func1();
});

text2.addEventListener('click', (event) => {
  event.target.style.color = func2();
});

text3.addEventListener('click', (event) => {
  event.target.style.color = func3();
});
