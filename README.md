# RestApi-mongodb
The server will start at http://localhost:3000 by default.

# Endpoints
<ul>
<li>GET / - Get default route.</li>
<li>POST /add - Add a new book.</li>
<li>GET /show - Get all books.</li>
<li>GET /show/:id - Get a specific book by ID.</li>
<li>GET /update/:id - Update a specific book by ID.</li>
<li>DELETE /delete/:id - Delete a specific book by ID.</li>
</ul>

# Usage
<ul>
<li>To add a new book, send a POST request to /add with the required parameters.</li>
<li>To get all books, send a GET request to /show.</li>
<li>To get a specific book, send a GET request to /show/:id with the ID of the book.</li>
<li>To update a specific book, send a GET request to /update/:id with the ID of the book and the updated details.</li>
<li>To delete a specific book, send a DELETE request to /delete/:id with the ID of the book.</li>
</ul>
