# 📝 NotesApp – Full Stack MERN Application

NotesApp is a full-stack **MERN (MongoDB, Express, React, Node.js)** application that allows users to securely create, organize, and manage notes.  
It includes authentication, protected routes, favorites, archive, and bin functionality.

---

## 🚀 Features

### 🔐 Authentication
- User Signup
- User Login
- JWT-based Authentication
- Protected Routes
- Logout functionality

### 🗒️ Notes Management
- Create Notes
- Pin / Unpin Notes
- Mark Notes as Favorites ⭐
- Archive Notes
- Move Notes to Bin (Trash)
- Restore Notes from Bin
- Delete Notes Permanently

### 📂 Organization
- Home (All Notes)
- Pinned Notes
- Favorites
- Archive
- Bin

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- React Router DOM
- Context API + useReducer
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt.js

### Tools & Services
- MongoDB Atlas
- Postman
- Git & GitHub

---

## 📁 Project Structure
```

notesApp/
│
├── Backend/
│ ├── models/
│ ├── routes/
│ ├── db.js
│ ├── index.js
│ ├── package.json
│ └── .env
│
├── Frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── context/
│ │ ├── pages/
│ │ ├── services/
│ │ └── utils/
│ ├── main.jsx
│ └── package.json
│
├── .gitignore
└── README.md
```

