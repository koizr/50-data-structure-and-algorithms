import { elem } from "../util";

/**
 * 1.10 ライブラリを全く使わないで配列から重複を削除するにはどうすればよいですか？
 */
export function nub(xs) {
  return xs.reduce(
    (removed, x) => (elem(x, removed) ? removed : removed.concat(x)),
    []
  );
}
