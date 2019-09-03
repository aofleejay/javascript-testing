import { add, sub, mul, div } from '../src/calculator'

describe('Test calculator.', () => {
  describe('Test add function.', () => {
    it('1 + 1 should equal to 2.', () => {
      const firstInput = 1
      const secondInput = 1
      const expected = 2

      const actual = add(firstInput, secondInput)

      expect(actual).toEqual(expected)
    })
  })

  describe('Test sub function.', () => {
    it('1 - 1 should equal to 0.', () => {
      const firstInput = 1
      const secondInput = 1
      const expected = 0

      const actual = sub(firstInput, secondInput)

      expect(actual).toEqual(expected)
    })
  })

  describe('Test mul function.', () => {
    it('3 * 2 should equal to 6.', () => {
      const firstInput = 3
      const secondInput = 2
      const expected = 6

      const actual = mul(firstInput, secondInput)

      expect(actual).toEqual(expected)
    })
  })

  describe('Test div function.', () => {
    it('3 / 2 should equal to 1.5.', () => {
      const firstInput = 3
      const secondInput = 2
      const expected = 1.5

      const actual = div(firstInput, secondInput)

      expect(actual).toEqual(expected)
    })

    it('3 / 0 should equal to Infinity.', () => {
      const firstInput = 3
      const secondInput = 0
      const expected = Infinity

      const actual = div(firstInput, secondInput)

      expect(actual).toEqual(expected)
    })
  })
})
