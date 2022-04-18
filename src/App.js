import { useState, createElement } from 'react'
import Position from './960'
const e = createElement

function App() {
  const position = new Position(518)
  const [blackPieces, setBlackPieces] = useState(position.toEmoji('black'))
  const [whitePieces, setWhitePieces] = useState(position.toEmoji('white'))
  const [positionId, setPositionId] = useState(position.id)

  function handleGenerate() {
    const position = new Position(Position.getRandomId())
    setBlackPieces(position.toEmoji('black'))
    setWhitePieces(position.toEmoji('white'))
    setPositionId(position.id)
  }

  return e(
    'div',
    null,
    e(
      'h1',
      null,
      'Fischer Random / 960 Piece Shuffler'
    ),
    e(
      Board,
      {
        'blackPieces': blackPieces,
        'whitePieces': whitePieces,
        'positionId': positionId
      },
      null
    ),
    e(
      'div',
      { id: 'footing' },
      e(
        'a',
        {
          id: 'button',
          href: '#',
          onClick: handleGenerate
        },
        `Generate`
      ),
      `Position ID:`,
      e(
        'span',
        null,
        positionId
      )
    )
  )
}

function Board(props) {
  return e(
    'div',
    { id: 'board' },
    e(
      'div',
      { id: 'black-row' },
      e(Square, { piece: props.blackPieces[0] }, null),
      e(Square, { piece: props.blackPieces[1] }, null),
      e(Square, { piece: props.blackPieces[2] }, null),
      e(Square, { piece: props.blackPieces[3] }, null),
      e(Square, { piece: props.blackPieces[4] }, null),
      e(Square, { piece: props.blackPieces[5] }, null),
      e(Square, { piece: props.blackPieces[6] }, null),
      e(Square, { piece: props.blackPieces[7] }, null),
    ),
    e(
      'div',
      { id: 'white-row' },
      e(Square, { piece: props.whitePieces[0] }, null),
      e(Square, { piece: props.whitePieces[1] }, null),
      e(Square, { piece: props.whitePieces[2] }, null),
      e(Square, { piece: props.whitePieces[3] }, null),
      e(Square, { piece: props.whitePieces[4] }, null),
      e(Square, { piece: props.whitePieces[5] }, null),
      e(Square, { piece: props.whitePieces[6] }, null),
      e(Square, { piece: props.whitePieces[7] }, null),
    )
  )
}

function Square(props) {
  return e(
    'div',
    { className: 'board-square' },
    props.piece
  )
}

export default App