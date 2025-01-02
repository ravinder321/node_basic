const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; 

// Middleware for serving static files
app.use(express.static("public"));

// Setting EJS as the view engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/login", (req, res) => {
    res.render("login");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
