class Position {
  static #LIGHT_BISHOP_POSITIONS = [1, 3, 5, 7]
  static #DARK_BISHOP_POSITIONS = [0, 2, 4, 6]
  static #KNIGHT_POSITIONS = [
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
  static #PIECE_EMOJI = {
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

  constructor (id) {
    if (id < 0 || id >= 960) throw new RangeError()

    this._id = id
    this._pieceArray = Array(8).fill(null)
    this.#placeLightSquareBishop()
    this.#placeDarkSquareBishop()
    this.#placeQueen()
    this.#placeKnights()
    this.#placeKingAndRooks()
  }

  get pieceArray () {
    return this._pieceArray
  }

  get id () {
    return this._id
  }

  static getRandomId () {
    return Math.floor(Math.random() * 1000) % 960
  }

  toEmoji (color) {
    return this._pieceArray.map((piece) => Position.#PIECE_EMOJI[color][piece])
  }

  #placeLightSquareBishop () {
    const remainder = this._id % 4
    this._pieceArray[Position.#LIGHT_BISHOP_POSITIONS[remainder]] = 'B'
  }

  #placeDarkSquareBishop () {
    const remainder = Math.floor(this._id / 4) % 4
    this._pieceArray[Position.#DARK_BISHOP_POSITIONS[remainder]] = 'B'
  }

  #placeQueen () {
    const remainder = Math.floor(Math.floor(this._id / 4) / 4) % 6
    const queenPositions = this._pieceArray.reduce((all, element, index) => {
      if (element === null) all.push(index)
      return all
    }, [])
    this._pieceArray[queenPositions[remainder]] = 'Q'
  }

  #placeKnights () {
    const quotient = Math.floor(Math.floor(Math.floor(this._id / 4) / 4) / 6)
    Position.#KNIGHT_POSITIONS[quotient].forEach((element) => {
      const emptyIndex = this._pieceArray.indexOf(null)
      this._pieceArray[emptyIndex] = element
    })
  }

  #placeKingAndRooks () {
    const leftRookIndex = this._pieceArray.indexOf('-')
    this._pieceArray[leftRookIndex] = 'R'
    const kingIndex = this._pieceArray.indexOf('-')
    this._pieceArray[kingIndex] = 'K'
    const rightRookIndex = this._pieceArray.indexOf('-')
    this._pieceArray[rightRookIndex] = 'R'
  }
}

module.exports = { Position }
