// задание 1

export function sum(a) {
  return function (b) {
    return a + b;
  };
}

// задание 2

export const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

export function getNewColor () {
  let i = 0;
  return function () {
    if (i >= colors.length) {
      i = 0
    }
    return colors[i++]
  }
}
