# Project Title: VRV-Security-Backend-Developer-RBAC-Assignment

## Overview
This project is a **RBAC-System** designed to ensure a smooth and secure login and registration process for users. Built with modern technologies and best practices, it features a responsive UI, robust backend integration, and strict security measures to safeguard user data. The admin panel includes advanced permission handling for administrators, providing an intuitive user management interface.

## Features
- **User Authentication:** Secure login and registration functionality.
- **Admin Panel:** Role-based access control with dedicated admin permissions.
- **Responsive Design:** Optimized for all screen sizes with a sleek dark theme.
- **Security-Focused:** Protects sensitive user data with best practices in authentication.

## Tech Stack
### Frontend:
- **React JS**: For building reusable and dynamic components.
- **Tailwind CSS**: For modern and responsive styling.

### Backend:
- **Node.js**: For creating a scalable backend environment.
- **Express.js**: For handling server-side routing and middleware.

### Database:
- **MongoDB**: For storing user and role data securely.

### Other Tools:
- **JWT (JSON Web Tokens):** For secure session handling and token-based authentication.
- **Bcrypt.js:** For hashing passwords before storage.

## Security Measures
- **Password Hashing:** User passwords are hashed using `bcrypt` before being stored in the database.
- **Token-Based Authentication:** Ensures that sensitive routes are accessed only by authorized users with valid tokens.
- **Input Validation:** Validates user inputs to prevent injection attacks.
- **Environment Variables:** Securely store sensitive credentials (e.g., database URIs, JWT secret keys) using `.env` files.
- **Role-Based Access Control:** Prevents unauthorized users from accessing admin-only features.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/AshishShankarRenuse/VRV-Security-Backend-Developer-RBAC-Assignment
   ```
2. Navigate to the project directory:
   ```bash
   cd VRV-Security-Backend-Developer-RBAC-Assignment
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     MONGO_URI=<your-mongodb-uri>
     JWT_SECRET=<your-jwt-secret>
     ```
5. Start the development server:
   ```bash
   npm run dev
   ```
6. Access the app at `http://localhost:3000`.

## Usage
1. Register as a new user or log in with existing credentials.
2. For admin functionality, log in with an admin account to access the admin panel and manage users.


## Project Highlights
- **Clean Code Structure:** The project is well-organized and adheres to industry standards.
- **Scalability:** Built with a modular design, making it easy to extend functionalities.
- **Focus on Security:** Incorporates essential measures like token-based authentication and hashed passwords.
- **Role-Based Access Control:** Demonstrates the ability to implement complex permission systems.
- **Modern Tech Stack:** Showcases expertise in React, Tailwind CSS, Node.js, and MongoDB.
