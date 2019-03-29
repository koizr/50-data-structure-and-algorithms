import resolver from "./1.2"

test("Dupulicate 2 and 5", () => {
    expect(JSON.stringify(resolver([1, 2, 2, 3, 8, 6, 9, 5, 7, 2, 2, 4, 5, 0, 5])))
        .toBe(JSON.stringify([2, 5]))
})
