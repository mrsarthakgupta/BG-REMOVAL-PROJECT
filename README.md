# 🖼️ AI Background Removal (Full-Stack MERN SaaS)

A production-ready **full-stack SaaS-style AI Background Removal Web App** built using the **MERN stack**. Users can upload images and instantly remove the background using the **ClipDrop AI API**, manage credits, authenticate securely, and purchase credits via Razorpay.

---

## 🚀 Features

* 🧠 **AI-powered background removal** using ClipDrop API
* 🔐 **JWT-based authentication** (login/signup/logout)
* 🎟️ **Credit-based usage system** to limit AI API calls
* 💳 **Razorpay payment gateway** integration to buy credits
* 🖼️ **Instant image processing**, preview & transparent PNG download
* 🛡️ **Secure password hashing** with bcrypt.js
* ⚡ Smooth and responsive UI with React + Tailwind

---

## 🛠️ Tech Stack

### 🖥️ Frontend

* ⚛ **React.js (Vite)**
* 💨 **Tailwind CSS**
* 🌐 React Router DOM
* ⚙️ Context API for global state

### 🔧 Backend

* **Node.js**
* **Express.js**

### 💾 Database

* 🍃 **MongoDB + Mongoose**

### 🔐 Authentication & Security

* **JWT** (JSON Web Tokens)
* **bcrypt.js** for hashing

### 💳 Payments

* **Razorpay** (Test Mode)

### ✨ AI & Image Processing

* **ClipDrop API**

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-url>
cd <project-folder>
```

---

## 🔧 Backend Setup

### 2️⃣ Install backend dependencies

```bash
cd server
npm install
```

### 3️⃣ Create a `.env` file in the `server` folder

```
MONGO_URL=your_mongo_uri
JWT_SECRET=your_secret
CLIPDROP_API_KEY=your_key
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
CLIENT_URL=http://localhost:5173
```

### 4️⃣ Start backend

```bash
npm start
```

---

## 🎨 Frontend Setup

### 5️⃣ Install frontend dependencies

```bash
cd ../client
npm install
```

### 6️⃣ Create `.env` file in `client`

```
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_test_key
```

### 7️⃣ Start frontend

```bash
npm run dev
```

---

## 🌐 Deployment Links

* **Frontend (Vercel):** [https://bg-removal-project-kappa.vercel.app](https://bg-removal-project-kappa.vercel.app)
* **Backend (Render):** [https://bg-removal-project-server.onrender.com](https://bg-removal-project-server.onrender.com)

---

## 🎯 Summary

This project demonstrates a real-world **SaaS-style MERN application** with AI integration, authentication, payments, and cloud deployment — perfect for showcasing full-stack development skills.

---

## ⭐ Author

**Sarthak Gupta** — Full Stack Developer

---
