import Position from './960.js'

const buttonElement = document.getElementById('button')
const positionIdElement = document.getElementById('position-id')

function clearContents (element) {
  element.innerHTML = ''
}

function refreshView () {
  const position = new Position(Position.getRandomId())
  const blackEmoji = position.toEmoji('black')
  const whiteEmoji = position.toEmoji('white')

  blackEmoji.forEach((piece, index) => {
    const square = document.querySelector(`#black-row > .board-square:nth-child(${index + 1})`)
    clearContents(square)
    const pieceTextNode = document.createTextNode(piece)
    square.append(pieceTextNode)
  })

  whiteEmoji.forEach((piece, index) => {
    const square = document.querySelector(`#white-row > .board-square:nth-child(${index + 1})`)
    clearContents(square)
    const pieceTextNode = document.createTextNode(piece)
    square.append(pieceTextNode)
  })

  positionIdElement.innerHTML = position.id
}

document.addEventListener('DOMContentLoaded', () => refreshView())
buttonElement.addEventListener('click', () => refreshView())
