# data_science
Data aScience Projects
# Review Kantin API

A RESTful backend service built with **Node.js**, **Express.js**, and **Microsoft SQL Server (MSSQL)** for a campus canteen review and ordering system.

---

## 🛠️ Tech Stack
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** Microsoft SQL Server (MSSQL)
* **Key Packages:** `mssql`, `dotenv`, `cors`, `nodemon` (dev)

---

## 📁 Project Structure
```text
review-kantin-api/
├── src/
│   ├── config/
│   │   └── db.js            # SQL Server connection pool setup
│   ├── controllers/
│   │   ├── stallsController.js   # Filtering & pagination logic
│   │   ├── menuController.js     # INNER JOIN menu & stall data
│   │   └── reviewsController.js  # Full CRUD operations for reviews
│   ├── routes/
│   │   ├── stallsRoutes.js
│   │   ├── menuRoutes.js
│   │   └── reviewsRoutes.js
│   └── app.js               # Main Express application entry point
├── .env                     # Environment variables (excluded from git)
├── package.json
└── README.md
