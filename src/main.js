import Position from './960.js'

const whitePreElement = document.getElementById('white-pieces')
const blackPreElement = document.getElementById('black-pieces')
const buttonElement = document.getElementById('button')
const positionIdElement = document.getElementById('position-id')

function refreshView () {
  const position = new Position(Position.getRandomId())
  blackPreElement.innerHTML = position.toEmoji('black').join('')
  whitePreElement.innerHTML = position.toEmoji('white').join('')
  positionIdElement.innerHTML = position.id
}

document.addEventListener('DOMContentLoaded', () => refreshView())
buttonElement.addEventListener('click', () => refreshView())
