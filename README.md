# 🚀 Task & Project Management System (MERN Stack)

A full-stack web application developed as part of a technical assignment to demonstrate **backend architecture, role-based access control, project/team management, and scalable frontend design**.

The system allows teams to manage projects, assign tasks, and track progress efficiently using **Admin and Member roles**.

---

## 📌 Objective

To design and implement a **Task Management System** with:

- Authentication & Authorization (JWT)
- Role-Based Access (Admin / Member)
- Project & Team Management
- Task Assignment & Status Tracking
- Clean UI with dynamic data integration

---

## 🏗️ Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router DOM
- Custom CSS (Modern UI, no Tailwind)

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs

---

## 🔐 Core Features

### 1. Authentication
- User Registration & Login
- JWT-based authentication
- Secure password hashing

---

### 2. Role-Based Access

#### 👨‍💼 Admin
- Create projects
- Add members to projects
- Create tasks
- Assign tasks to users
- View all tasks

#### 👤 Member
- View only assigned tasks
- Update task status (progress tracking)

---

### 3. Project & Team Management
- Create projects
- Add multiple members to a project
- View team members per project

---

### 4. Task Management
- Create tasks under a project
- Assign tasks to users
- Track status:
  - Todo
  - In Progress
  - Completed

---

### 5. Dashboard
- Role-based UI
- Admin → full control
- Member → task-focused view
- Dynamic API-driven data

---

## 📁 Project Structure

---

### 🔧 Backend Structure


backend/
│
├── config/
│ └── db.js # MongoDB connection
│
├── controllers/
│ ├── authController.js # Auth logic
│ ├── projectController.js # Project logic
│ ├── taskController.js # Task logic
│ └── userController.js # User fetching
│
├── middleware/
│ ├── authMiddleware.js # JWT protection
│ └── roleMiddleware.js # Role-based access
│
├── models/
│ ├── User.js
│ ├── Project.js
│ └── Task.js
│
├── routes/
│ ├── authRoutes.js
│ ├── projectRoutes.js
│ ├── taskRoutes.js
│ └── userRoutes.js
│
├── .env
├── server.js
└── package.json


---

### 🎨 Frontend Structure


frontend/
│
├── src/
│ │
│ ├── api/
│ │ └── axios.js # Axios instance + token interceptor
│ │
│ ├── components/
│ │ ├── Layout.jsx
│ │ ├── ProjectForm.jsx
│ │ ├── TaskForm.jsx
│ │ └── TaskList.jsx
│ │
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ └── Dashboard.jsx
│ │
│ ├── routes/
│ │ └── PrivateRoute.jsx
│ │
│ ├── styles/
│ │ ├── global.css
│ │ ├── layout.css
│ │ ├── auth.css
│ │ ├── forms.css
│ │ └── task.css
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── .env
├── index.html
└── package.json


---

## ⚙️ Environment Variables

### Backend (`.env`)


PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=your_secret_key


---

### Frontend (`.env`)


VITE_API_URL=http://localhost:5000/api


---

## 🚀 Setup Instructions

### 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```
## 2️⃣ Backend Setup
cd backend
npm install
npm run start


## 3️⃣ Frontend Setup
cd frontend
npm install
npm run dev


## 🧠 Key Implementation Highlights
- Clean MVC architecture (backend)
- JWT-based secure authentication
- Role-based authorization
- Dynamic React frontend (no hardcoding)
- API-driven UI rendering
- Separation of concerns

## ⚠️ Limitations / Future Improvements
- Kanban board (drag & drop)
- Task deadlines & reminders
- Notifications system
- File uploads
- Real-time updates (WebSockets)


## 👨‍💻 Author

Saksham Agarwal
B.Tech CSE | Full Stack Developer
