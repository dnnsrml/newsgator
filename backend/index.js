const express = require("express");
const app = express();
const PORT = 5000;

// Import routes
const sampleRoutes = require("./routes/sampleRoutes");

// Middleware
app.use(express.json());

// Use route
app.use("/api", sampleRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
