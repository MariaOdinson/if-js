import {sum, colors, getNewColor} from '../src/scripts/module';
import {randNumber} from '@ngneat/falso';

test('check sum function', () => {
const a = randNumber();
const b = randNumber();

expect(sum(a)(b)).toBe(a+b);

});

test('check color function', () => {
  const func = getNewColor();

  expect(func()).toBe(colors[0]);
  expect(func()).toBe(colors[1]);
  expect(func()).toBe(colors[2]);
  expect(func()).toBe(colors[3]);
  expect(func()).toBe(colors[4]);
  expect(func()).toBe(colors[0]);

});

