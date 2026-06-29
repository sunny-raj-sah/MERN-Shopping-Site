 # 🛍️ Trendora

A modern **Full-Stack E-Commerce Web Application** built with the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**. Trendora provides a seamless online shopping experience with secure authentication, product browsing, advanced filtering, wishlist management, shopping cart, address management, checkout, order tracking, and a fully responsive user interface.

---

# 🚀 Live Demo

### 🌐 Frontend

https://mern-shopping-site-43xo.vercel.app/

### ⚙️ Backend API

https://mern-shopping-site.vercel.app/api

---

# 📌 Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Secure Token Storage
- Persistent Login
- Logout
- Protected Routes
- Automatic Redirection for Unauthorized Users

---

## 🏠 Home Page

- Modern Hero Banner
- Featured Categories
- Category Navigation
- New Arrival Collections
- Responsive Navigation Bar
- Global Search Bar
- Footer
- Fully Responsive Layout

---

## 🛒 Products

- View All Products
- Dynamic Product Listing
- Product Details Page
- Featured Products
- Responsive Product Cards
- Product Rating Display
- Brand Information
- Category & Subcategory Information

---

## 🔍 Search & Filtering

- Global Product Search
- Filter by Brand
- Filter by Category
- Filter by Subcategory
- Filter by Rating
- Filter by Price Range
- Sort by Price (Low → High)
- Sort by Price (High → Low)
- Clear All Filters
- URL-Based Category Navigation

---

## ❤️ Wishlist

- Add Product to Wishlist
- Remove Product from Wishlist
- Wishlist Counter
- Empty Wishlist Screen
- Move Products Between Wishlist and Cart
- Persistent Wishlist

---

## 🛍️ Shopping Cart

- Add Product to Cart
- Remove Product from Cart
- Increase Quantity
- Decrease Quantity
- Prevent Quantity Below One
- Cart Item Counter
- Price Summary
- Total Items Calculation
- Total Price Calculation
- Empty Cart Screen
- Continue Shopping Button

---

## 📍 Address Management

- Add New Address
- Edit Existing Address
- Delete Address
- Select Delivery Address
- Multiple Address Support
- Address Validation
- Reusable Address Form Component

---

## 💳 Checkout

- Delivery Address Selection
- Order Summary
- Cart Item Review
- Total Price Calculation
- Total Item Calculation
- Place Order
- Clear Cart After Successful Order
- Order Success Page

---

## 📦 Order Management

- Place Order
- Order History
- Order Summary
- Purchased Products
- Delivery Address Details
- Order Date & Time
- Total Amount
- Total Items Purchased

---

## 👤 User Profile

- Personal Information
- Order History
- Address Management
- Tab-Based Navigation

---

## 🔔 Toast Notifications

The application provides instant feedback using **React Toastify** for all important user actions.

Notifications include:

- Product Added to Cart
- Product Removed from Cart
- Cart Quantity Increased
- Cart Quantity Decreased
- Product Added to Wishlist
- Product Removed from Wishlist
- Product Moved from Cart to Wishlist
- Product Moved from Wishlist to Cart
- Address Added
- Address Updated
- Address Deleted
- Delivery Address Selected
- Order Placed Successfully
- Login Successful
- Registration Successful
- Logout Successful

---

## 🛣️ Routing

- Home
- Products
- Product Details
- Wishlist
- Cart
- Checkout
- Address
- Profile
- Order Success
- Login
- Register
- 404 Not Found
- Protected Routes

---

## 📱 User Experience

- Responsive Design
- Mobile-Friendly UI
- Bootstrap 5 Components
- Bootstrap Icons
- Sticky Filter Sidebar
- Dynamic Badge Counters
- Loading States
- Error Handling
- Empty State Screens
- Clean UI
- Reusable Components

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- React Router DOM
- Context API
- useReducer
- Axios
- Bootstrap 5
- Bootstrap Icons
- React Toastify

