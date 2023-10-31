# RestApi-mongodb
The server will start at http://localhost:3000 by default.

<h2>Technologies Used</h2>

<p>
    <ul>
        <li>Node.js</li>
        <li>Express</li>
        <li>Mongodb</li>
    </ul>
</p>

# To use this application, follow these steps:
<ol>
    <li>Clone the repository.</li>
    <li>Install the necessary dependencies using <b>npm install</b>.</li>
    <li>Set up the database configurations.</li>
    <li>Run the server using <b>node app.js</b>.</li>
    <li>Open the application in your browser.</li>
</ol>

# Endpoints
<ul>
<li>GET /books - Get default route.</li>
<li>POST /books/add - Add a new book.</li>
<li>GET /books/show - Get all books.</li>
<li>GET /books/show/:id - Get a specific book by ID.</li>
<li>GET /books/update/:id - Update a specific book by ID.</li>
<li>DELETE /books/delete/:id - Delete a specific book by ID.</li>
</ul>

# Usage
<ul>
<li>To add a new book, send a POST request to /add with the required parameters.</li>
<li>To get all books, send a GET request to /show.</li>
<li>To get a specific book, send a GET request to /show/:id with the ID of the book.</li>
<li>To update a specific book, send a GET request to /update/:id with the ID of the book and the updated details.</li>
<li>To delete a specific book, send a DELETE request to /delete/:id with the ID of the book.</li>
</ul>
