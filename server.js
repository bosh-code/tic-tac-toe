const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

let player = 'x'
let board = [false, false, false, false, false, false, false, false, false]
// let board = [false, 'x', false, 'x', false, 'o', 'x', false, false]
// let board = ['x', false, 'o', 'x', false, 'o', 'x', false, false]

server.get('/', (req, res) => {
  let viewData = {
    board
  }
  res.render('home', viewData)
})

server.post('/', (req, res) => {
  let value = Object.keys(req.body)[0]
  board[value] = player

  if (player === 'x') {
    player = 'o'
  } else if (player === 'o') {
    player = 'x'
  }
  console.log(player)
  console.log(board)
  res.redirect('/')
})

module.exports = server
