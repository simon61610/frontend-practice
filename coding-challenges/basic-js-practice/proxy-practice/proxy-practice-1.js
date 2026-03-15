// 請建立一個 Proxy 物件，用來監控使用者資料的修改。

// 請建立一個 proxyUser，讓它在 修改屬性時：
/* 
1. 在 console 印出修改訊息: 
    修改 name 從 Tom 變成 Jack
2. 再把值真的寫回原本的 user 物件 
*/

/** 已知資料 */
const user = {
  name: 'Tom',
  age: 20
}

// ==================================================
// Ans:
const proxyUser = new Proxy(user, {
  get(target, prop, receiver) {
    const value = Reflect.get(target, prop, receiver)
    console.log(`取得 ${prop} 的資料為 ${value}`)
    return value
  },

  set(target, prop, value, receiver) {
    const oldValue = target[prop]
    console.log(`修改 ${prop} 從 ${oldValue} 變成 ${value}`)
    return Reflect.set(target, prop, value, receiver)
  }
})

// ==================================================

proxyUser.name = 'Simon'
console.log(proxyUser.name)
proxyUser.age = 29
console.log(proxyUser.age)
