# Notes App (MERN Stack)

A full-stack Notes Management Application built using the MERN stack (MongoDB, Express, React, Node.js). This application allows users to create, read, update, and delete notes with a modern UI and a secure backend that includes rate limiting and database integration.

---

# 🚀 Features

* Create new notes
* View all notes
* View individual note details
* Edit existing notes
* Delete notes
* RESTful API architecture
* MongoDB database integration
* Rate limiting using Upstash Redis
* Modern React frontend with routing
* Toast notifications
* Fully modular and scalable architecture

---

# 🧠 Tech Stack

## Frontend

* React 19
* Vite
* React Router DOM
* Axios
* Tailwind CSS
* DaisyUI
* React Hot Toast
* Lucide React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Upstash Redis (Rate limiting)
* dotenv
* cors

---

# 📁 Project Structure

```
Notes-App/
│
├── backend/
│   ├── package.json
│   └── src/
│       ├── server.js
│       │
│       ├── config/
│       │   ├── db.js
│       │   └── upstash.js
│       │
│       ├── controllers/
│       │   └── notesController.js
│       │
│       ├── middleware/
│       │   └── rateLimiter.js
│       │
│       ├── models/
│       │   └── Note.js
│       │
│       └── routes/
│           └── notesRoute.js
│
├── frontend/
│   └── notes-app-react/
│       ├── package.json
│       └── src/
│           ├── main.jsx
│           ├── App.jsx
│           │
│           ├── pages/
│           │   ├── HomePage.jsx
│           │   ├── CreatePage.jsx
│           │   └── NoteDetailPage.jsx
│           │
│           ├── components/
│           ├── index.css
│
└── README.md
```

---

# ⚙️ Backend Architecture

## server.js

Main entry point of backend.

Responsibilities:

* Initializes Express server
* Connects to MongoDB
* Applies middleware
* Registers routes
* Starts server

```
Middleware used:
- express.json()
- cors()
- rateLimiter()
```

Routes mounted at:

```
/api/notes
```

---

## Database Configuration (config/db.js)

Connects to MongoDB using mongoose.

```
mongoose.connect(process.env.MONGO_URI)
```

Ensures database is connected before server starts.

---

## Rate Limiting (config/upstash.js + middleware/rateLimiter.js)

Uses Upstash Redis for rate limiting.

Configuration:

```
Sliding window: 10 requests per 20 seconds
```

Purpose:

* Prevent API abuse
* Improve security
* Prevent spam requests

---

## Model (models/Note.js)

Defines schema:

```
Note
 ├── title (String, required)
 ├── content (String, required)
 ├── createdAt
 └── updatedAt
```

---

## Controller (controllers/notesController.js)

Contains business logic.

Functions:

### getNotes()

Fetch all notes

### getNoteById()

Fetch single note

### createNote()

Create new note

### updateNote()

Update existing note

### deleteNote()

Delete note

---

## Routes (routes/notesRoute.js)

Defines REST API endpoints:

```
GET     /api/notes        → Get all notes
GET     /api/notes/:id    → Get single note
POST    /api/notes        → Create note
PUT     /api/notes/:id    → Update note
DELETE  /api/notes/:id    → Delete note
```

---

# 🎨 Frontend Architecture

Built using React + Vite.

## main.jsx

Entry point.

Wraps App with:

```
BrowserRouter
Toaster
```

---

## App.jsx

Defines application routes:

```
/              → HomePage
/create        → CreatePage
/note/:id      → NoteDetailPage
```

Uses React Router DOM.

---

## Pages

### HomePage.jsx

Responsibilities:

* Fetch all notes
* Display notes list

---

### CreatePage.jsx

Responsibilities:

* Create new note
* Send POST request

---

### NoteDetailPage.jsx

Responsibilities:

* View note details
* Update note
* Delete note

---

# 🔄 Complete Application Flow

```
User interacts with React frontend
        ↓
Axios sends HTTP request
        ↓
Express server receives request
        ↓
Rate limiter checks request
        ↓
Route handles request
        ↓
Controller executes logic
        ↓
MongoDB stores/retrieves data
        ↓
Response sent back to frontend
        ↓
Frontend updates UI
```

---

# 🔐 Environment Variables Required

Create `.env` file inside backend folder:

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

UPSTASH_REDIS_REST_URL=your_upstash_url

UPSTASH_REDIS_REST_TOKEN=your_upstash_token
```

---

# 🖥️ Installation and Setup

## 1. Clone Repository

```
git clone https://github.com/Disha-arch/Notes-App.git

cd Notes-App
```

---

## 2. Backend Setup

```
cd backend

npm install

npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 3. Frontend Setup

Open new terminal:

```
cd frontend/notes-app-react

npm install

npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

# 📡 API Endpoints Summary

| Method | Endpoint       | Description    |
| ------ | -------------- | -------------- |
| GET    | /api/notes     | Get all notes  |
| GET    | /api/notes/:id | Get note by id |
| POST   | /api/notes     | Create note    |
| PUT    | /api/notes/:id | Update note    |
| DELETE | /api/notes/:id | Delete note    |



# 🛡️ Security Features

* Rate limiting using Upstash Redis
* Environment variable protection
* Structured backend architecture

# 📈 Future Improvements

* User authentication (JWT)
* Login / Signup
* User-specific notes
* Deployment (Render / Vercel / MongoDB Atlas)
* Search functionality
* Tags and categories

# 👩‍💻 Author

Disha Gupta

GitHub:
https://github.com/Disha-arch


# ⭐ Summary

This project demonstrates a complete production-level MERN stack application with:

* Proper MVC architecture
* RESTful API design
* React frontend
* MongoDB integration
* Rate limiting security
* Clean and scalable code structure

