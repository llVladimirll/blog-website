const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./router/blogRouter');

//Express JS
const app = express();

//MongoDB
const dbURI = "mongodb+srv://vladi:coLobAlmivcyckOx@nodeTutorial.7gtnt7i.mongodb.net/node-tutorial?retryWrites=true&w=majority";
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err))


app.set('view engine', 'ejs');



app.use(morgan('dev'));

 
//Static Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


//Routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: "About us"});
});

//Blogs Routes
app.use('/blogs', blogRoutes);

app.use((req, res) => {
   res.render('404', {title: "Not Found"});
});