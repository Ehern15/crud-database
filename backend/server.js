const express = require('express');
const app = express();


const loginRoute = require('./routes/Login');
const registerRoute = require('./routes/Register');

app.use('/login', loginRoute);
app.use('/register', registerRoute);

app.post('/register', (req, res) => {
  const {firstName,lastName,email,userName,password} = req.body;
  
})

app.get('/', (req, res) => {
  res.send('<h1>Hello, Express.js Server!</h1>');
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});