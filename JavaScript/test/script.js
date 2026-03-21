/** 產生 1~100 之間的隨機亂數 */
let randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)

/** 猜測的數字 */
const guesses = document.querySelector('.guesses')
/** 猜完的結果 */
const lastResult = document.querySelector('.lastResult')
/** 高低猜測提示 */
const lowOrHi = document.querySelector('.lowOrHi')

/** 送出按鈕 */
const guessSubmit = document.querySelector('.guessSubmit')
/** 輸入框 */
const guessField = document.querySelector('.guessField')

/** 猜測次數 */
let guessCount = 1
/** 重置按鈕 */
let resetButton

/** 檢查猜測 */
function checkGuess() {
  const userGuess = Number(guessField.value)

  if (guessCount === 1) {
    guesses.textContent = '先前的猜測：'
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`

  if (userGuess === randomNumber) {
    lastResult.textContent = '恭喜答對！'
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = ''
    startGameOver()
  } else if (guessCount === 10) {
    lastResult.textContent = '遊戲結束！'
    lowOrHi.textContent = ''
    startGameOver()
  } else {
    lastResult.textContent = '你猜錯了！'
    lastResult.style.backgroundColor = 'red'
    if (userGuess > randomNumber) {
      lowOrHi.textContent = '你猜太高了！'
    } else if (userGuess < randomNumber) {
      lowOrHi.textContent = '你猜太低了！'
    }
  }

  guessCount++
  guessField.value = ''
  guessField.focus()
}

const startGameOver = () => {
  guessField.disabled = true
  guessSubmit.disabled = true

  resetButton = document.createElement('button')
  resetButton.textContent = '重新開始'
  document.body.append(resetButton)
  resetButton.addEventListener('click', resetGame)
}

const resetGame = () => {
  guessCount = 1
  const resultParas = document.querySelectorAll('.resultParas p')
  for (const resultPara of resultParas) {
    resultPara.textContent = ''
  }

  resetButton.parentNode.removeChild(resetButton)

  guessField.disabled = false
  guessSubmit.disabled = false
  guessField.value = ''
  guessField.focus()

  lastResult.style.backgroundColor = 'white'

  randomNumber = Math.floor(Math.random() * 100) + 1
}

/** 點擊事件 */
guessSubmit.addEventListener('click', checkGuess)
