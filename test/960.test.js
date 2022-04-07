const { expect } = require('chai')
const { Position } = require('../src/960')

describe('Position', () => {
  it('throws a RangeError on inputs larger than 959 or smaller than 0', () => {
    expect(() => new Position(960)).to.throw(RangeError)
    expect(() => new Position(-1)).to.throw(RangeError)
  })
  it('has the correct position', () => {
    expect(new Position(0).getPieceArray()).to.eql(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R'])
    expect(new Position(518).getPieceArray()).to.eql(['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'])
    expect(new Position(959).getPieceArray()).to.eql(['R', 'K', 'R', 'N', 'N', 'Q', 'B', 'B'])
  })
})
