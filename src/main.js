const preElement = document.getElementById('output')
const buttonElement = document.getElementById('button')
const positionIdElement = document.getElementById('position-id')

function refreshView () {
  const position = new Position(getRandomId())
  preElement.innerHTML = position.getEmoji().join('')
  positionIdElement.innerHTML = position.getId()
}

document.addEventListener('DOMContentLoaded', () => refreshView())
buttonElement.addEventListener('click', () => refreshView())
