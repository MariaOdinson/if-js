/*let user = 'John Doe';
const student = 'Mariia Chuchelite-Majchenko';
let test = 1;

console.log(user);
console.log(student);

user = student; //user='Mariia Chuchelite-Majchenko'

console.log(user);

test++;
test = test + '1';
console.log(test); // 21

test = test - 1;
console.log(test); // 20

test = Boolean(test);

console.log(test);

let x = [2, 3, 5, 8];
let result = 1;

for (let i = 0; i < x.length; i++) {
  result *= x[i];
}

console.log(result);

let y = [2, 5, 8, 15, 0, 6, 20, 3];

for (let i = 0; i < y.length; i++) {
  if (y[i] > 5 && y[i] < 10) {
    console.log(y[i]);
  }
}

for (let i = 0; i < y.length; i++) {
  if (y[i] % 2 === 0) {
    console.log(y[i]);
  }
}*/

function min(a, b) {
  if (a <= b) {
    return a;
  }
  return b;
}

function max(a, b) {
  if (a > b) {
    return a;
  }
  return b;
}

console.log(min(2, 5));
console.log(max(64, 20)); // задание 6

function terMin(a, b) {
  return a <= b ? a : b;
}

function terMax(a, b) {
  return a > b ? a : b;
}

console.log(terMin(7, 10));
console.log(terMax(18, 25)); // задание 6 (через тернарный оператор)

let y = [];

for (let i = 0; i < 10; i++) {
  y[i] = Math.floor(Math.random() * 101);
}

for (let i = 0; i < 10; i++) {
  console.log(y[i]);
}

function replace(y) {
  for (let i = 0; i < y.length; i++) {
    if (y[i] % 10 === 0) {
      y[i] = (y[i] + '').replaceAll('0', 'zero');
    }
  }
}

replace(y);

console.log(y); // задание 7

function palindrom(x) {
  let p = x.length - 1;
  for (let i = 0; i < x.length / 2; i++) {
    if (x[i] !== x[p]) {
      return false;
    }
    p--;
  }
  return true;
}

console.log(palindrom('шалаш')); //задание 4
