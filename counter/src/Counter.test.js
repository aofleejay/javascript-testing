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
