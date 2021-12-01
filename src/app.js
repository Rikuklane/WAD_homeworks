const express = require('express');
const pool = require('./database');
const app = express();

// register the ejs view engine
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '\\public'));
console.log(__dirname + '/public')
// listen for requests on port 3000
app.listen(3000);

/* app.get() is used to respond to Get requests, and it takes two arguments:
1- arg1: represents what path/url you want to listen to (e.g., '/' listens to index path)
2- arg2: represents a function that takes in request and response objects */
app.get('/', (req, res) => {
    /* res.sendFile() is a method that can be used to send files as its name indicates. However, it takes the absolute
    not the relative path to the file. Therefore, you need to specify the root directory of the file.
    To avoid this confusion, you can use "__dirname", which you have access to after installing "lodash" */
    res.sendFile('./views/index.ejs', { root: __dirname });
    res.render('index')
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.ejs', { root: __dirname });
    res.render('about')
});

app.get('/contact', (req, res) => {
    res.sendFile('./views/contact.ejs', { root: __dirname });
    res.render('contact')
});
app.get('/posts/:id', async(req, res) => {
    try {
        console.log("get posts request has arrived");
        const id = parseInt(req.params.id)
        const posts = await pool.query(
            "SELECT * FROM posts WHERE id = $1", [id]
        );
        res.json(posts.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
app.use((req, res) => {
    res.status(404).render('404');
});