---

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv
- cors

---

# 📂 Project Structure

```text
MERN-Shopping-Site/
│
├── shopping-site/
│   ├── public/
│   ├── src/
│   │
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── reducers/
│   ├── utils/
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
│   ├── app.js
│   └── server.js
│
├── README.md
└── .gitignore
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/sunny-raj-sah/MERN-Shopping-Site.git

cd MERN-Shopping-Site
```

---

# ⚙️ Backend Setup

## Navigate

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

## Create `.env`

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

## Start Backend

```bash
npm run dev
```

Server runs on

```text
http://localhost:5000
```

---

# 💻 Frontend Setup

## Navigate

```bash
cd shopping-site
```

## Install Dependencies

```bash
npm install
```

## Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on

```text
http://localhost:5173
```

---

# 🔑 Authentication Flow

1. User Registers
2. Password is encrypted using bcrypt
3. JWT Token is generated
4. Token is stored in Local Storage
5. Protected API requests send the Authorization header

```text
Authorization: Bearer <token>
```

---

# 📡 API Endpoints

## Authentication

```http
POST   /api/auth/register
POST   /api/auth/login
GET    /api/auth/profile
```

---

## Products

```http
GET    /api/products
GET    /api/products/:id
```

---

## Wishlist

```http
GET      /api/wishlist
POST     /api/wishlist/:productId
DELETE   /api/wishlist/:productId
```

---

## Cart

```http
GET      /api/cart
POST     /api/cart/:productId
PATCH    /api/cart/increase/:productId
PATCH    /api/cart/decrease/:productId
DELETE   /api/cart/:productId
```

---

# 🗄️ Database Collections

## Users

```text
name
email
password
```

---

## Products

```text
title
description
image
category
subcategory
brand
price
rating
stock
featured
```

---

## Wishlist

```text
userId
productId
```

---

## Cart

```text
userId
productId
quantity
```

---

# 📄 Application Pages

- 🏠 Home
- 🛍️ Products
- 📦 Product Details
- ❤️ Wishlist
- 🛒 Cart
- 📍 Address
- 💳 Checkout
- ✅ Order Success
- 👤 Profile
- 🔐 Login
- 📝 Register
- ❌ 404 Not Found

---

# 🧠 State Management

The application uses **React Context API + useReducer** for centralized state management.

### Contexts

- Authentication Context
- Product Context
- Cart Context
- Wishlist Context
- Search Context
- Address Context
- Order Context

---

# 🔄 Application Flow

```text
React Components
        │
        ▼
Context API + useReducer
        │
        ▼
Axios API Calls
        │
        ▼
Express Routes
        │
        ▼
Controllers
        │
        ▼
MongoDB Database
        │
        ▼
API Response
        │
        ▼
React UI Updates
```

---

# 🔒 Security

- JWT Authentication
- Password Hashing (bcrypt)
- Protected Routes
- Environment Variables
- CORS Configuration
- Secure API Communication

---

# 🚀 Future Improvements

- Product Reviews & Ratings
- Coupon System
- Razorpay Integration
- Stripe Integration
- Online Payments
- Order Tracking
- Admin Dashboard
- Inventory Management
- Product Image Upload
- User Profile Editing
- Email Verification
- Forgot Password
- Google Authentication
- Pagination
- Infinite Scrolling
- Product Recommendations
- Dark Mode

---

# 👨‍💻 Author

## Sunny Raj

### LinkedIn

https://www.linkedin.com/in/sunny-raj-885588313/

### GitHub

https://github.com/sunny-raj-sah

---

# 📄 License

This project is licensed under the **MIT License**.

---

# ⭐ Support

If you found this project helpful:

- ⭐ Star this repository
- 🍴 Fork it
- 🐞 Report Issues
- 🚀 Submit Pull Requests

---

## ❤️ Built with React, Node.js, Express, MongoDB, and Bootstrap.