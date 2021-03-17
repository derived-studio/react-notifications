import { isNumber } from './guards'

describe('Guards', () => {
  describe('is number guard', () => {
    it('returns true for numbers', () => {
      const numbers = [0, -10, 0.1, 1000, 1e3, -1e3]
      numbers.forEach((val) => {
        expect(isNumber(val)).toBeTruthy()
      })
    })

    it('returns false for non numbers', () => {
      const nonNumbers = [{}, '', '123', '123.2', '1e3', 'foo-bar', [], undefined, null]
      nonNumbers.forEach((val) => {
        expect(isNumber(val)).toBeFalsy()
      })
    })
  })
})
