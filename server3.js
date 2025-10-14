import express from 'express';
const app = express();
app.use(express.json());

app.get('/api', (req, res) => {
    res.send('Welcome to the Product API, use /api/products to manage products.');
});

let products = [];
let productId = 1;


// Create a product with complex validation
app.post("/api/products", (req, res) => {
      console.log("📨 Received registration data:", req.body);

  const { name, price, category, inStock = true, features = [] } = req.body;

  // Comprehensive validation
  const errors = [];

  if (!name) errors.push("Product name is required");
  if (!price || isNaN(price) || price < 0) errors.push("Valid price is required");
  if (!category) errors.push("Category is required");

  if (errors.length > 0) {
    return res.status(400).json({
      error: "Validation failed",
      details: errors,
      received: req.body
    });
  }

  const newProduct = {
    id: productId++,
    name:name,
    price: parseFloat(price),
    category:category,
    inStock: Boolean(inStock),
    features: Array.isArray(features) ? features : [features],
    createdAt: new Date().toISOString(),
    sku: `PROD-${Date.now()}`
  };

  products.push(newProduct);

  res.status(201).json({
    message: "Product created successfully",
    product: newProduct
  });
});

app.get("/api/products", (req, res) => {
  res.json(products);
});


app.listen(3003, () => {
    console.log('Server is running on http://localhost:3003');
});
