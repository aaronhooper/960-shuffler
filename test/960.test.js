const expect = require('chai').expect
const getPosition = require('../src/960.js').getPosition

describe('getPosition()', () => {
    it('throws a RangeError on inputs larger than 959 or smaller than 0', () => {
        expect(() => getPosition(960)).to.throw(RangeError)
        expect(() => getPosition(-1)).to.throw(RangeError)
    })
    it('returns the correct position', () => {
        expect(getPosition(0)).to.eql(['B', 'B', 'Q', 'N', 'N', 'R', 'K', 'R'])
        expect(getPosition(518)).to.eql(['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'])
        expect(getPosition(959)).to.eql(['R', 'K', 'R', 'N', 'N', 'Q', 'B', 'B'])
    })
})