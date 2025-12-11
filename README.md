# 🖼️ AI Background Removal (Full-Stack MERN SaaS)

A production-ready **full-stack SaaS-style AI Background Removal Web App** built using the **MERN stack**. Users can upload images and instantly remove the background using the **ClipDrop AI API**, manage credits, authenticate securely, and purchase credits via Razorpay.
* **Frontend (Vercel):** [https://bg-removal-project-kappa.vercel.app](https://bg-removal-project-kappa.vercel.app)
* **Backend (Render):** [https://bg-removal-project-server.onrender.com](https://bg-removal-project-server.onrender.com)

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
## 🏗️ Architecture Overview

```markdown
## 🏗️ Architecture Overview

Client (React + Vite + Tailwind)
|
| ---> API Requests (Axios)
|
Backend (Node + Express)
|
| ---> JWT Authentication
| ---> Razorpay Payment Integration
| ---> Credit Deduction Logic
| ---> ClipDrop AI API Processing
|
Database (MongoDB + Mongoose)
```
---
## 📁 Folder Structure

<details>
<summary><strong>📦 Click to expand the full project structure</strong></summary>

  
    BG-REMOVAL-PROJECT/
    │
    ├── client/                     # Frontend (React + Vite)
    │   ├── src/
    │   │   ├── components/
    │   │   ├── pages/
    │   │   ├── context/
    │   │   ├── utils/
    │   │   └── App.jsx
    │   └── vite.config.js
    │
    ├── server/                     # Backend (Node + Express)
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   └── server.js
    │
    └── README.md


</details>


## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/mrsarthakgupta/BG-REMOVAL-PROJECT
cd BG-REMOVAL-PROJECT
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
## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/auth/signup` | Register a new user |
| **POST** | `/api/auth/login` | Log in user and return JWT token |
| **GET**  | `/api/user/credits` | Get user credit balance |
| **POST** | `/api/payment/create-order` | Create Razorpay order for credits |
| **POST** | `/api/payment/verify` | Verify Razorpay payment signature |
| **POST** | `/api/remove-bg` | Remove background using ClipDrop AI |
---
## 🌐 Deployment Links

* **Frontend (Vercel):** [https://bg-removal-project-kappa.vercel.app](https://bg-removal-project-kappa.vercel.app)
* **Backend (Render):** [https://bg-removal-project-server.onrender.com](https://bg-removal-project-server.onrender.com)

---
## 🧠 What I Learned

- How to integrate AI APIs (ClipDrop) for real-time image processing  
- Implementing secure JWT authentication with protected routes  
- Building a credit-based usage system linked to payments  
- Connecting Razorpay payment gateway (order creation + verification)  
- Handling binary image responses and file downloads  
- Structuring scalable MERN applications with clean folder architecture  
- Deploying frontend on Vercel and backend on Render  
- Managing environment variables and API keys securely
---
## 🗺️ Roadmap (Future Enhancements) 
-  Bulk background removal (multiple images at once)  
-  User analytics dashboard  
-  Subscription-based plans (monthly/yearly)  
-  Additional AI tools like Enhance, Upscale, Blur, Shadow Generation  
-  Admin panel for managing users, payments, and credits  
-  Dark mode UI for better user experience  
-  Faster backend queue system for heavy image processing
---

## 🎯 Summary

This project demonstrates a real-world **SaaS-style MERN application** with AI integration, authentication, payments, and cloud deployment — perfect for showcasing full-stack development skills.

---

## ⭐ Author

**Sarthak Gupta** — Full Stack Developer

---
