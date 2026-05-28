# Full-Stack User Portal

A complete Single Page Application (SPA) built with an Angular frontend, Node.js/Express backend, and MongoDB database storage. This project demonstrates role-based layouts, asynchronous data loading, and a modular folder architecture.

## Tech Stack
- **Frontend**: Angular 18+ (Standalone Components)
- **Styling**: Tailwind CSS
- **Backend**: Node.js & Express
- **Database**: MongoDB Atlas

## Features Implemented
- **Login Portal**: Secure login view supporting "General User" and "Admin" roles with a custom show/hide password toggle.
- **Dynamic Content**: Displays user-specific tables and histories depending on the authenticated role.
- **Admin Management Panel**: An extra administrative data view that mounts only for logged-in Admins to review all registered users.
- **API Delay Simulator**: A custom parameter engine on the dashboard where you can manually adjust response latency to test frontend loading states and spinners.
- **Clean Architecture**: Decoupled folder structures separating models, controllers, routes, views, and services.

---

## How to Run the App Locally

### 1. Start the Backend Server
Open a terminal and navigate to your backend folder:
```bash
cd app/backend
npm install
node app.js
```
*The server will boot on port 4000 and automatically seed sample database records into your MongoDB collection on its first run.*

### 2. Start the Frontend App
Open a second terminal window at your project root folder:
```bash
npm install
ng serve
```
Open your browser and navigate to: `http://localhost:4200`

---

## Test Accounts
You can use these pre-seeded accounts to test different role features:

- **General User**: 
  - User ID: `user01`
  - Password: `password123`
- **Admin User**: 
  - User ID: `admin01`
  - Password: `password123`
