/* ==================== 題目 ==================== */
// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
/*
給你一個隨機的非負整數（0 或以上），
請將這個數字的「每一位數字」拆開，
並以「反轉順序」放入一個陣列中回傳。

範例（輸入 => 輸出）：
35231 => [1,3,2,5,3]
0     => [0]
*/

/* ==================== 我的解法 ==================== */
function digitize(n) {
  const numStr = String(n)
  const numStrArr = numStr.split('')
  let numArr = []
  for (const numStr of numStrArr) {
    numArr.push(Number(numStr))
  }

  return numArr.reverse()
}

/* ==================== 解法參考 ==================== */
function digitize(n) {
  return String(n).split('').map(Number).reverse()
}

/* ==================== 我的筆記 ==================== */
// .map(Number) -> .map(item => Number(item))