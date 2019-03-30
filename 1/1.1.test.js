import resolver from "./1.1"

test("足りない整数なし", () => {
    expect(resolver([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
        .toEqual([])
})

test("5, 6, 10 が足りない", () => {
    expect(resolver([1, 2, 3, 4, 7, 8, 9]))
        .toEqual([5, 6, 10])
})
