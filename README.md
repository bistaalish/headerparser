# Request Header Parser Microservice

Welcome to the Request Header Parser Microservice! This project provides a foundation for building APIs using Node.js and Express.js. It includes basic routes, middleware for logging, and examples of serving static files and handling API requests. You can use this starter as a template to kick-start your own Express API projects.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Request Header Parser Microservice is a simple project that demonstrates how to set up an API server using Node.js and Express.js. It provides a foundation for creating API routes, handling middleware, and serving static files.

## Features

- Basic API routes and examples.
- Logging middleware to record incoming requests.
- Demonstrates serving static files from the "public" directory.
- Simple `/api/whoami` endpoint to showcase handling API requests.

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/bistaalish/headerparser.git
cd express-api-starter
```

2. Install the required Node.js packages using npm:

```bash
npm install
```

## Usage
To start the API server, use the following command:

```bash
npm start
```

This will start the Express.js server, and you can access the root URL by navigating to http://localhost:3001 in your web browser.

## API Endpoints
- **GET /api/hello**:  Returns a JSON response with a simple greeting.
- **GET /api/whoami**:  Returns a JSON response containing the IP address, preferred language, and user agent of the requester.

## Middleware
- **Logging Middleware**: Logs each incoming request with the request method, path, and IP address.

## Deployment

The Express API Starter project is a basic template that can be extended and customized for your specific API needs. You can deploy your customized version to various hosting platforms.

## Author

- Alish Bista

## License

This project is licensed under the MIT License.
