let user = 'John Doe';
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
}
