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
  let result = false
  board[value] = player
  console.log(board)

  let playerMoves = utils.getWinArr(board, player)
  console.log('player moves ' + playerMoves)

  if (utils.checkWin(playerMoves)) {
    console.log('WIN')
    result = true
  }

  if (result) {
    res.redirect('win')
  } else {
    if (!board.includes(false)) {
      res.redirect('tie')
    }

    if (player === 'x') {
      player = 'o'
    } else if (player === 'o') {
      player = 'x'
    }
    res.redirect('/')
  }
})

/**
 * Win route, pass in winning player then reset player for next game.
 */
server.get('/win', (req, res) => {
  res.render('win', { player: player })
  board = [false, false, false, false, false, false, false, false, false]
  player = 'x'
})

/**
 * Redirect for tie. No viewData, reset player for next game.
 */
server.get('/tie', (req, res) => {
  res.render('tie', {})
  board = [false, false, false, false, false, false, false, false, false]
  player = 'x'
})

module.exports = server
