# Frontend - TLS Project

## Overview
This is the frontend of the TLS project, built with JavaScript. It provides the user interface for user authentication, profile management, and other features.

## Features
- User registration and login with JWT authentication
- Display and update user profile
- Show user stats and progress
- Responsive design

## Tech Stack
- JavaScript (ES6+)
- CSS
- Fetch API / Axios for HTTP requests

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shrashti-19/tls-frontend.git
   cd tls-frontend
  ```

2. Install Dependencies
 ```bash
 npm install
 ```

3. create a .env file in the root
  ```bash
  REACT_APP_API_BASE_URL=http://localhost:4000/api
 ```

4. Start the development server:
  ```bash
  npm start
  ```

5. Open the BASE_URL in your browser.

## Available Scripts
- npm start — Runs the app in development mode

- npm run build — Builds the app for production

## Environment Variables
- REACT_APP_API_BASE_URL - Base URL for backend API endpoints.

## Notes
- Make sure the backend server is running before starting the frontend.

- JWT token is stored in localStorage for authentication.


# Backend - TLS Project

## Overview
This is the backend of the TLS project, built with Node.js, Express, and MongoDB. It provides REST API endpoints for user authentication, profile management, and other functionalities.

## Features
- User registration and login with JWT authentication
- User profile CRUD operations
- Secure password hashing with bcrypt
- Middleware for JWT token verification

## Tech Stack
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment variables

## Setup and Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shrashti-19/tls-backend.git
   cd tls-backend
  ```

2. Install dependencies
  ```bash
  npm install
  ```

3. Create a .env file in the root and add the following.
  ```bash
  PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
 ```

4. Start the server:
```bash
npm run dev
```
5. The backend will run at http://localhost:4000.

## API Endpoints
- POST /api/auth/register — Register a new user

- POST /api/auth/login — Login user and return JWT token

- GET /api/profile/me — Get current user profile (requires auth)

- PUT /api/profile/me — Update current user profile (requires auth)

- POST /api/exercises - Exercises for the user. 

- GET /api/exercises: id - Display exercise for the specific id only.


## Environment Variables
PORT - Port number for the server (default: 4000)

MONGODB_URI - MongoDB connection string

JWT_SECRET - Secret key for JWT token signing


## Notes
Passwords are hashed before storage.

Use a strong secret key for JWT.

Protect sensitive routes with authenticateToken middlewar
