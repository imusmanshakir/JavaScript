import express from "express";
const app = express();
app.use(express.json());

let posts = [];
let postId = 1;

app.get("/api", (req, res) => {
  res.send("Welcome to the POST Method Playground!");
});

// Create a new post
app.post("/api/posts", (req, res) => {
  console.log("📨 Received post data:", req.body);
  const { title, content, author, tags = [] } = req.body;
  // Validation
  if (!title || !content || !author) {
    return res.status(400).json({
      error: "Title, content, and author are required",
      received: req.body,
    });
  }
  // Create new post
  const newPost = {
    id: postId++,
    title: title,
    content: content,
    tags: Array.isArray(tags) ? tags : [],
    createdAt: new Date().toISOString(),
    likes: 0,
    comments: [],
  };
  posts.push(newPost);
  console.log("✅ New post created:", newPost);

  res.status(201).json({
    message: "Post created successfully",
    post: newPost,
  });
});

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.listen(3002, () => {
  console.log("🚀 Server is running on http://localhost:3002");
});
