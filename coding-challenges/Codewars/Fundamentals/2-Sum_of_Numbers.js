/* ==================== 題目 ==================== */
// https://www.codewars.com/kata/55f2b110f61eb01779000053/train/javascript
/* 
給定兩個整數 a 和 b，它們可以是 正數或負數。
請找出 從 a 到 b（包含兩端）所有整數的總和 並回傳結果。

如果 a 與 b 相等，則直接回傳其中任意一個（a 或 b）。

- 注意：a 和 b 不一定有大小順序（可能 a > b）。

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
*/


/* ==================== 我的解法 ==================== */
function getSum(a, b){
   let sum = 0
   for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
     sum += i
   }
   return sum
}


/* ==================== 解法參考 ==================== */
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}


function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a + b) / 2;
}


/* ==================== 我的筆記 ==================== */
// 等差級數公式: (首項 + 末項) * (項數 / 2)
// 項數 = |a - b| + 1
// Math.abs() 取絕對值