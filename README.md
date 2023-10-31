# RestApi-mongodb
The server will start at http://localhost:3000 by default.

# Endpoints
GET / - Get default route.
POST /add - Add a new book.
GET /show - Get all books.
GET /show/:id - Get a specific book by ID.
GET /update/:id - Update a specific book by ID.
DELETE /delete/:id - Delete a specific book by ID.

# Usage
To add a new book, send a POST request to /add with the required parameters.
To get all books, send a GET request to /show.
To get a specific book, send a GET request to /show/:id with the ID of the book.
To update a specific book, send a GET request to /update/:id with the ID of the book and the updated details.
To delete a specific book, send a DELETE request to /delete/:id with the ID of the book.
