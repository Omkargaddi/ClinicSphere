<p align="center">
  <img width="400" height="246" alt="ClinicSphere logo" src="https://github.com/user-attachments/assets/7e74f999-7901-40f6-8e92-b4205bbf22ad"/>
</p>
<p align="center">
  <b>A full-stack clinic and hospital operations platform built on the MERN stack.</b><br/>
  Bringing patients, doctors, and administrators onto one connected system.
</p>

<p align="center">
  <a href="https://clinicsphere.netlify.app/"><b>Live App</b></a> ·
  <a href="https://clinicsphereadmin.netlify.app/"><b>Admin Panel</b></a>
</p>

---

## Overview

Most small clinics and hospitals still juggle paper registers, phone-based bookings, and disconnected spreadsheets to manage appointments and patient data. **ClinicSphere** replaces that with a single web platform where patients can book their own appointments, doctors can manage their schedules and consultations, and admins get full visibility into what's happening across the hospital — all from one dashboard.

The system is split into two independently deployed applications — a **patient-facing portal** and an **admin control panel** — both talking to a shared Node.js/Express API backed by MongoDB.

## Who uses ClinicSphere

| Role | What they can do |
|------|-------------------|
| **Patient** | Register/login, browse doctors, book & manage appointments, view their own health records, message their doctor |
| **Doctor** | View their appointment queue, accept/complete/cancel bookings, communicate with patients |
| **Admin** | Onboard doctors, oversee all appointments across the hospital, manage users, view usage analytics |

## Live Demo

| Panel | Link |
|-------|------|
| Patient Portal | https://clinicsphere.netlify.app/ |
| Admin Dashboard | https://clinicsphereadmin.netlify.app/ |

## Core Features

- **Role-based Authentication** — separate, secured access flows for patients, doctors, and admins using JWT
-  **Appointment Lifecycle Management** — patients book open slots; doctors and admins can confirm, reschedule, or cancel
-  **Patient Health Records** — centralized storage for patient history, accessible to authorized doctors and admins
- **Doctor–Patient Messaging** — a built-in channel for consultation follow-ups without leaving the platform
-  **Admin Analytics Dashboard** — a single view of appointment volume, active doctors, and user activity
-  **Data Security** — MongoDB-backed storage with hashed credentials and token-based route protection

##  Architecture

```
                ┌───────────────────┐
                │   Patient Portal   │  (React, Netlify)
                └─────────┬─────────┘
                          │  REST API
                ┌─────────▼─────────┐
                │   Admin Dashboard  │  (React, Netlify)
                └─────────┬─────────┘
                          │
                ┌─────────▼─────────┐
                │  Express.js Server │  (Node.js API + JWT auth)
                └─────────┬─────────┘
                          │
                ┌─────────▼─────────┐
                │      MongoDB       │  (Users, Doctors, Appointments)
                └───────────────────┘
```

Each panel is a standalone React app with its own build and deployment pipeline, which keeps the patient-facing bundle lightweight and free of any admin-only code.

##  Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend (Patient) | React.js |
| Frontend (Admin) | React.js |
| Backend | Node.js, Express.js |
| Database | MongoDB |
| Auth | JSON Web Tokens (JWT) |
| State Management | Context API / Redux *(where used)* |
| Deployment | Netlify (frontend + admin), Node hosting for API |

##  Screenshots

<img width="1920" height="1080" alt="ClinicSphere screenshot 1" src="https://github.com/user-attachments/assets/3af0da3c-e8f4-4483-af8a-4b4d172372b1" />
<img width="1920" height="1080" alt="ClinicSphere screenshot 2" src="https://github.com/user-attachments/assets/41afecce-c6a9-4ac7-8837-c881b39d53aa" />

## ⚙️ Getting Started

### Prerequisites
- Node.js (v16+)
- A MongoDB instance (local or Atlas)

### 1. Clone the repository
```bash
git clone https://github.com/Omkargaddi/ClinicSphere.git
cd ClinicSphere
```

### 2. Install dependencies
Each part of the app has its own dependencies:

```bash
# Backend
cd backend
npm install

# Admin panel
cd ../admin
npm install

# Patient frontend
cd ../frontend
npm install
```

### 3. Configure environment variables
Create a `.env` file inside the `backend` folder:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### 4. Run the application
Open three terminals, one per service:

```bash
# Terminal 1 — API server
cd backend
npm run server

# Terminal 2 — Admin panel
cd admin
npm run dev

# Terminal 3 — Patient frontend
cd frontend
npm run dev
```
