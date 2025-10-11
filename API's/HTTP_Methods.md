# ---------------------1. GET - Retrieve Data-----------------------------------
# I want to read/view something"
# Example: Get user list
fetch('https://api.example.com/users')
  .then(response => response.json())
  .then(users => console.log(users));

# HTTP Request
GET /users HTTP/1.1
Host: api.example.com

# HTTP Response (Success)
HTTP/1.1 200 OK
["user1", "user2", "user3"]

# Characteristics:

✅ Safe (doesn't change server data)

✅ Idempotent (same request = same result)

✅ Can be cached

❌ No request body

# ---------------------1. POST - Create New Data-----------------------------------
# I want to create something new
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({name: 'Alice', email: 'alice@example.com'})
});

# HTTP Request
POST /users HTTP/1.1
Content-Type: application/json

{"name": "Alice", "email": "alice@example.com"}

# HTTP Response (Success - Created)
HTTP/1.1 201 Created
Location: /users/123
{"id": 123, "name": "Alice", "email": "alice@example.com"}

# Characteristics:

❌ Not safe (changes server data)

❌ Not idempotent (multiple requests = multiple resources)

✅ Has request body

Typically returns 201 Created



# ---------------------3. PUT - Replace Entire Resource-----------------------------------
# I want to completely update something

# Example: Update entire user
fetch('https://api.example.com/users/123', {
  method: 'PUT',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({name: 'Alice Smith', email: 'alice.smith@example.com'})
});

# HTTP Request
PUT /users/123 HTTP/1.1
Content-Type: application/json

{"name": "Alice Smith", "email": "alice.smith@example.com"}

# HTTP Response (Success)
HTTP/1.1 200 OK
{"id": 123, "name": "Alice Smith", "email": "alice.smith@example.com"}

# Characteristics:

❌ Not safe

✅ Idempotent (multiple same requests = same result)

✅ Has request body

Replaces entire resource



# ---------------------------4. PATCH - Partial Update-------------------------------------------
# I want to update only specific fields

# Example: Update only user's email
fetch('https://api.example.com/users/123', {
  method: 'PATCH',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({email: 'new.email@example.com'})
});

# HTTP Request
PATCH /users/123 HTTP/1.1
Content-Type: application/json

{"email": "new.email@example.com"}

# HTTP Response (Success)
HTTP/1.1 200 OK
{"id": 123, "name": "Alice", "email": "new.email@example.com"}

# Characteristics:

❌ Not safe

✅ Idempotent (usually)

✅ Has request body

Updates only specified fields



# ---------------------------5. DELETE - Remove Data-------------------------------------------
# I want to delete something

# Example: Delete a user
fetch('https://api.example.com/users/123', {
  method: 'DELETE'
});

# HTTP Request
DELETE /users/123 HTTP/1.1

# HTTP Response (Success - No Content)
HTTP/1.1 204 No Content

# Characteristics:

❌ Not safe

✅ Idempotent (multiple deletes = same result)

❌ No request body typically

Often returns 204 No Content

# ------------------------------🎯 Real API Examples-------------------------------

# Blog API Endpoints:

GET    /posts           → Get all blog posts
POST   /posts           → Create a new blog post
GET    /posts/1         → Get blog post with ID 1
PUT    /posts/1         → Replace entire post with ID 1
PATCH  /posts/1         → Update title of post with ID 1
DELETE /posts/1         → Delete post with ID 1

# ---------------------------📊 Summary Table----------------------------------


┌─────────────────────────────────────────────────────────────────────────┐
│                     HTTP METHODS QUICK REFERENCE                        │
├───────────┬─────────┬─────────────┬──────────────┬──────────────────────┤
│   METHOD  │  SAFE?  │ IDEMPOTENT? │ REQUEST BODY?│  TYPICAL STATUS CODE │
├───────────┼─────────┼─────────────┼──────────────┼──────────────────────┤
│           │         │             │              │                      │
│    GET    │   ✅    │     ✅     │      ❌     │      200 OK          │
│           │         │             │              │                      │
├───────────┼─────────┼─────────────┼──────────────┼──────────────────────┤
│           │         │             │              │                      │
│   POST    │   ❌    │     ❌     │      ✅     │    201 Created        │
│           │         │             │              │                      │
├───────────┼─────────┼─────────────┼──────────────┼──────────────────────┤
│           │         │             │              │                      │
│    PUT    │   ❌    │     ✅     │      ✅     │      200 OK          │
│           │         │             │              │                      │
├───────────┼─────────┼─────────────┼──────────────┼──────────────────────┤
│           │         │             │              │                      │
│   PATCH   │   ❌    │     ✅*    │      ✅     │      200 OK          │
│           │         │             │              │                      │
├───────────┼─────────┼─────────────┼──────────────┼──────────────────────┤
│           │         │             │              │                      │
│  DELETE   │   ❌    │     ✅     │      ❌     │  204 No Content      │
│           │         │             │              │                      │
└───────────┴─────────┴─────────────┴──────────────┴──────────────────────┘


📊 Meaningful Status Codes
───────────────────────────────────────────────
 Status Code Categories
───────────────────────────────────────────────
 Range   | Type           | Meaning
─────────┼────────────────┼─────────────────────────────────────────────────────────────
 1xx     | Informational  | Request received, continuing process
 2xx     | Success        | Action successfully received, understood, and accepted
 3xx     | Redirection    | Further action needed to complete request
 4xx     | Client Error   | Request contains bad syntax or cannot be fulfilled
 5xx     | Server Error   | Server failed to fulfill valid request
───────────────────────────────────────────────

# Essential Status Codes You Must Know:

// 2xx SUCCESS
200 OK  // Standard success response
201 Created  // Resource created successfully
204 No Content  // Success but no content to return

// 3xx REDIRECTION
301 Moved Permanently  // Resource has new permanent URL
304 Not Modified  // Resource not modified (caching)

// 4xx CLIENT ERRORS
400 Bad Request  // Malformed request
401 Unauthorized  // Authentication required
403 Forbidden  // Authenticated but not authorized
404 Not Found  // Resource doesn't exist
409 Conflict  // Resource conflict (e.g., duplicate email)
422 Unprocessable Entity  // Validation errors

// 5xx SERVER ERRORS
500 Internal Server Error  // Generic server error
503 Service Unavailable  // Server overloaded or down