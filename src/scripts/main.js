import { sum, getNewColor } from './module';

// задание 1

console.log(sum(5)(2));

// задание 2

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');

let func1 = getNewColor();
let func2 = getNewColor();
let func3 = getNewColor();

text1.addEventListener('click', (event) => {
  event.target.style.color = func1();
});

text2.addEventListener('click', (event) => {
  event.target.style.color = func2();
});

text3.addEventListener('click', (event) => {
  event.target.style.color = func3();
});
