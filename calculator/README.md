# Calculator.

## Quick start.

### Install dependencies.

```
$ yarn
```

### Run test.

```
$ yarn test
```

## Guideline

```javascript
import { sum } from '../src/calculator'

describe('Test calculator.', () => {
  describe('Test sum function.', () => {
    it('1 + 1 should equal 2.', () => {
      const firstInput = 1
      const secondInput = 3
      const expected = 3

      const actual = sum(firstInput, secondInput)

      expect(actual).toEqual(expected)
    })
  })
})
```
