/* ==================== 題目 ==================== */
// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
/*
給你一個整數陣列。

請回傳一個新陣列：
- 第一個元素：正數的數量（> 0）
- 第二個元素：負數的總和（< 0）
※ 0 不算正數也不算負數

如果輸入是空陣列或是 null，請回傳空陣列 []

範例：
輸入：
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]

輸出：
[10, -65]
*/

/* ==================== 我的解法 ==================== */
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return []
  }

  const positiveCount = input.reduce((acc, cur) => {
    if(cur > 0){
      return acc + 1
    } else {
      return acc
    }    
  }, 0)

  const negativeSum = input.reduce((acc, cur) => {
    if(cur < 0){
      return acc + cur
    } else {
      return acc
    }
  }, 0)

  return [positiveCount, negativeSum]
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))

/* ==================== 解法參考 ==================== */
function countPositivesSumNegativesRef(input) {
  if (!Array.isArray(input) || !input.length) return [];
  return input.reduce((arr, n) => {
    if (n > 0) arr[0]++;
    if (n < 0) arr[1] += n;
    return arr;
  }, [0, 0]);
}

function countPositivesSumNegatives(input) {
    if (input == null || input.length == 0)
      return [];
    
    var positive = 0;
    var negative = 0;
    
    for (var i=0, l=input.length; i<l; ++i)
    {
      if (input[i] > 0)
        ++ positive;
      else
        negative += input[i];
    }
    
    return [positive, negative];
}

/* ==================== 我的筆記 ==================== */
// i < input.length -> 每次迴圈都會「重新讀一次 length」
// l = input.length; i < l -> 只在一開始讀一次