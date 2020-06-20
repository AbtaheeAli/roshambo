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

function handlePlayerTwoSpockSelection(event) {
  document.querySelector('.playerTwoCard .blankImage').src =
    'https://stt.wiki/w/images/thumb/b/b7/Commander_Spock_Head.png/180px-Commander_Spock_Head.png'
  playerOneChoice = 'spock'
}

function handlePlayerTwoLizardSelection(event) {
  document.querySelector('.playerTwoCard .blankImage').src =
    'https://rpsls.net/images/lizard.png'
  playerOneChoice = 'lizard'
}

function handleEndButtonPlayerOne(event) {
  if (playerOneChoice === '') {
    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'You must pick before ending turn!'
    return
  }

  const playerOneHidden = document.querySelector('.playerOneCard')
  playerOneHidden.style.display = 'none'

  const playerTwoCard = document.querySelector('.playerTwoCard')
  playerTwoCard.style.display = 'flex'
}

function handleEndButtonPlayerTwo(event) {
  const playerOneCard = document.querySelector('.playerOneCard')
  playerOneCard.style.display = 'flex'

  const gameButtons = document.querySelector('.gameButtons')
  gameButtons.style.display = 'flex'
  gameButtons.style.justifyContent = 'space-around'

  if (playerTwoChoice === '') {
    const endLabel = document.querySelector('.gameEndLabel')
    endLabel.textContent = 'You must pick before ending turn!'
    return
  }

  if (playerOneChoice === playerTwoChoice) {
    const draw = document.querySelector('.letsPlay h2')
    draw.textContent = 'It is a draw!'
    return
  }

  if (
    (playerOneChoice === 'rock' && playerTwoChoice === 'scissor') ||
    (playerOneChoice === 'scissor' && playerTwoChoice === 'paper') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'scissor') ||
    (playerOneChoice === 'spock' && playerTwoChoice === 'rock') ||
    (playerOneChoice === 'lizard' && playerTwoChoice === 'spock') ||
    (playerOneChoice === 'paper' && playerTwoChoice === 'spock') ||
    (playerOneChoice === 'rock' && playerTwoChoice === 'lizard') ||
    (playerOneChoice === 'scissor' && playerTwoChoice === 'lizard') ||
    (playerOneChoice === 'lizard' && playerTwoChoice === 'paper')
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

function handleStartTheGame(event) {
  const playerTwoCard = document.querySelector(' .playerTwoCard')
  playerTwoCard.style.display = 'none'

  const startGameButton = document.querySelector('.gameButtons')
  startGameButton.style.display = 'none'
}

function handleEndTheGame(event) {
  const valueCountPlayer1 = document.querySelector('.playerOneScore')
  playerOne = 0
  valueCountPlayer1.textContent = `${playerOne}`

  const valueCountPlayer2 = document.querySelector('.playerTwoScore')
  playerTwo = 0
  valueCountPlayer2.textContent = `${playerTwo}`
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
  buttonPlayerOne.addEventListener('click', handleEndButtonPlayerOne)

  const buttonPlayerTwo = document.querySelector('.endButtonPlayerTwo button')
  buttonPlayerTwo.addEventListener('click', handleEndButtonPlayerTwo)

  const startGame = document.querySelector('.gameButtons')
  startGame.addEventListener('click', handleStartTheGame)

  const endGame = document.querySelector('.gameButtons')
  endGame.addEventListener('click', handleEndTheGame)
}

document.addEventListener('DOMContentLoaded', main)
