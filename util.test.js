import { range } from "./util"

test("generate range 1 to 3", () => {
    const nums = range(1, 3)
    expect(nums.next().value).toBe(1)
    expect(nums.next().value).toBe(2)
    expect(nums.next().value).toBe(3)
})
