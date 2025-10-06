/* ==================== 題目 ==================== */
// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/javascript
/* 
給定一個整數陣列，請回傳一個新陣列，
其中每個數值都變成原來的兩倍

[1, 2, 3] ➜ [2, 4, 6]
*/


/* ==================== 我的解法 ==================== */
function maps(arr){
  return arr.map(n => n * 2)
}


/* ==================== 解法參考 ==================== */
// 用 for 迴圈寫法
function maps(x){
    //return x.map(el => el * 2);
    let arr = [];
    for(let i = 0; i < x.length; i++){
        arr.push(x[i] * 2);
    }
    return arr;
}


/* ==================== 我的筆記 ==================== */
