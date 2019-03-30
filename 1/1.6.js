/**
 * 6. 与えられた配列から重複を削除するにはどうすればよいですか？
 *
 * Set を使えば簡単だろうけど、アルゴリズムの問題なので使わないでやってみる
 */
export default xs => {
    return xs.reduce((acc, value) => {
        if (!acc.includes(value)) {
            acc.push(value)
        }
        return acc
    }, [])
}
