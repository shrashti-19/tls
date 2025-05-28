# tls
backend revised
API Endpoints (Backend) — Running on http://localhost:4000
Authentication
POST /api/auth/register
Register a new user.
Body:

json
Copy
Edit
{
  "username": "string",
  "email": "string",
  "password": "string"
}
POST /api/auth/login
Login and receive a JWT token.
Body:

json
Copy
Edit
{
  "email": "string",
  "password": "string"
}
Response:

json
Copy
Edit
{
  "token": "jwt_token_here",
  "user": {
    "id": "user_id",
    "username": "username",
    "email": "email"
  }
}
Exercises
GET /api/exercises
Get the list of all exercises (with questions, theory, and starter code).

Progress (Protected Routes — Requires Authorization Header)
GET /api/progress
Fetch user’s current progress.
Headers:
Authorization: Bearer <jwt_token>

POST /api/progress
Update user’s progress with the completed exercise ID.
Headers:
Authorization: Bearer <jwt_token>
Body:

json
Copy
Edit
{
  "completedId": 3
}
