import { isNumber } from './guards'

describe('Guards', () => {
  describe('is number guard', () => {
    it.each([0, -10, 0.1, 1000, 1e3, -1e3])('is truthy for %s', (val) => {
      expect(isNumber(val)).toBeTruthy()
    })

    it.each([{}, '', '123', '123.2', '1e3', 'foo-bar', [], undefined, null])('is falsy for %s', (val) => {
      expect(isNumber(val)).toBeFalsy()
    })
  })
})
