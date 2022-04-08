import Position from './960.js'

const preElement = document.getElementById('output')
const buttonElement = document.getElementById('button')
const positionIdElement = document.getElementById('position-id')

function refreshView () {
  const position = new Position(Position.getRandomId())
  preElement.innerHTML = position.toEmoji('black').join('') + '\n' + position.toEmoji('white').join('')
  positionIdElement.innerHTML = position.id
}

document.addEventListener('DOMContentLoaded', () => refreshView())
buttonElement.addEventListener('click', () => refreshView())
