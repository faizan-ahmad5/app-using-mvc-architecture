# Express.js MVC API Project

This project is a simple **CRUD API** built using **Express.js**, **MongoDB**, and the **MVC architecture** (Model-View-Controller). The app allows you to create, read, update, and delete users stored in a MongoDB database.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)

## Features

- **Create** a new user
- **Fetch** all users
- **Update** an existing user
- **Delete** a user
- MongoDB database integration
- Uses the MVC design pattern for better separation of concerns

## Project Structure

```
/your-project
│
├── /controllers         # Logic for handling requests and responses
│   └── userController.mjs
│
├── /models              # MongoDB schemas (Mongoose)
│   └── User.mjs
│
├── /routes              # Route definitions
│   └── userRoutes.mjs
│
├── /config              # Database connection configuration
│   └── db.mjs
│
├── .env                 # Environment variables
├── vercel.json          # Vercel deployment configuration
├── package.json         # Project dependencies and scripts
└── server.mjs           # Main entry point for the server
```

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database for storing user data
- **Mongoose** - ODM for MongoDB, providing schema-based data modeling
- **dotenv** - For managing environment variables
- **Vercel** - Deployment platform for serverless functions

## Installation

To run this project locally, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/faizan-ahmad5/app-using-mvc-architecture.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables (see [Environment Variables](#environment-variables) section).

4. Make sure MongoDB is running, or use a cloud-based MongoDB instance like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Environment Variables

Create a `.env` file in the root of your project and add the following:

```
MONGO_URI=your-mongodb-connection-string
```

Replace `your-mongodb-connection-string` with your actual MongoDB URI.

## Running the Application

1. Start the application:

   ```bash
   npm start
   ```

   Your API will be running at: `http://localhost:3000`.

2. You can also use **nodemon** for automatic server restarts during development:

   ```bash
   npm install -g nodemon
   nodemon server.mjs
   ```

## API Endpoints

Here are the available API routes:

### **GET /api/users**
Fetch all users from the database.

**Response Example:**
```json
{
  "message": "Fetching all users from the database",
  "data": [...]
}
```

### **POST /api/users**
Create a new user by providing JSON data in the request body.

**Request Body Example:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

**Response Example:**
```json
{
  "message": "New user created!",
  "data": {...}
}
```

### **PUT /api/users/:id**
Update a user by ID.

**Request Body Example:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}
```

**Response Example:**
```json
{
  "message": "PUT request - Updating user {id}",
  "data": {...}
}
```

### **DELETE /api/users/:id**
Delete a user by ID.

**Response Example:**
```json
{
  "message": "DELETE request - Deleting user {id}",
  "deletedUser": {...}
}
```

## Deployment

This project is configured to deploy on **Vercel**. To deploy:

1. Install the Vercel CLI:

   ```bash
   npm i -g vercel
   ```

2. Run the Vercel deployment command:

   ```bash
   vercel
   ```

3. Follow the instructions to configure and deploy your app.

Alternatively, you can connect this project to your Vercel account via GitHub and deploy automatically.

### Vercel Configuration

Your `vercel.json` should look like this:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.mjs",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/server.mjs"
    }
  ]
}
```

### Environment Variables on Vercel

Add the same environment variables (`MONGO_URI`) to your Vercel project’s settings under the **Environment Variables** section.
