// 3.10 (start)
const express = require('express')
const app = express()
const port = 3000

const appRoute = require('./routes')

// Set view engine to ejs
app.set('view engine', 'ejs')

// Use Middleware for body parser
app.use(express.urlencoded( { extended: false } ))

// Set route
app.use('/', appRoute)

// Listen
app.listen(port, () => {
    console.log(`Students app live at https://127.0.0.1:${port}`);
})