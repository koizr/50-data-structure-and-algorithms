import resolver from "./1.1"

test("足りない整数なし", () => {
    expect(JSON.stringify(resolver([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])))
        .toBe(JSON.stringify([]))
})

test("5, 6, 10 が足りない", () => {
    expect(JSON.stringify(resolver([1, 2, 3, 4, 7, 8, 9])))
        .toBe(JSON.stringify([5, 6, 10]))
})
