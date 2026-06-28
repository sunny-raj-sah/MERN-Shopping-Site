# 🛍️ MERN Shopping Site

A full-stack e-commerce web application built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). The application provides a modern shopping experience with secure authentication, product browsing, advanced filtering, wishlist management, shopping cart functionality, and responsive design.

---

# 🚀 Live Demo

### Frontend

```
https://your-frontend-url.vercel.app
```

### Backend API

```
https://your-backend-url.onrender.com
```

---

# 📌 Features

## User Authentication

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Persistent Login
* Logout

---

## Products

* View All Products
* Product Details Page
* Product Search
* Dynamic Product Listing
* Featured Products
* Responsive Product Cards

---

## Product Filters

* Search Products
* Filter by Category
* Filter by Rating
* Filter by Price Range
* Sort by Price

  * Low to High
  * High to Low
* Clear All Filters

---

## Wishlist

* Add Product to Wishlist
* Remove Product from Wishlist
* Persistent Wishlist
* Wishlist Count

---

## Cart

* Add to Cart
* Remove from Cart
* Increase Quantity
* Decrease Quantity
* Price Calculation
* Total Items
* Total Price
* Discount Calculation

---

## User Interface

* Responsive Design
* Bootstrap 5
* React Router
* Sticky Filter Sidebar
* Modern Product Cards
* Loading States
* Error Handling

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Context API
* useReducer
* Axios
* Bootstrap 5
* Bootstrap Icons

---

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcryptjs
* dotenv
* cors

---

# 📂 Project Structure

```
shopping-site/
│
├── frontend/
│   ├── src/
│   │
│   ├── components/
│   ├── context/
│   ├── reducers/
│   ├── pages/
│   ├── api/
│   ├── utils/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── server.js
│   └── app.js
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/sunny-raj-sah/MERN-Shopping-Site.git

cd shopping-site
```

---

# Backend Setup

## Navigate

```bash
cd backend
```

## Install Packages

```bash
npm install
```

## Create .env

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

## Run Backend

```bash
npm run dev
```

Server starts at

```
http://localhost:5000
```

---

# Frontend Setup

## Navigate

```bash
cd frontend
```

## Install Packages

```bash
npm install
```

## Create .env

```env
VITE_API_URL=http://localhost:5000/api
```

## Start Frontend

```bash
npm run dev
```

Frontend starts at

```
http://localhost:5173
```

---

# 🔑 Authentication Flow

1. User Registers
2. Password is encrypted
3. JWT Token generated
4. Token stored in Local Storage
5. Every protected API request sends Authorization Header

```
Authorization: Bearer <token>
```

---

# 📡 API Endpoints

## Authentication

```
POST /api/auth/register

POST /api/auth/login

GET /api/auth/profile
```

---

## Products

```
GET /api/products

GET /api/products/:id
```

---

## Wishlist

```
GET /api/wishlist

POST /api/wishlist/:productId

DELETE /api/wishlist/:productId
```

---

## Cart

```
GET /api/cart

POST /api/cart/:productId

PATCH /api/cart/increase/:productId

PATCH /api/cart/decrease/:productId

DELETE /api/cart/:productId
```

---

# 📦 Database Collections

## Users

```
name

email

password
```

---

## Products

```
title

description

image

category

brand

price

rating

stock

featured
```

---

## Wishlist

```
userId

productId
```

---

## Cart

```
userId

productId

quantity
```

---

# 📱 Pages

* Home
* Products
* Product Details
* Wishlist
* Cart
* Login
* Register
* 404 Page

---

# 🧠 State Management

The application uses **React Context API + useReducer**.

Contexts

* Auth Context
* Product Context
* Wishlist Context
* Cart Context
* Search Context

---

# 🔄 Data Flow

```
React Component

↓

Context

↓

API

↓

Express

↓

Controller

↓

MongoDB

↓

Response

↓

React UI
```

---

# 🛡 Security

* JWT Authentication
* Password Hashing using bcrypt
* Protected Routes
* Environment Variables
* CORS Configuration

---

# 📈 Future Improvements

* Product Reviews
* Order Management
* Razorpay Payment Integration
* Stripe Integration
* Address Management
* Coupons
* Admin Dashboard
* Inventory Management
* Product Images Upload
* User Profile
* Order History
* Pagination
* Infinite Scroll
* Product Recommendations
* Dark Mode
* Email Verification
* Forgot Password
* Google Login

---

# Pages

 

```
Home Page
 
Products

Product Details

Wishlist

Cart

Login

Register
```

---

# 👨‍💻 Author

**Sunny Raj**

LinkedIn

```
https://www.linkedin.com/in/sunny-raj-885588313/
```

GitHub

```
https://github.com/sunny-raj-sah
```

---

# 📄 License

This project is licensed under the MIT License.

---

# ⭐ Support

If you found this project helpful:

* ⭐ Star this repository
* 🍴 Fork it
* 🐛 Report Issues
* 🚀 Contribute with Pull Requests

---

Made with ❤️ using the MERN Stack.
