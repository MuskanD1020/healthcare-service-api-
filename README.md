Healthcare Services API
This is a simple API built using Node.js, Express, and MongoDB to manage healthcare services. The API allows users to add, retrieve, update, and delete healthcare services.

Features
Add Service: Add new healthcare services with fields like name, description, and price.
Get All Services: Retrieve a list of all healthcare services.
Update Service: Modify the details of an existing service.
Delete Service: Remove a service from the list.

Technology Stack
Node.js: JavaScript runtime for server-side scripting.
Express: Web framework for Node.js.
MongoDB: NoSQL database for storing service data.
Mongoose: ODM (Object Data Modeling) library for MongoDB.
Nodemon: Tool to automatically restart the server during development.
dotenv: For managing environment variables.

Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14 or higher)
MongoDB (Install locally or use a cloud instance like MongoDB Atlas)
A code editor like VS Code

Setup Instructions

Install dependencies:

In the project root directory, run:


npm install
Set up environment variables:

Create a .env file in the root directory of the project and add the following:



MONGO_URI=mongodb://localhost:27017/healthcare_services_db
PORT=5000
Make sure to replace the MONGO_URI with your actual MongoDB connection string if you're using a cloud database like MongoDB Atlas.

Start MongoDB:

If you're using a local MongoDB instance, start MongoDB by running:



mongod
Ensure that MongoDB is running on the default port (27017).

Run the server:

Start the server in development mode using:


npm run dev
The server will start running on http://localhost:5000 and MongoDB will connect automatically if the connection string in .env is correct.

Test the API using Postman:

You can now test the API endpoints using Postman or any API testing tool.

Add a service:

URL: POST http://localhost:5000/api/services
Body (JSON):

json

{
  "name": "General Checkup",
  "description": "Basic health checkup service",
  "price": 300
}

Get all services:

URL: GET http://localhost:5000/api/services

Update a service:

URL: PUT http://localhost:5000/api/services/:id

Delete a service:

URL: DELETE http://localhost:5000/api/services/:id
Project Structure

├── controllers
│   └── serviceController.js     # API logic for services
├── models
│   └── serviceModel.js          # Mongoose schema for services
├── routes
│   └── serviceRoutes.js         # Routes for service management
├── app.js                       # Main server file
├── .env                         # Environment variables file
├── package.json                 # Project metadata and dependencies
└── README.md                    # Project documentation

Dependencies
express: Web framework for Node.js
mongoose: ODM library for MongoDB
dotenv: Environment variable management
body-parser: Middleware for parsing incoming request bodies
nodemon: Development tool for automatically restarting the server

License
This project is licensed under the MIT License - see the LICENSE file for details.


