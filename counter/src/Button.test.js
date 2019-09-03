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
    </Button>,
  )

  wrapper.find('#click-me').simulate('click')
  expect(spyOnClick).toHaveBeenCalledTimes(1)
})

it('Render button with correct text and id.', () => {
  const wrapper = shallow(<Button id="click-gu">Click Gu</Button>)

  expect(wrapper).toMatchInlineSnapshot(`
    <button
      id="click-gu"
    >
      Click Gu
    </button>
  `)
})
