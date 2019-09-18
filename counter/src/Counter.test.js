import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Counter from './Counter'

it('Initial counter should equal "0"', () => {
  const { getByTestId } = render(<Counter />)

  expect(getByTestId('counter')).toHaveTextContent('0')
})

it('Increment 2 time and decrement 1 time then counter should equal 1', () => {
  const { getByText, getByTestId } = render(<Counter />)

  const increment = getByText('+')
  const decrement = getByText('-')

  fireEvent.click(increment)
  fireEvent.click(increment)
  fireEvent.click(decrement)

  expect(getByTestId('counter')).toHaveTextContent('1')
})
