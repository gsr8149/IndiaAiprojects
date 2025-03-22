const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// Server start with error handling
const server = app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Handle errors if port is already in use
server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
        console.log(`Port ${PORT} is already in use. Trying a new port...`);
        setTimeout(() => {
            server.close();
            server.listen(PORT + 1);
            console.log(`New server started on port ${PORT + 1}`);
        }, 1000);
    } else {
        console.error("Server error:", err);
    }
});
