# Contributing Guide（貢獻指南）

此 repository 用來練習前端開發相關技術與程式練習。

以下說明此專案的 **Git commit 規範** 與基本貢獻原則。

---

# Commit Message 規範

所有 commit message 建議遵循以下格式：

<type>(scope): <description>

範例：

feat(js): 新增 Proxy 練習
fix(js): 修正 debounce 實作
docs(js): 新增 Proxy 筆記
refactor(js): 重構 throttle 程式碼

---

# Commit 類型（Type）

| Type | 說明 |
|-----|------|
| feat | 新增功能或新的練習 |
| fix | 修正 bug |
| refactor | 重構程式碼（不改變功能） |
| docs | 新增或修改筆記、文件 |
| style | 程式碼排版調整（不影響功能） |
| chore | 專案維護或設定調整 |

---

# Scope（範圍）

Scope 用來說明此次修改的內容分類。

本 repository 常見 scope：

| Scope | 說明 |
|------|------|
| js | JavaScript 練習 |
| css | CSS 練習 |
| html | HTML 練習 |
| git | Git 相關練習 |
| note | 學習筆記 |

範例：

feat(js): 新增 Proxy set trap 練習
docs(js): 新增 Proxy 概念筆記
refactor(js): 簡化 debounce 實作

---

# Commit Message 撰寫建議

撰寫 commit message 時建議遵守以下原則：

- type 使用 **小寫**
- description 保持 **簡短清楚**
- 描述 **這次修改做了什麼**

良好範例：

feat(js): 新增 Proxy 驗證範例  
fix(js): 修正 throttle 計時問題  
docs(js): 新增 closure 筆記  

不建議的寫法：

update code  
fix bug  
change something  

---

# Repository 目的

此 repository 的主要用途：

- 練習前端程式技術
- 強化 JavaScript 基礎與進階概念
- 測試與實驗新的程式寫法
- 記錄個人學習過程