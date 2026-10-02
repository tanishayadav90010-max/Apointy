# Appointy – Doctor Appointment Website

A complete full-stack MERN doctor appointment platform built with React + Vite + Tailwind CSS on the frontend and Node.js + Express + MongoDB/Mongoose on the backend.

## Features

- Patient, Doctor and Admin roles
- JWT authentication and bcrypt password hashing
- Protected frontend routes and backend role authorization
- Doctor registration, professional profile and recurring availability
- Admin doctor approval/rejection
- Doctor search by name/specialization/location
- Date-based 30-minute availability slots
- Appointment booking with backend validation and double-booking prevention
- Appointment statuses: Pending, Confirmed, Rejected, Completed, Cancelled
- Patient upcoming/past appointment views and cancellation
- Doctor appointment management
- Admin dashboard, doctor/patient management and appointment overview
- Responsive Tailwind healthcare UI
- Axios API layer with environment-based API URL
- Seed data with demo accounts
- No payment gateway or payment processing

## Tech stack

Frontend: React, Vite, Tailwind CSS, React Router, Axios, Lucide React
Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcryptjs

## Folder structure

```text
Appointy-Doctor-Appointment/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── package.json
│   ├── postcss.config.js
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── seed/
│   ├── utils/
│   ├── .env.example
│   ├── package.json
│   └── server.js
├── .gitignore
└── README.md
```

## Prerequisites

- Node.js 18+ recommended
- npm
- MongoDB local installation or MongoDB Atlas

## MongoDB setup

Create a MongoDB database named `appointy`, or use the database name in your own connection string.

## Environment setup

### Backend

```bash
cd server
copy .env.example .env
```

On macOS/Linux use `cp .env.example .env` instead.

Set:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/appointy
JWT_SECRET=replace_with_a_long_random_secret
CLIENT_URL=http://localhost:5173
```

### Frontend

```bash
cd client
copy .env.example .env
```

Set:

```env
VITE_API_URL=http://localhost:5000/api
```

## Installation

Open two terminals.

### Terminal 1 – backend

```bash
cd server
npm install
npm run seed
npm run dev
```

### Terminal 2 – frontend

```bash
cd client
npm install
npm run dev
```

Open the Vite URL shown in the terminal, normally `http://localhost:5173`.

## Demo credentials

All seeded demo accounts use:

`Appointy@123`

| Role | Email |
|---|---|
| Admin | admin@appointy.com |
| Doctor | ananya@appointy.com |
| Patient | patient@appointy.com |

Additional seeded doctors include Rahul Mehta, Priya Singh and Arjun Kapoor.

## API overview

### Auth

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/auth/me`
- `PUT /api/auth/me`

### Doctors

- `GET /api/doctors`
- `GET /api/doctors/:id`
- `GET /api/doctors/:id/availability?date=YYYY-MM-DD`
- `GET /api/doctors/profile/me`
- `POST /api/doctors/profile`
- `PUT /api/doctors/profile`
- `PUT /api/doctors/availability`

### Appointments

- `POST /api/appointments`
- `GET /api/appointments`
- `GET /api/appointments/:id`
- `PUT /api/appointments/:id/status`
- `DELETE /api/appointments/:id`

### Admin

- `GET /api/admin/dashboard`
- `GET /api/admin/doctors`
- `GET /api/admin/patients`
- `GET /api/admin/appointments`
- `PUT /api/admin/doctors/:id/approve`
- `PUT /api/admin/doctors/:id/reject`
- `DELETE /api/admin/doctors/:id`
- `DELETE /api/admin/patients/:id`

## Appointment logic

Doctor availability is stored as recurring day/time windows. The API generates 30-minute slots for a selected date and removes slots already occupied by non-cancelled/non-rejected appointments. Booking performs the same availability and conflict checks on the server, so the frontend cannot bypass them.

## Common errors

### MongoDB connection failed
Make sure MongoDB is running and `MONGO_URI` is correct.

### 401 Invalid or expired token
Log in again. The token is stored in browser local storage for the demo application.

### Doctor does not appear in search
A doctor must have `approvalStatus: Approved`. Use the Admin dashboard to approve a registered doctor.

### No available slots
Check the doctor's recurring availability and select a date whose weekday is configured. Existing appointments also remove their slots.

### Port already in use
Change `PORT` in `server/.env` and update `VITE_API_URL` in `client/.env` to match.

## Important

Do not commit `.env` files or `node_modules`. Only `.env.example` files are included in the project archive.
