import express from "express";
const app = express();//createa an instance of express

app.use(express.json());

let todos = [];
let nextId = 1;

app.get("/api", async (req, res) => {
  try {
    // Fetch data from dummyjson.com
    const response = await fetch('https://dummyjson.com/quotes/1');
    
    // Check if the external request was successful
    if (!response.ok) {
      throw new Error(`External API responded with status: ${response.status}`);
    }
    
    // Parse the JSON response
    const quoteData = await response.json();
    
    // Send the fetched data to your client
    res.json(quoteData);
    
  } catch (error) {
    console.error('Error fetching from external API:', error);
    res.status(500).json({ 
      error: "Failed to fetch data from external API",
      details: error.message 
    });
  }
});


app.post("/api/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const newTodo = { id: nextId++, task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.get("/api/todos", (req, res) => res.json(todos));

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
