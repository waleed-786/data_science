# 🍽️ Canteen Review & Ordering API (`canteen-review-api`)

A clean, production-structured RESTful backend service built with **Node.js**, **Express.js**, and **Microsoft SQL Server (MSSQL)** for a campus canteen review and management system.

---

## ✨ Features
* **Pagination & Filtering:** Paginate stall results (`?page=1&limit=5`) and filter by category (`?category=Food`).
* **Relational Joins:** Fetch menu items dynamically joined with their respective canteen stalls (`INNER JOIN`).
* **Full CRUD Operations:** Complete Create, Read, Update, and Delete endpoints for user reviews with built-in database constraints (preventing duplicate user reviews per stall).
* **Connection Pooling:** Managed MSSQL connection pool for reliable, high-performance local queries.

---

## 📁 Project Structure
```text
canteen-review-api/
├── db/                       # SQL setup, schema creation & seed scripts
├── src/
│   ├── config/
│   │   └── db.js             # SQL Server pool configuration
│   ├── controllers/
│   │   ├── stallsController.js   # Pagination & category filters
│   │   ├── menuController.js     # INNER JOIN queries
│   │   └── reviewsController.js  # CRUD logic for reviews
│   ├── routes/
│   │   ├── stallsRoutes.js
│   │   ├── menuRoutes.js
│   │   └── reviewsRoutes.js
│   └── app.js                # Express app entry point
├── .env.example              # Environment variables template
├── package.json
└── README.md


⚙️ Environment Variables Setup
Create a .env file in the root directory:

PORT=3000
DB_USER=praktikum_user
DB_PASSWORD=Praktikum2026!
DB_SERVER=localhost
DB_NAME=review_kantin


🚀 Getting Started
1. Prerequisites
Node.js (v18+ recommended)

Microsoft SQL Server running locally (TCP/IP enabled via SQL Server Configuration Manager, Mixed Mode authentication enabled).

2. Install Dependencies
npm install
3. Initialize Database
Run your SQL schema and seed scripts located in the db/ folder via SSMS or Azure Data Studio. Ensure praktikum_user has read/write access to review_kantin.

4. Run the Server
Development mode (with nodemon):
npm run dev
Production mode:

Bash
node src/app.js

Server runs at http://localhost:3000.

## 📌 API Endpoints Reference

* **`GET`** `/api/health` — Server health check *(Params: None)*
* **`GET`** `/api/stalls` — Get paginated/filtered stalls *(Query: `?page=1&limit=5&category=Food`)*
* **`GET`** `/api/menus` — Get all menus with stall info (`INNER JOIN`) *(Params: None)*
* **`GET`** `/api/reviews` — Get all reviews *(Params: None)*
* **`POST`** `/api/reviews` — Create a review *(JSON body: `stall_id`, `user_id`, `rating`, `comment`)*
* **`PUT`** `/api/reviews/:id` — Update review by ID *(JSON body: `rating`, `comment`)*
* **`DELETE`** `/api/reviews/:id` — Delete review by ID *(URL param: `:id`)*

🧪 Testing with Thunder Client / Postman
Example payload for POST http://localhost:3000/api/reviews:
{
  "stall_id": 2,
  "user_id": 3,
  "rating": 4,
  "comment": "Great food, fast service!"
}

👤 Author
Waleed Tariq

Bachelor of Science in Electrical Engineering (UET Lahore) | Software & Backend Developer
