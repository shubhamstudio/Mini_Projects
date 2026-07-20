const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4: uuidv4} = require('uuid');

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: uuidv4(),
        username: "Shubham Bisht",
        content: "I love coding",
    },
    {
        id: uuidv4(),
        username: "Priyanshu",
        content: "Consitency is the key to success"
    },
    {
        id: uuidv4(),
        username: "Ayush",
        content: "Hardwork is important to achieve success"
    }];


app.listen(port, () => {
    console.log(`App is listening to port ${port}`);
});


app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content });
    res.redirect("/posts");
    // console.log(req.body);
});
app.get("/", (req, res) => {
    res.send("Server working well!");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});



