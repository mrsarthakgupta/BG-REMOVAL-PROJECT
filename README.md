# 🖼️ AI-Bg Removal

This project is a full-stack SaaS-style application built using the **MERN stack** that offers an **AI-powered image background removal** service.  
Users can upload an image and instantly get a clean, transparent-background version using the **ClipDrop API**, while managing usage with a **credit-based system** and **secure authentication**.

---

## 🚀 Features

🧠 AI-powered background removal using **ClipDrop API**  
🔐 JWT-based authentication system for secure login/logout  
🎟️ Credit-based access control to limit API usage per user  
💳 Razorpay payment gateway integration for credit purchase  
🖼️ Instant image processing with support for previews and download  
🛡️ Secure password handling with **bcrypt.js** hashing  

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- ⚛ React.js  
- 💨 Tailwind CSS  
- 🌐 Context API  

### 🔧 Backend
- Node.js  
- Express.js  

### 💾 Database
- 🍃 MongoDB  

### 🔐 Authentication & Security
- JWT (JSON Web Tokens)  
- bcrypt.js  

### 💳 Payments
- Razorpay (Test Mode)  

### ✨ AI & Image Processing
- ClipDrop API  

# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
