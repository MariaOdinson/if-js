// задание 1

function sum(a) {
  return function (b) {
    return a + b;
  };
}

// задание 2

const colors = ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'];

function getNewColor() {
  let i = 0;
  return function () {
    if (i >= colors.length) {
      i = 0;
    }
    return colors[i++];
  };
}

export { sum, colors, getNewColor };
