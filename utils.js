let testWin = ['x', false, false, 'x', false, false, 'x', false, false]

let indexes = []

function getWinArr (arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      indexes.push(i)
    }
  }
  return indexes
}
getWinArr(testWin, 'x')


function checkWin(arr) {

  // console.log(arr)

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
  console.log('index', indexes)
  console.log('win condit', winConditionsArr[3])
  if (arr[1] === winConditionsArr[3][1]) {
    console.log('win')
  } else {
    console.log('err')
  }
  
  
  // for (let i = 0; i < 8; i++) {
  //   // console.log('loop log', winConditionsArr[i])
  //   // check if indexes is equal to any win condition
  //   if (arr === winConditionsArr[3]) {
  //     console.log('win')
  //   }
    
  // }
}

checkWin(indexes)