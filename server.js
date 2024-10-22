const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const battlesDir = path.join(__dirname, "battles");

app.use(express.static(__dirname));

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
  res.sendFile(path.join(__dirname, "index.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
