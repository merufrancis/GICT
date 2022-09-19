const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.html');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/login.html');
});
app.get('/list', (req, res) => {
    res.sendFile(__dirname + '/static/list.html');
  });

app.post('/login', (req, res) => {
  // Insert Login Code Here
  let name = req.body.name;
  let password = req.body.password;
  let address = req.body.address;
  let email = req.body.email;
  res.send(`Name: ${name} Email: ${email} Address: ${address} Password: ${password}`);
});

const port = 3000 // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));