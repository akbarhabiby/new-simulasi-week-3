// Setup Express
const express = require('express')
const app = express()
const port = 3000

// Route
const router = require('./routes/index')

// View Engine
app.set('view engine', 'ejs')

// Middleware
app.use(express.urlencoded( { extended: false }))

app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})