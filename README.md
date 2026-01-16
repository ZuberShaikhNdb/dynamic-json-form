# Dynamic JSON Configuration Renderer

A React-based application that dynamically renders editable UI forms from backend-provided JSON configuration.  
The UI is generated entirely from data, without hardcoding any fields, and supports deeply nested objects and arrays.

---

## 🚀 Live Demo

🔗 **Deployed Application:**  
dynamic-json-form.vercel.app

🔗 **GitHub Repository:**  
https://github.com/your-username/dynamic-json-form

---

## 📌 Problem Overview

Many internal platforms generate UI dynamically from backend configuration rather than hardcoded forms.  
These configurations are often deeply nested, evolve over time, and must scale without code changes.

This project demonstrates:
- Data-driven UI rendering
- Recursive component design
- Clean state management for dynamic JSON structures

---

## ✨ Features

- 🔁 **Fully Dynamic Rendering**
  - UI generated entirely from JSON configuration
  - No hardcoded keys or fields

- 🧠 **Typed Schema Inference**
  - Automatically infers data types (string, number, boolean, object, array)
  - Builds a typed schema from raw JSON

- 🧩 **Recursive Rendering**
  - Supports deeply nested objects
  - Supports arrays with indexed editing

- 📝 **Editable Configuration**
  - Users can modify values directly in the UI
  - Original JSON structure is preserved

- 📤 **Submission & Preview**
  - Final updated configuration is logged and previewed in read-only mode

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Routing:** React Router DOM
- **Styling:** Plain CSS
- **Deployment:** Vercel

---

## 📂 Project Structure
src/
├── components/
│ ├── JsonForm.jsx # Recursive JSON renderer
│ ├── FieldRenderer.jsx # Input rendering by data type
│
├── pages/
│ ├── Home.jsx
│ ├── Editor.jsx
│ ├── Preview.jsx
│ └── About.jsx
│
├── utils/
│ ├── schemaBuilder.js # Typed schema generator
│ └── updateValue.js # Deep JSON state update helper
│
├── data/
│ └── config.json # Sample backend configuration
│
├── Layout.jsx
├── main.jsx
├── index.css

