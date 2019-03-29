/**
 * 3. ソートされていない整数の配列から最大値と最小値を探すにはどうすればよいですか？
 */
const max = nums => nums.reduce((acc, value) => acc > value ? acc : value)
const min = nums => nums.reduce((acc, value) => acc < value ? acc : value)

export { max, min }
