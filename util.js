/**
 * 値が配列に含まれていたら true, そうでなければ false を返す
 * @param {T} target
 * @param {Array.<T>} searchee
 */
export function elem(target, searchee) {
  return -1 != searchee.findIndex(x => x === target);
}

/**
 * start から end までの連続した数列を生成する
 * @param {number} start
 * @param {number} end
 */
export function* range(start, end) {
  for (; start <= end; start++) {
    yield start;
  }
}
