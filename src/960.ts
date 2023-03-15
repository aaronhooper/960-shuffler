type PieceColor = string

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
  static #PIECE_EMOJI: Record<string, any> = {
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

  #id
  #pieceArray

  constructor (id: number) {
    if (id < 0 || id >= 960) throw new RangeError()

    this.#id = id
    this.#pieceArray = Array(8).fill(null)
    this.#placeLightSquareBishop()
    this.#placeDarkSquareBishop()
    this.#placeQueen()
    this.#placeKnights()
    this.#placeKingAndRooks()
  }

  get pieceArray () {
    return this.#pieceArray
  }

  get id () {
    return this.#id
  }

  static getRandomId () {
    return Math.floor(Math.random() * 1000) % 960
  }

  toEmoji (color: PieceColor) {
    return this.#pieceArray.map((piece) => Position.#PIECE_EMOJI[color][piece])
  }

  #placeLightSquareBishop () {
    const remainder = this.#id % 4
    this.#pieceArray[Position.#LIGHT_BISHOP_POSITIONS[remainder]] = 'B'
  }

  #placeDarkSquareBishop () {
    const remainder = Math.floor(this.#id / 4) % 4
    this.#pieceArray[Position.#DARK_BISHOP_POSITIONS[remainder]] = 'B'
  }

  #placeQueen () {
    const remainder = Math.floor(Math.floor(this.#id / 4) / 4) % 6
    const queenPositions = this.#pieceArray.reduce((all, element, index) => {
      if (element === null) all.push(index)
      return all
    }, [])
    this.#pieceArray[queenPositions[remainder]] = 'Q'
  }

  #placeKnights () {
    const quotient = Math.floor(Math.floor(Math.floor(this.#id / 4) / 4) / 6)
    Position.#KNIGHT_POSITIONS[quotient].forEach((element) => {
      const emptyIndex = this.#pieceArray.indexOf(null)
      this.#pieceArray[emptyIndex] = element
    })
  }

  #placeKingAndRooks () {
    const leftRookIndex = this.#pieceArray.indexOf('-')
    this.#pieceArray[leftRookIndex] = 'R'
    const kingIndex = this.#pieceArray.indexOf('-')
    this.#pieceArray[kingIndex] = 'K'
    const rightRookIndex = this.#pieceArray.indexOf('-')
    this.#pieceArray[rightRookIndex] = 'R'
  }
}

export default Position
