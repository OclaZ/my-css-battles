const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const battlesDir = path.join(process.cwd(), "battles");

// Serve static files
app.use(express.static(process.cwd()));

// API route to get battles list
app.get("/api/battles", async (req, res) => {
  try {
    const files = await fs.readdir(battlesDir);
    const battleFiles = files
      .filter((file) => file.endsWith(".html"))
      .map((file) => ({
        date: file.replace(".html", ""),
        path: `/battles/${file}`,
      }));
    res.json(battleFiles);
  } catch (error) {
    console.error("Error reading battles directory:", error);
    res.status(500).json({ error: "Failed to read battles directory" });
  }
});

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
