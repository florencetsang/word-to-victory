const express = require('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('Hello Nodemon!')
});

app.get('/users', function (req, res) {
    res.send('users')
})

app.get("/users.birthday", function (req, res) {
    res.send("users.birthday");
});

app.get("/foe?o", function (req, res) {
    res.send("foe?o");
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}!`)
});

