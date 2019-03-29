import { max, min } from "./1.3"

test("max of numbers", () => {
    expect(max([1, 1000, 50, 90])).toBe(1000)
})
test("max of a number", () => {
    expect(max([1])).toBe(1)
})

test("min of numbers", () => {
    expect(min([5, 1, -10, 80000])).toBe(-10)
})
test("min of a number", () => {
    expect(min([1])).toBe(1)
})
