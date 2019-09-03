const { add, sub } = require('./calculator')

describe('Test calculator module', () => {
  describe('Test add function.', () => {
    it('1 + 1 should equal to 2.', () => {
      expect(add(1, 1)).toBe(2)
    })

    it('1 + 2 should equal to 3.', () => {
      expect(add(1, 2)).toBe(3)
    })
  })

  describe('Test sub function.', () => {
    it('1 - 1 should equal to 0.', () => {
      expect(sub(1, 1)).toBe(0)
    })

    it('2 - 1 should equal to 0.', () => {
      expect(sub(2, 1)).toBe(1)
    })
  })
})
