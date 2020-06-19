let playerOne = 0
let playerTwo = 0
let playerOneChoice = ''
let playerTwoChoice = ''

function handlePlayerOneRockSelection(event) {
  const choice = document.createElement('img')
  choice.src = 'https://rpsls.net/images/rock.png'
  choice.width = '200'
  choice.height = '200'
  const addImg = document.querySelector('.playerOneChoice figure')
  addImg.appendChild(choice)
  if (choice === true) {
    document.getElementById('.blank').src = ''
  }
}

const main = () => {
  const playerOneRock = document.querySelector('.playerOneChoice .rock')

  playerOneRock.addEventListener('click', handlePlayerOneRockSelection)
}
document.addEventListener('DOMContentLoaded', main)
