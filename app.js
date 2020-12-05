const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars')
const sassMiddleware = require('node-sass-middleware');
const bodyParser = require('body-parser')
const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    extname: '.hbs',

}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
app.use(
    sassMiddleware({
        src: __dirname + '/public/assets/scss',
        dest: path.join(__dirname, '/public/assets/css'),
        prefix: '/assets/css',
        debug: true,
    })
)

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(bodyParser.json()); 

app.use((req, res, next) => {
    // get auth info from request
    // const auth = req.header('Authentication');
    // const {user, token} = auth;
    // load user from access token if any or return null;
    // res.locals.user = user;
    res.locals.user = null;
    next();
})

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/teacher', require('./routes/teacher'));
app.use('/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})
