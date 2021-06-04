const winConditionsArr = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function getWinArr (arr, value) {
  let indexes = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      indexes.push(i)
    }
  }
  return indexes
}

function checkWin (arr) {
  let result = false
  winConditionsArr.forEach(function (innerArr) {
    if (innerArr.every((val) => arr.includes(val)) === true) {
      result = true
    }
  })
  return result
}

module.exports = {getWinArr, checkWin}
