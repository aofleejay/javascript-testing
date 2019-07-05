# Counter.

## Quick start.

### Install dependencies.

```
$ yarn
```

### Run test.

```
$ yarn test
```

### Run development.

```
$ yarn start
```

## Guideline

```javascript
//Button.test.js
import React from 'react'
import { shallow } from 'enzyme'
import Button from './Button'

it('Render correct children.', () => {
  const wrapper = shallow(<Button id="click-me">Click Me</Button>)

  expect(wrapper.find('#click-me').text()).toEqual('Click Me')
})

it('Should call prop onClick once when click button.', () => {
  const spyOnClick = jest.fn()
  const wrapper = shallow(
    <Button id="click-me" onClick={spyOnClick}>
      Click Me
    </Button>
  )

  wrapper.find('#click-me').simulate('click')
  expect(spyOnClick).toHaveBeenCalledTimes(1)
})
```

```javascript
//Counter.test.js
import React from 'react'
import { shallow } from 'enzyme'
import Counter from './Counter'

it('Initial counter should equal "0"', () => {
  const wrapper = shallow(<Counter />)

  expect(wrapper.find('#counter').text()).toEqual('0')
})

it('Increment 2 time and decrement 1 time then counter should equal 1', () => {
  const wrapper = shallow(<Counter />)

  wrapper.find('#increment').simulate('click')
  wrapper.find('#increment').simulate('click')
  wrapper.find('#decrement').simulate('click')

  expect(wrapper.find('#counter').text()).toEqual('1')
})
```
