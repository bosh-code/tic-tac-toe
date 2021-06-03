const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.get('/', (req, res) => {
  let viewData = {
    player: 'x',
    board: [false, true, false, true, false, false, true, false, false]
  }
  res.render('home', viewData)
})

module.exports = server
