import React, { useState } from 'react'
import Position from './960'

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

  return <>
    <h1>Fischer Random / 960 Piece Shuffler</h1>
    <Board blackPieces={blackPieces} whitePieces={whitePieces} positionId={positionId} />
    <div id="footing">
      <a id="button" href="#" onClick={handleGenerate}>Generate</a>
      Position ID: <span>{positionId}</span>
    </div>
  </>
}

function Board(props) {
  return <div id='board'>
    <div id="black-row">
      {props.blackPieces.map((piece) => <Square piece={piece} />)}
    </div>
    <div id="white-row">
      {props.whitePieces.map((piece) => <Square piece={piece} />)}
    </div>
  </div>
}

function Square(props) {
  return <div className='board-square'>
    {props.piece}
  </div>
}

export default App