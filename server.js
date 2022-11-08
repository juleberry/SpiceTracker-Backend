const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
const userRoutes = require('./routes/api/users')
const spiceRoutes = require('./routes/api/spices')
const cors = require('cors')
require('dotenv').config();
require('./config/database');

// set dev port to 3001
const port = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))

// body parser
app.use(express.json())

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

// ---------
// ROUTES
// ---------
app.use('/api/users', userRoutes);
app.use('/api/spices', spiceRoutes);


// if Express route not recognized, React will deal with the route
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

// app listening
app.listen(port, () => {
  console.log(`Listening on Port ${port}`)
})