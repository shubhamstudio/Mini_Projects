const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "/views"));

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render('instagram.ejs', { data: instaData[username] })
    } else{
        res.render('error.ejs');
    }

})

app.get("/", (req, res) => {
    res.send('This page is in maintainence')
})
 
app.listen(port, () => {
    console.log(`app is listening to port ${port}`);
})


