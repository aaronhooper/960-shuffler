import { expect } from 'chai'
import Position from '../src/960'

context('Position', () => {
  describe('constructor()', () => {
    it('throws a RangeError on inputs larger than 959 or smaller than 0', () => {
      expect(() => new Position(960)).to.throw(RangeError)
      expect(() => new Position(-1)).to.throw(RangeError)
    })
  })
  describe('pieceArray', () => {
    it('returns the correct position', () => {
      expect(new Position(0).pieceArray).to.eql(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R'])
      expect(new Position(518).pieceArray).to.eql(['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'])
      expect(new Position(959).pieceArray).to.eql(['R', 'K', 'R', 'N', 'N', 'Q', 'B', 'B'])
    })
  })
})
