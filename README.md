

https://github.com/user-attachments/assets/b3045f65-9819-479a-a320-0947dcfde9f4

# E-Commerce Website

An e-commerce web application built with React.js, Node.js, Express, and MongoDB. This application provides users with an interactive shopping experience, complete with a product catalog, cart functionality, authentication, and a payment gateway.

Features
Product Catalog: Displays a variety of products categorized for easy browsing.
Cart Management: Users can add, remove, and adjust quantities of products in their cart.
Authentication: User registration and login features for a personalized shopping experience.
Payment Gateway: Integrated payment gateway for secure transactions.
Database: MongoDB is used for efficient data storage and management.
Tech Stack
Frontend: React.js, HTML, CSS, JavaScript
Backend: Node.js, Express.js
Database: MongoDB
Authentication: JSON Web Token (JWT)
Payment Gateway: Stripe
Installation
Prerequisites
Ensure you have the following installed:

Node.js
MongoDB (set up a MongoDB Atlas account or use a local instance)
Stripe account (for payment gateway integration)

Install Dependencies

Navigate to the server and client folders and install required dependencies:

# Backend
cd server
npm install

# Frontend
cd ../client
npm install

Create a .env file in the server directory to store sensitive information.

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

Contributing
Feel free to submit issues or pull requests to contribute to this project!

License
This project is open-source and available under the MIT License.
