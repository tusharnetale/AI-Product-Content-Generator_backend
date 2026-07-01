# AI Product Content Generator - Backend

## Project Overview

This is the backend of the **AI Product Content Generator** built with Node.js, Express.js, and MongoDB. It provides REST APIs for user authentication, AI content generation, and product history management.

---

## Features

### Authentication

* User Registration
* User Login
* JWT Authentication
* User Logout

---

### Product Content APIs

Authenticated users can:

* Generate AI product content
* Save generated content
* View all generated content
* View single product content
* Regenerate AI content
* Delete saved content

---

## AI Content Generation

The backend uses the Google Gemini API to generate:

* Product Description
* Short Description
* Key Selling Points
* SEO Keywords
* Product Tagline

---

## Technologies Used

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* Google Gemini API
* dotenv

---

## Backend Folder Structure

```text
backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── .env
├── server.js
└── package.json
```

---

## Database Models

### User

* Name
* Email
* Password

### Product Content

* Product Name
* Product Category
* Brand Name
* Key Features
* Target Audience
* AI Generated Content
* User ID
* Created Date

---

## API Endpoints

### Authentication

| Method | Endpoint           |
| ------ | ------------------ |
| POST   | /api/auth/register |
| POST   | /api/auth/login    |
| POST   | /api/auth/logout   |

### Product Content

| Method | Endpoint                    |
| ------ | --------------------------- |
| POST   | /api/product/generate       |
| GET    | /api/product/history        |
| GET    | /api/product/:id            |
| PUT    | /api/product/regenerate/:id |
| DELETE | /api/product/:id            |

---

## Environment Variables

Create a `.env` file inside the backend folder.

```env
PORT=7000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_api_key
```

---

## Installation

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm run dev
```

The backend server will run on:

```text
http://localhost:7000
```

---

## Author

**Tushar Netale**


