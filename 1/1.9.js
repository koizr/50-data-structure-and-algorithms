/**
 * 1.9 配置された配列を反転するにはどうすればよいですか？
 */
export function reverse(xs) {
  return xs.reduce((acc, x) => [x].concat(acc), []);
}
