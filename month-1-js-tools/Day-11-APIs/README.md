## 🚀 Day 11 – URL Scanner API Project


## 📌 Overview

Today’s mini-project is a CLI tool that checks if a given URL is malicious or safe by using the Malicious Scanner API (RapidAPI).
It integrates environment variables, API requests with Axios, and CLI input with PromptSync.

This project also practices hiding API keys securely with .env so sensitive credentials don’t leak to GitHub.


## 🛠️ Tech Stack

- Node.js

- Axios – for HTTP requests

- Prompt-Sync – for CLI input

- dotenv – to load environment variables securely


## 📂 Project Setup

1. Initialize project

```
npm init -y

```

2. Install dependencies

```
npm install axios prompt-sync dotenv

```

3. Create .env file

```
API_KEY=your_rapidapi_key_here

```

4. Add .gitignore

```
node_modules/
.env

```


## ▶️ Run the Project

```
npm start

```
- or

```
node urlScanner.js

```

## 📜 Example Output

```
Apikey_length 50
Enter url you want to check: https://uiverse.io/

======== 👾 Log Results =======

URL 🌐 : https://uiverse.io/
Status 📝 : safe
Outcome 📂 : The website is safe.

=========================================

```

## 🧠 Lessons Learned

- How to securely store API keys with .env.

- Using PromptSync for interactive CLI projects.

- Making API requests with Axios.

- Parsing API responses and handling undefined safely with optional chaining (?.).


## 💡 Next Steps

- Add input validation (e.g., ensure it’s a valid URL).

- Save scan results to a log file (results.txt).

- Build a batch mode to scan multiple URLs from a file.


✨ This project shows my interest in software engineering + cybersecurity by creating practical tools that align with my career journey.