function doFirst(){
    document.querySelector('#caculateBtn').addEventListener('click', caculate)
    document.querySelector('#cleanResultBtn').addEventListener('click', cleanResult)
}

// ========== 計算功能 ==========
function caculate(){
    const num1 = Number(document.querySelector('.num1').value)
    const num2 = Number(document.querySelector('.num2').value)
    const operator = document.querySelector('.operators').value
    let ans = null;

    switch(operator){
        case '+':
            ans = num1 + num2
            break;
        case '-':
            ans = num1 - num2
            break;
        case '×':
            ans = num1 * num2
            break;
        case '÷':
            if(num2 == 0){
                ans = num1 >= 0 ? "無限大" : "負無限大"
            }else{
                ans = num1 / num2
            }
            break;
    }
    
    // 檢查是否有小數點
    ans = String(ans).indexOf('.') > -1 ? ans.toFixed(2) : ans

    const ansStr = `${num1} ${operator} ${num2 > 0 ? num2 : ('(' + num2 + ')')} = ${ans}`

    const result = document.querySelector('.result')
    const p = document.createElement('p')
    p.textContent = ansStr
    result.appendChild(p)

    if(result.childElementCount > 5){
        result.removeChild(result.firstChild)
    }

    updateCount()

    // 自動清空輸入
    document.querySelector('.num1').value = 0
    document.querySelector('.num2').value = 0
}

// ========== 清除功能 ==========
function cleanResult(){
    const result = document.querySelector('.result')

    if(result.innerHTML == ''){
        alert('請先計算')
        return
    }

    result.innerHTML = ''

    updateCount()

    // 利用 JavaScript 的事件循環（Event Loop），把 alert 放到下一個「事件階段」，讓 innerHTML = '' 先觸發畫面更新
    setTimeout(() => {
        alert('已清空計算結果')
    }, 0)
}

// ========== 筆數更新 ==========
function updateCount(){
    const countSpan = document.querySelector('.countLines span')
    const result = document.querySelector('.result')
    countSpan.textContent = result.childElementCount
}

window.addEventListener('load', doFirst)