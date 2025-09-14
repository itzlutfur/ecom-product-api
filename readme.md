# E-commerce Product API

A REST API for managing and retrieving product information with built-in security and rate limiting features.

## Features

- **Product Management**
  - Get all products with summary information (id, name, price, category, total reviews)
  - Get detailed product information by ID including full reviews

- **Security Middleware**
  - User-Agent validation and blocking of suspicious clients
  - Blocks automated tools like curl, wget, PostmanRuntime, and security scanners
  - Request logging for monitoring and analytics

- **Rate Limiting**
  - IP-based rate limiting (2 requests per second)
  - Prevents API abuse and ensures fair usage

- **Request Logging**
  - Automatic logging of all User-Agent headers
  - Persistent storage in JSON format for analysis

## API Endpoints

- `GET /api/products` - Retrieve all products (summary view)
- `GET /api/products/:id` - Retrieve specific product by ID (detailed view)

## Technologies Used

- Node.js
- Express.js
- express-rate-limit