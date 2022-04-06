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
    'K': '♚',
    'Q': '♛',
    'B': '♝',
    'N': '♞',
    'R': '♜'
}

function getPosition(N) {
    if (N < 0 || N >= 960) throw new RangeError()

    const position = Array(8).fill(null)

    // place light square bishop
    const N2 = Math.floor(N / 4)
    const B1 = N % 4
    position[LIGHT_BISHOP_POSITIONS[B1]] = 'B'
    
    // place dark square bishop
    const N3 = Math.floor(N2 / 4)
    const B2 = N2 % 4
    position[DARK_BISHOP_POSITIONS[B2]] = 'B'

    // place queen
    const N4 = Math.floor(N3 / 6)
    const Q = N3 % 6
    const queenPositions = position.reduce((all, element, index) => {
        if (element === null) all.push(index)
        return all
    }, [])
    position[queenPositions[Q]] = 'Q'

    // place knights
    KNIGHT_POSITIONS[N4].forEach((element) => {
        const emptyIndex = position.indexOf(null)
        position[emptyIndex] = element
    })
    
    // place king between 2 rooks on remaining squares
    const leftRookIndex = position.indexOf('-')
    position[leftRookIndex] = 'R'
    const kingIndex = position.indexOf('-')
    position[kingIndex] = 'K'
    const rightRookIndex = position.indexOf('-')
    position[rightRookIndex] = 'R'

    return position
}

getRandomId = () => Math.floor(Math.random() * 1000) % 960

function toEmoji(pieceArray) {
    return pieceArray.map((piece) => PIECE_EMOJI[piece])
}

module.exports = { getPosition, getRandomId, toEmoji }
