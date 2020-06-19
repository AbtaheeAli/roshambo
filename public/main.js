let playerOne = 0
let playerTwo = 0
let playerOneChoice = ''
let playerTwoChoice = ''

function handlePlayerOneRockSelection(event) {
  document.querySelector('.playerOneChoice .blank').src =
    'https://rpsls.net/images/rock.png'
}

const main = () => {
  const playerOneRock = document.querySelector('.playerOneChoice .rock')

  playerOneRock.addEventListener('click', handlePlayerOneRockSelection)
}
document.addEventListener('DOMContentLoaded', main)
