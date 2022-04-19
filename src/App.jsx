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
      <Square piece={props.blackPieces[0]} />
      <Square piece={props.blackPieces[1]} />
      <Square piece={props.blackPieces[2]} />
      <Square piece={props.blackPieces[3]} />
      <Square piece={props.blackPieces[4]} />
      <Square piece={props.blackPieces[5]} />
      <Square piece={props.blackPieces[6]} />
      <Square piece={props.blackPieces[7]} />
    </div>
    <div id="white-row">
      <Square piece={props.whitePieces[0]} />
      <Square piece={props.whitePieces[1]} />
      <Square piece={props.whitePieces[2]} />
      <Square piece={props.whitePieces[3]} />
      <Square piece={props.whitePieces[4]} />
      <Square piece={props.whitePieces[5]} />
      <Square piece={props.whitePieces[6]} />
      <Square piece={props.whitePieces[7]} />
    </div>
  </div>
}

function Square(props) {
  return <div className='board-square'>
    {props.piece}
  </div>
}

export default App