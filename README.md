# 

`CodeCheck` is an AI-powered code reviewer web application. It allows developers to submit their code and get back detailed bug reports, explanations, and the corrected version of their code using Gemini 2.5 Flash.

## 🧠 Features

- 🚀 Paste any development code and get instant feedback
- 🪲 Detects bugs and provides explanation
- 🛠️ Returns corrected and improved code
- 🤖 Powered by Gemini 2.5 Flash
- ⚙️ Simple and clean code editor UI with syntax highlighting

## 🛠️ Tech Stack

- **Frontend:** React, TailwindCSS, PrismJS, React Markdown, React Simple Code Editor
- **Backend:** Node.js, Express, Gemini AI API
- **Others:** Axios, CORS, Nodemon

## 💡 Usage

Just paste your code in the editor and receive:
- Detected bugs  
- Explanation of issues  
- AI-generated corrected code  

### 📌 Example

#### Input: provided to app
```javascript
function sum () {
    return a+b;
}
```

#### Review: provided by app
* **Missing Parameters**: The function `sum` is defined without any parameters. `a` and `b` are global variables, which
can lead to unexpected behavior and make the function less reusable. It's better to pass `a` and `b` as arguments.

* **Undeclared Variables**: `a` and `b` are not declared, which means they implicitly become global variables (in
non-strict mode) or cause a `ReferenceError` (in strict mode). This is bad practice and can lead to unintended side
effects if `a` or `b` are used elsewhere.

* **Lack of Readability and Reusability**: Without parameters, this function relies on external variables, making it
hard to understand what values it's summing without inspecting the surrounding code. It also cannot be easily reused to
sum different numbers.

**Fixed Code:**

```javascript
function sum(a, b) {
return a + b;
}
```
