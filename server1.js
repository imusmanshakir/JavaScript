import express from "express";
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send(
    "Welcome to the POST Method Playground! Use /users, /posts, or /products endpoints."
  );
});

let users = [];
let userId = 1;

// Basic user registration
app.post("/api/register", (req, res) => {
  console.log("📨 Received registration data:", req.body);

  const { name, email, password, age } = req.body;

  // Validation
  if (!name || !email || !password) {
    return res.status(400).json({
      error: "Name, email, and password are required",
      received: req.body,
    });
  }

  // Check if user already exists
  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(409).json({
      error: "User with this email already exists",
    });
  }

  // Create new user
  const newUser = {
    id: userId++,
    name: name,
    email: email,
    password: password, // In real apps, hash this!
    age: age || null,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);

  console.log("✅ New user created:", newUser);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      age: newUser.age,
    },
  });
});

app.get("/api/register", (req, res) => {
  res.json(users);
});




























app.listen(3001, () => {
  console.log("🚀 POST Method Playground running on http://localhost:3001");
  console.log("📝 Try these endpoints with Postman or curl!");
});
