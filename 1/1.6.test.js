import nub from "./1.6"

test('remove duplicate', () => {
    expect(nub([1, 1, 2, 3, 4, 4, 4, 5])).toEqual([1, 2, 3, 4, 5])
});
