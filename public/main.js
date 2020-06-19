let playerOne = 0
let playerTwo = 0
let playerOneChoice = ''
let playerTwoChoice = ''

function handlePlayerOneRockSelection(event) {
  document.querySelector('.playerOneChoice .blankImage').src =
    'https://rpsls.net/images/rock.png'
}

function handlePlayerOnePaperSelection(event) {
  document.querySelector('.playerOneChoice .blankImage').src =
    'https://rpsls.net/images/paper.png'
}

const main = () => {
  const playerOneRock = document.querySelector('.playerOneChoice .rock')
  playerOneRock.addEventListener('click', handlePlayerOneRockSelection)

  const playerOnePaper = document.querySelector('.playerOneChoice .paper')
  playerOnePaper.addEventListener('click', handlePlayerOnePaperSelection)
}
document.addEventListener('DOMContentLoaded', main)
