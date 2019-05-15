import { range, elem } from "./util";

test("generate range 1 to 3", () => {
  const nums = range(1, 3);
  expect(nums.next().value).toBe(1);
  expect(nums.next().value).toBe(2);
  expect(nums.next().value).toBe(3);
});

test("the array contians the value", () => {
  expect(elem(2, [1, 2, 3])).toBeTruthy();
});

test("the array doesn't contian the value", () => {
  expect(elem(4, [1, 2, 3])).toBeFalsy();
});
