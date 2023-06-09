# Task Manager API - Node.js and MongoDB

This is a Task Manager API built using Node.js and MongoDB. It provides CRUD (Create, Read, Update, Delete) operations for managing tasks. The API allows you to create, retrieve, update, and delete tasks.

## Prerequisites

To use this API, you need to have the following software installed on your machine:

- Node.js (version 12 or higher)
- MongoDB (version 4.0 or higher)

## Getting Started

1. Clone the repository to your local machine:

```
git clone https://github.com/alpha951/task-manager-api.git
```

2. Navigate to the project directory:

```
cd task-manager-api
```

3. Install the dependencies:

```
npm install
```

4. Set up the environment variables:
   - Rename the `.env.example` file to `.env`.
   - Modify the `.env` file and provide your MongoDB connection URL. You can obtain this URL from your MongoDB provider or set up a local MongoDB server.

5. Start the API server:

```
npm start
```

By default, the server will run on `http://localhost:3000`.

## API Endpoints

The following endpoints are available:

- `GET /api/v1/tasks`: Retrieve all tasks.
- `GET /api/v1/tasks/:id`: Retrieve a specific task by ID.
- `POST /api/v1/tasks`: Create a new task.
- `PATCH /api/v1/tasks/:id`: Update a specific task by ID.
- `DELETE /api/v1/tasks/:id`: Delete a specific task by ID.

## Request and Response Format

All requests and responses are in JSON format.

### Request Format

When making a POST or PATCH request, the request body should be a JSON object containing the relevant data. For example:

```json
{
  "name": "Task Title",
  "completed": false
}
```

### Response Format

The API will respond with JSON objects that represent tasks. For example:

```json
 {
     "completed": false,
    "_id": "6482adef6c90e1316c74656e",
    "name": "duck { }",
    "__v": 0
 },
```

## Error Handling

If an error occurs while processing a request, the API will respond with an appropriate status code and an error message in the response body.

## Authentication and Authorization

This API does not implement authentication or authorization mechanisms. It is designed for demonstration purposes and assumes that all requests are made by an authorized user.

## Conclusion

This Task Manager API provides a simple way to manage tasks using Node.js and MongoDB. You can perform CRUD operations, retrieve tasks, create new tasks, update existing tasks, and delete tasks. Feel free to explore and extend the functionality of this API according to your requirements.
