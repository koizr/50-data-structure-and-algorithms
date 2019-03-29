/**
 * 2. 与えられた整数の配列において重複した数字を探すにはどうすればよいですか？
 */
export default nums => {
    const counts = nums.reduce((acc, value) => {
        if (acc.hasOwnProperty(value)) {
            acc[value] = acc[value] + 1
        } else {
            acc[value] = 1
        }
        return acc;
    }, {})
    return Object.keys(counts).filter(prop => counts[prop] > 1).map(Number)
}
