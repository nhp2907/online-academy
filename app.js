const express = require('express');
const path = require('path')
const exphbs = require('express-handlebars')
const sassMiddleware = require('node-sass-middleware');
const User = require("./models/user");
const {cc} = require('./service/auth.service')
require('dotenv').config();

const app = express();

app.engine('hbs', exphbs({
    defaultLayout: 'main.hbs',
    extname: '.hbs',

}))
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(
    sassMiddleware({
        src: __dirname + '/public/assets/scss',
        dest: path.join(__dirname, '/public/assets/css'),
        prefix: '/assets/css',
        debug: true,
    })
)
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/teacher', require('./routes/teacher'));
app.use('/admin', require('./routes/admin'));
app.use('/test', require('./routes/test'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`);
})
