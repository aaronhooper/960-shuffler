const LIGHT_BISHOP_POSITIONS = [1, 3, 5, 7]
const DARK_BISHOP_POSITIONS = [0, 2, 4, 6]

const KNIGHT_POSITIONS = [
  ['N', 'N', '-', '-', '-'],
  ['N', '-', 'N', '-', '-'],
  ['N', '-', '-', 'N', '-'],
  ['N', '-', '-', '-', 'N'],
  ['-', 'N', 'N', '-', '-'],
  ['-', 'N', '-', 'N', '-'],
  ['-', 'N', '-', '-', 'N'],
  ['-', '-', 'N', 'N', '-'],
  ['-', '-', 'N', '-', 'N'],
  ['-', '-', '-', 'N', 'N']
]

const PIECE_EMOJI = {
  black: {
    K: '♚',
    Q: '♛',
    B: '♝',
    N: '♞',
    R: '♜'
  },
  white: {
    K: '♔',
    Q: '♕',
    B: '♗',
    N: '♘',
    R: '♖'
  }
}

class Position {
  constructor (id) {
    if (id < 0 || id >= 960) throw new RangeError()

    this._id = id
    this._pieceArray = Array(8).fill(null)
    placeLightSquareBishop.call(this)
    placeDarkSquareBishop.call(this)
    placeQueen.call(this)
    placeKnights.call(this)
    placeKingAndRooks.call(this)
  }

  getPieceArray () {
    return this._pieceArray
  }

  getId () {
    return this._id
  }

  getEmoji (color) {
    return this._pieceArray.map((piece) => PIECE_EMOJI[color][piece])
  }
}

function getRandomId () {
  return Math.floor(Math.random() * 1000) % 960
}

function placeLightSquareBishop () {
  const remainder = this._id % 4
  this._pieceArray[LIGHT_BISHOP_POSITIONS[remainder]] = 'B'
}

function placeDarkSquareBishop () {
  const remainder = Math.floor(this._id / 4) % 4
  this._pieceArray[DARK_BISHOP_POSITIONS[remainder]] = 'B'
}

function placeQueen () {
  const remainder = Math.floor(Math.floor(this._id / 4) / 4) % 6
  const queenPositions = this._pieceArray.reduce((all, element, index) => {
    if (element === null) all.push(index)
    return all
  }, [])
  this._pieceArray[queenPositions[remainder]] = 'Q'
}

function placeKnights () {
  const quotient = Math.floor(Math.floor(Math.floor(this._id / 4) / 4) / 6)
  KNIGHT_POSITIONS[quotient].forEach((element) => {
    const emptyIndex = this._pieceArray.indexOf(null)
    this._pieceArray[emptyIndex] = element
  })
}

function placeKingAndRooks () {
  const leftRookIndex = this._pieceArray.indexOf('-')
  this._pieceArray[leftRookIndex] = 'R'
  const kingIndex = this._pieceArray.indexOf('-')
  this._pieceArray[kingIndex] = 'K'
  const rightRookIndex = this._pieceArray.indexOf('-')
  this._pieceArray[rightRookIndex] = 'R'
}

module.exports = { Position }
