const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const dal = require('./dal');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

//setting up mustache
app.engine('mustache', mustacheExpress())
app.set('view engine', 'mustache')
app.set('views', __dirname + '/views')

//setting up express static
app.use(express.static('public'))

//setting up bodyParser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( {extended: false}))

//routes
app.use('/', routes)

//setting the port
//starting up server
app.listen(3000, function () {
  console.log('Server is serving on port 3000! Get your server here!')
})
