import { nub } from "./1.10";

test("to be distinct", () => {
  expect(nub([1, 1, 2, 3, 4, 3, 2])).toEqual([1, 2, 3, 4]);
});
