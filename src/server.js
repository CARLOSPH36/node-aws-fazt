const express = require('express');
const { engine }= require('express-handlebars');
const path = require('path');


// Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs'

}))

app.set('view engine', '.hbs');

// Midlewares, son funciones que se van ejecuntando mientras llegan peticiones
app.use(express.urlencoded({extended:false}))

// Global variables


// Routes
app.get('/', (req, res) =>{
    res.render('index')
});

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
