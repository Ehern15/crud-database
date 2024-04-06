const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql')
const cors = require('cors');
const db = require('./database/database');

const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'crud_project',
})

connection.connect();
//register a user
app.post('/register', (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  
  connection.query('INSERT INTO users (username,first_name,last_name,password,email) VALUES (?, ?, ?, ?, ?)', [username,firstName,lastName,password,email], (err, rows, fields) => {
    if (err) throw err

  });
});

//TODO: login

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
