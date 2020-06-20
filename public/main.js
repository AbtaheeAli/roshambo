let playerOne = 0
let playerTwo = 0
let playerOneChoice = ''
let playerTwoChoice = ''

function handlePlayerOneRockSelection(event) {
  document.querySelector('.playerOneCard .blankImage').src =
    'https://rpsls.net/images/rock.png'
  playerOneChoice = 'rock'
}

function handlePlayerOnePaperSelection(event) {
  document.querySelector('.playerOneCard .blankImage').src =
    'https://rpsls.net/images/paper.png'
  playerOneChoice = 'paper'
}

function handlePlayerOneScissorSelection(event) {
  document.querySelector('.playerOneCard .blankImage').src =
    'https://rpsls.net/images/scissors.png'
  playerOneChoice = 'scissor'
}

function handlePlayerOneSpockSelection(event) {
  document.querySelector('.playerOneCard .blankImage').src =
    'https://stt.wiki/w/images/thumb/b/b7/Commander_Spock_Head.png/180px-Commander_Spock_Head.png'
  playerOneChoice = 'spock'
}

function handlePlayerOneLizardSelection(event) {
  document.querySelector('.playerOneCard .blankImage').src =
    'https://rpsls.net/images/lizard.png'
  playerOneChoice = 'lizard'
}

function handlePlayerTwoRockSelection(event) {
  document.querySelector('.playerTwoCard .blankImage').src =
    'https://rpsls.net/images/rock.png'
  playerTwoChoice = 'rock'
}

function handlePlayerTwoPaperSelection(event) {
  document.querySelector('.playerTwoCard .blankImage').src =
    'https://rpsls.net/images/paper.png'
  playerTwoChoice = 'paper'
}

function handlePlayerTwoScissorSelection(event) {
  document.querySelector('.playerTwoCard .blankImage').src =
    'https://rpsls.net/images/scissors.png'
  playerTwoChoice = 'scissor'
}

function endButtonPlayerOne(event) {
  const playerOneHidden = document.querySelector('.playerOneCard')
  playerOneHidden.style.display = 'none'
}

function endButtonPlayerTwo(event) {
  const playerOneCard = document.querySelector('.playerOneCard')
  playerOneCard.style.display = 'flex'

  if (playerOneChoice === playerTwoChoice) {
    const draw = document.querySelector('.letsPlay h2')
    draw.textContent = 'It is a draw!'
    return
  }

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissor') ||
    (playerOneChoice === 'scissor' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock')
  ) {
    const playerOneWin = document.querySelector('.playerOneScore')
    playerOne++
    playerOneWin.textContent = `${playerOne}`
    const displayWinner = document.querySelector('.letsPlay h2')
    displayWinner.textContent = 'Player One Wins! Go Again'
  } else {
    const playerTwoWin = document.querySelector('.playerTwoScore')
    playerTwo++
    playerTwoWin.textContent = `${playerTwo}`
    const displayWinner = document.querySelector('.letsPlay h2')
    displayWinner.textContent = 'Player Two Wins! Go Again'
  }
}

const main = () => {
  const playerOneRock = document.querySelector('.playerOneCard .rock')
  playerOneRock.addEventListener('click', handlePlayerOneRockSelection)

  const playerOnePaper = document.querySelector('.playerOneCard .paper')
  playerOnePaper.addEventListener('click', handlePlayerOnePaperSelection)

  const playerOneScissors = document.querySelector('.playerOneCard .scissor')
  playerOneScissors.addEventListener('click', handlePlayerOneScissorSelection)

  const playerOneSpock = document.querySelector('.playerOneCard .spock')
  playerOneSpock.addEventListener('click', handlePlayerOneSpockSelection)

  const playerOneLizard = document.querySelector('.playerOneCard .lizard')
  playerOneLizard.addEventListener('click', handlePlayerOneLizardSelection)

  const playerTwoRock = document.querySelector('.playerTwoCard .rock')
  playerTwoRock.addEventListener('click', handlePlayerTwoRockSelection)

  const playerTwoPaper = document.querySelector('.playerTwoCard .paper')
  playerTwoPaper.addEventListener('click', handlePlayerTwoPaperSelection)

  const playerTwoScissor = document.querySelector('.playerTwoCard .scissor')
  playerTwoScissor.addEventListener('click', handlePlayerTwoScissorSelection)

  const buttonPlayerOne = document.querySelector('.endButtonPlayerOne button')
  buttonPlayerOne.addEventListener('click', endButtonPlayerOne)

  const buttonPlayerTwo = document.querySelector('.endButtonPlayerTwo button')
  buttonPlayerTwo.addEventListener('click', endButtonPlayerTwo)
}
document.addEventListener('DOMContentLoaded', main)
