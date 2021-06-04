const express = require('express')
const utils = require('./utils')

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
  console.log(board)

  let playerMoves = utils.getWinArr(board, player)
  console.log('player moves ' + playerMoves)

  if (utils.checkWin(playerMoves)) {
    console.log('player ' + player + ' wins!')
  }

  if (player === 'x') {
    player = 'o'
  } else if (player === 'o') {
    player = 'x'
  }
  res.redirect('/')
})

/**
 * temp win function to render a win page. Passed viewData obj temp for testing
 */
server.get('/win', (req, res) => {
  res.render('win', {player: 'x'})
})

module.exports = server
