const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

app.use(express.static('public'))
app.set('views', 'views')
app.set('view engine', 'ejs')
app.get('/', (req, res) => res.render('home'))

app.listen(process.env.PORT)
