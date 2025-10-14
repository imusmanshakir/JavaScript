import express from "express";
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (form data)
app.use(express.urlencoded({ extended: true }));

app.get("/api", (req, res) => {
  res.send("Welcome to the POST Method Playground! Use /users, /posts, or /products endpoints.");
});

let users = [];
let posts = [];
let products = [];
let userId = 1;
let postId = 1;
let productId = 1;

app.listen(3000, () => {
  console.log("🚀 POST Method Playground running on http://localhost:3000");
  console.log("📝 Try these endpoints with Postman or curl!");
});