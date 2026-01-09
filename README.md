# Sentra Frontend Project 🚀

A modern **React + Vite** frontend application that simulates a real-world admin dashboard with **authentication, protected routes, API-driven data, and analytics UI**.
This project was built as part of a frontend assignment but enhanced further by integrating **Supabase Authentication (Email/Password + Google Login)** instead of mocked auth.

---

## 🔹 Business Objective

The goal of this project is to **simulate a production-like frontend application** that:

* Handles authentication flows
* Protects routes based on auth state
* Fetches and displays data from APIs
* Presents data visually using charts and dashboards

This closely mirrors how real-world admin panels and SaaS dashboards work.

---

## 🔹 Tech Stack

* **React (Vite)** – Fast and modern React setup
* **Supabase** – Authentication (Email/Password + Google OAuth)
* **React Router DOM** – Routing & route protection
* **Chart.js** – Line & Bar charts
* **Axios / Fetch API** – API communication
* **CSS** – Custom styling (no UI library)

---

## 🔹 Project Features

### 1️⃣ Authentication (Supabase)

Authentication is handled completely using **Supabase Auth**:

* Email & Password Signup
* Email & Password Login
* Google OAuth Login
* Auth session management
* Logout functionality

**Why Supabase?**
Although the assignment allowed mocked authentication, Supabase was used to make the flow more realistic and production-ready.

📁 Key Files:

* `services/supabaseClient.js`
* `context/AuthContext.jsx`
* `pages/Authpage.jsx`

---

### 2️⃣ Signup Flow

* User signs up using email & password
* Supabase creates the user
* Email confirmation can be enabled/disabled via Supabase Dashboard
* After successful signup, user is redirected to login

---

### 3️⃣ Login Flow

* User logs in via:

  * Email & Password
  * Google Login
* Supabase returns a valid session
* Session is stored internally by Supabase
* App listens to auth state changes
* On successful login → redirect to Dashboard

---

### 4️⃣ Protected Routes

* Dashboard routes are **protected**
* If user is not authenticated:

  * Automatically redirected to Login page

📁 Key File:

* `routes/ProtectedRoute.jsx`

This ensures that unauthenticated users cannot access internal pages.

---

### 5️⃣ Dashboard Overview

After login, users are redirected to a **Dashboard** that displays multiple data-driven sections.

#### Dashboard Includes:

✅ **Stats Cards**

* Total Users
* Active Users
* Companies
* Locations

(Data fetched from APIs)

✅ **Users Per City (Bar Chart)**

* Implemented using Chart.js
* Displays city-wise user distribution

✅ **User Growth (Line Chart)**

* Shows growth trend over the last 6 months

✅ **Recent Users Table**

* Data fetched from API
* Displays latest users

✅ **Todo List**

* API-driven todo items
* Simulates task management functionality

📁 Key Files:

* `pages/Dashboard.jsx`
* `components/StatCards.jsx`
* `components/UserGrowthChart.jsx`
* `components/UsersPerCityChart.jsx`
* `components/RecentUsersTable.jsx`
* `components/TodoList.jsx`

---

### 6️⃣ API Integration

The dashboard fetches data from **public/mock APIs**:

* Users Data
* Company Data
* Location Data
* Todos

Features:

* Loading states while fetching
* Graceful error handling
* Clean data mapping

---

### 7️⃣ Logout

* Clears Supabase session
* Redirects user back to Login page

Ensures session safety and proper cleanup.

---

## 🔹 Error & Loading Handling

✔ Loader shown while API calls are in progress
✔ Meaningful error messages on failure
✔ Prevents UI breaking on API errors

---

## 🔹 Project Structure

```
frontend-sentra/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCards.jsx
│   │   ├── UserGrowthChart.jsx
│   │   ├── UsersPerCityChart.jsx
│   │   ├── RecentUsersTable.jsx
│   │   └── TodoList.jsx
│   │
│   ├── context/
│   │   └── AuthContext.jsx
│   │
│   ├── pages/
│   │   ├── Authpage.jsx
│   │   └── Dashboard.jsx
│   │
│   ├── routes/
│   │   └── ProtectedRoute.jsx
│   │
│   ├── services/
│   │   ├── api.js
│   │   └── supabaseClient.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── README.md
```

---

## 🔹 Environment Variables

Create a `.env` file in root:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

---

## 🔹 How to Run Locally

```bash
npm install
npm run dev
```

App runs on:

```
http://localhost:5173
```

---



---

## 🔹 Conclusion

This project demonstrates:

* Real-world authentication flow
* Clean React architecture
* API-driven dashboards
* Route protection & state management

It goes **beyond the basic assignment** by integrating Supabase authentication and OAuth, making it closer to a production-ready frontend system.

---

### 👩‍💻 Author

**Kritika Bhardwaj**
Frontend Developer (React.js)