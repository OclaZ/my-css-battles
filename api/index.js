const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const battlesDir = path.join(__dirname, "../battles"); // Adjust path to point to battles directory

app.use(express.static(path.join(__dirname, "../"))); // Serve static files from the root

// Route to fetch the list of battle files
app.get("/battles-list", (req, res) => {
  fs.readdir(battlesDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read directory" });
    }

    const battleFiles = files
      .filter((file) => file.endsWith(".html")) // Filter HTML files
      .map((file) => ({
        date: file.replace(".html", ""), // Remove file extension to get the date
        path: `/battles/${file}`,
      }));

    res.json(battleFiles);
  });
});

// Serve the index.html page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html")); // Adjust path to point to index.html
});

module.exports = app; // Export the app
