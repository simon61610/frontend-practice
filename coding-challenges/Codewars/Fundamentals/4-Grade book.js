/* ==================== 題目 ==================== */
// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
/*
完成一個函式，讓它可以計算傳入的三個分數的平均值，
並回傳對應的「成績等級（字母）」。

分數對應等級如下：

數值分數            等級
90 <= score <= 100   'A'
80 <= score < 90     'B'
70 <= score < 80     'C'
60 <= score < 70     'D'
0 <= score < 60      'F'

測試資料的分數都會介於 0 到 100 之間，
不需要處理負數或大於 100 的情況。
*/

/* ==================== 我的解法 ==================== */
function getGrade(s1, s2, s3) {
  const scoreArr = [s1, s2, s3]
  const totalScore = scoreArr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  })

  const averageScore = totalScore / scoreArr.length

  if (averageScore >= 90) {
    return 'A'
  } else if (averageScore >= 80) {
    return 'B'
  } else if (averageScore >= 70) {
    return 'C'
  } else if (averageScore >= 60) {
    return 'D'
  } else {
    return 'F'
  }
}

/* ==================== 解法參考 ==================== */
function getGradeRef(...scores) {
  let average = scores.reduce((a, b) => a + b) / scores.length
  
  if (average >= 90) return 'A'
  else if (average >= 80) return 'B'
  else if (average >= 70) return 'C'
  else if (average >= 60) return 'D'
  else return 'F'
}

/* ==================== 我的筆記 ==================== */
// Rest Parameters（剩餘參數）-> 會把「所有傳進來的參數」收集成一個陣列
function test(...nums) {
  console.log(nums)
}

test(1, 2, 3)