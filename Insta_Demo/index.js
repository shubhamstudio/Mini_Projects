const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    const followers = ["priyanshu", "ayush", "sujal"]
    let { username } = req.params;
    console.log(username, followers);
    res.render('instagram.ejs', { username, followers })
})

app.get("/", (req, res) => {
    res.send('This page is in maintainence')
})

app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})


