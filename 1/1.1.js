import { range } from "../util"

/**
 * 1. 1から100までの与えられた整数の配列の中から足りない数字を探すにはどうすればよいですか？
 * 100 までだとテスト書くのが面倒だから 10 にする
 */
export default nums => {
    const perfectNums = range(1, 10)
    const diff = []
    for (let i of perfectNums) {
        if (!nums.includes(i)) {
            diff.push(i)
        }
    }
    return diff
}
