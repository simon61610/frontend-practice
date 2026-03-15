// 請建立一個 Proxy 物件，用來限制使用者資料的修改。

// 請建立一個 proxyUser，讓它在 修改屬性時：

/*
1. 如果屬性存在：
   - 允許修改
   - console 印出：
     修改 age 從 20 變成 25

2. 如果屬性不存在：
   - 禁止新增
   - console 印出：
     gender 不存在，禁止新增

3. user 物件不可以被新增新的屬性
*/

/** 已知資料 */
const user = { name: 'Tom', age: 20 }

// ==================================================
// Ans:
const proxyUser = new Proxy(user, {
  set(target, prop, value, receiver) {
    const allowModify = () => {
      console.log(`修改 ${prop} 從 ${target[prop]} 變成 ${value}`)
      return Reflect.set(target, prop, value, receiver)
    }
    const forbidModify = () => {
      console.log(`${prop} 不存在，禁止新增`)
      return false
    }

    return prop in target ? allowModify() : forbidModify()
  }
})

// ==================================================

proxyUser.age = 25
proxyUser.gender = 'male'

console.log(user)
