# 🛒 ShopZone — Full Stack Ecommerce App

A full-stack ecommerce application with authentication, product management, cart, orders, and user profiles.

🌐 **Live Demo:** [shopzone-ecommerce-fawn.vercel.app](https://shopzone-ecommerce-fawn.vercel.app)

---

## ✨ Features

- 🔐 Register & Login with JWT Authentication
- 🛍️ Browse, search & filter products
- 🛒 Add to cart with live cart count
- 📦 Place and view orders
- 👤 User profile (update name, email, password)
- 🎨 Luxury black & gold design
- 📱 Fully responsive

---

## 🧰 Tech Stack

**Frontend**
- React + Vite
- Tailwind CSS
- React Router
- Axios
- Context API (cart state)

**Backend**
- Node.js + Express
- MongoDB Atlas + Mongoose
- JWT Authentication
- REST API

---

## 🚀 Run Locally

### 1. Clone the repo

```bash
git clone https://github.com/sardarMrashed/shopzone-ecommerce.git
cd shopzone-ecommerce
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend:

```bash
npm run dev
```

Backend runs on **http://localhost:5000**

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

Create a `.env` file in the `frontend` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the frontend:

```bash
npm run dev
```

Frontend runs on **http://localhost:5173**

---

## 📁 Project Structure

```
shopzone-ecommerce/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── main.jsx
│   └── index.html
└── README.md
```

---

## 🌐 Deployment

| Service | Platform |
|--------|----------|
| Frontend | [Vercel](https://vercel.com) |
| Backend | [Render](https://render.com) |
| Database | [MongoDB Atlas](https://mongodb.com/atlas) |

---

## 👨‍💻 Author

**Sardar Mrashed**
- GitHub: [@sardarMrashed](https://github.com/sardarMrashed)

---

⭐ If you like this project, give it a star on GitHub!
