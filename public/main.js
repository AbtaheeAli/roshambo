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

function handlePlayerOneScissorSelection(event) {
  document.querySelector('.playerOneChoice .blankImage').src =
    'https://rpsls.net/images/scissors.png'
}

function handlePlayerOneSpockSelection(event) {
  document.querySelector('.playerOneChoice .blankImage').src =
    'https://stt.wiki/w/images/thumb/b/b7/Commander_Spock_Head.png/180px-Commander_Spock_Head.png'
}

function handlePlayerOneLizardSelection(event) {
  document.querySelector('.playerOneChoice .blankImage').src =
    'https://rpsls.net/images/lizard.png'
}

function handlePlayerTwoRockSelection(event) {
  document.querySelector('.playerTwoChoice .blankImage').src =
    'https://rpsls.net/images/rock.png'
}

function handlePlayerTwoPaperSelection(event) {
  document.querySelector('.playerTwoChoice .blankImage').src =
    'https://rpsls.net/images/paper.png'
}

function handlePlayerTwoScissorSelection(event) {
  document.querySelector('.playerTwoChoice .blankImage').src =
    'https://rpsls.net/images/scissors.png'
}

function endButtonPlayerOne(event) {
  const playerOneHidden = document.querySelector('.playerOneChoice')
  playerOneHidden.style.display = 'none'
}

function endButtonPlayerTwo(event) {
  if (playerOneChoice === playerTwoChoice) {
    const changeLetsPlay = document.querySelector('.letsPlay h2')
    changeLetsPlay.textContent = 'Draw'
  }

  if (playerOneChoice === 'rock' && playerTwoChoice === 'scissor') {
      const playerOneWin = document.querySelector(.player)
    }
    else if (p1 == 'scissors' && p2 == 'paper') return 'Player 1 won!'
    else if (p1 == 'paper' && p2 == 'rock') return 'Player 1 won!'
    else return 'Player 2 won!'
  }
}

const main = () => {
  const playerOneRock = document.querySelector('.playerOneChoice .rock')
  playerOneRock.addEventListener('click', handlePlayerOneRockSelection)

  const playerOnePaper = document.querySelector('.playerOneChoice .paper')
  playerOnePaper.addEventListener('click', handlePlayerOnePaperSelection)

  const playerOneScissors = document.querySelector('.playerOneChoice .scissors')
  playerOneScissors.addEventListener('click', handlePlayerOneScissorSelection)

  const playerOneSpock = document.querySelector('.playerOneChoice .spock')
  playerOneSpock.addEventListener('click', handlePlayerOneSpockSelection)

  const playerOneLizard = document.querySelector('.playerOneChoice .lizard')
  playerOneLizard.addEventListener('click', handlePlayerOneLizardSelection)

  const playerTwoRock = document.querySelector('.playerTwoChoice .rock')
  playerTwoRock.addEventListener('click', handlePlayerTwoRockSelection)

  const playerTwoPaper = document.querySelector('.playerTwoChoice .paper')
  playerTwoPaper.addEventListener('click', handlePlayerTwoPaperSelection)

  const playerTwoScissor = document.querySelector('.playerTwoChoice .scissor')
  playerTwoScissor.addEventListener('click', handlePlayerTwoScissorSelection)

  const buttonPlayerOne = document.querySelector('.endButton button')
  buttonPlayerOne.addEventListener('click', endButtonPlayerOne)

  const buttonPlayerTwo = document.querySelector('.endButtonPlayerTwo button')
  buttonPlayerTwo.addEventListener('click', endButtonPlayerTwo)
}
document.addEventListener('DOMContentLoaded', main)
