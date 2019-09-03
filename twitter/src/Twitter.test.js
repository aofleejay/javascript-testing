import React from 'react'
import { shallow, mount } from 'enzyme'
import Twitter from './Twitter'

it('Contain twitter board.', () => {
  const wrapper = shallow(<Twitter />)

  expect(wrapper.find('#twitter-board')).toHaveLength(1)
})

it('Render a tweet after simulate submit tweet event.', () => {
  const event = { target: { value: 'Hello' } }
  const wrapper = mount(<Twitter />)

  wrapper.find('#tweet-text').simulate('change', event)
  wrapper.find('#tweet-button').simulate('submit')

  expect(wrapper.find('.tweet-item')).toHaveLength(1)
  expect(wrapper.find('#tweet-text').props().value).toEqual('')
})
