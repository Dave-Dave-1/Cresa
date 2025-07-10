const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  // No SSL since it's not supported
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Example API route to get lessons
app.get('/api/lessons', (req, res) => {
  db.query('SELECT id, title FROM lessons', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// API route to get names
app.get('/api/names', (req, res) => {
  db.query('SELECT id, name FROM names', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});


app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
