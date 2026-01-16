# Dynamic JSON Configuration Renderer

A React-based application that dynamically renders editable UI forms from backend-provided JSON configuration.  
The UI is generated entirely from data, without hardcoding any fields, and supports deeply nested objects and arrays.

---

## 🚀 Live Demo

🔗 **Deployed Application:**  
https://dynamic-json-form.vercel.app

🔗 **GitHub Repository:**  
https://github.com/ZuberShaikhNdb/dynamic-json-form.git

---

## 📌 Overview

This project demonstrates how a frontend application can generate user interfaces dynamically from backend-provided JSON configuration instead of relying on hardcoded forms.  
It focuses on scalability, clean state management, and recursive rendering for complex and nested configurations.

---

## ✨ Features

- Fully dynamic UI rendering from JSON configuration
- Automatic type inference (string, number, boolean, object, array)
- Recursive rendering for deeply nested data structures
- Editable configuration with preserved JSON structure
- Read-only preview of the final updated configuration
- No hardcoded keys or fields

---

## 🛠️ Tech Stack

- React + Vite
- React Router DOM
- JavaScript
- Plain CSS
- Vercel (deployment)

---

## ⚙️ Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/ZuberShaikhNdb/dynamic-json-form.git
cd dynamic-json-form

Install dependencies
npm install

Run the Application
npm run dev

Open your browser and visit:
http://localhost:5173
