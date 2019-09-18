import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Twitter from './Twitter'

it('Contain twitter board.', () => {
  const { getByTestId } = render(<Twitter />)

  expect(getByTestId('twitter-board')).toBeVisible()
})

it('Render a tweet after simulate submit tweet event.', () => {
  const event = { target: { value: 'Hello' } }
  const { getByTestId, getByText } = render(<Twitter />)

  const tweetTextInput = getByTestId('tweet-text')
  fireEvent.change(tweetTextInput, event)
  const tweetButton = getByTestId('tweet-button')
  fireEvent.click(tweetButton)

  expect(getByText('Hello')).toBeVisible()
  expect(tweetTextInput).toHaveTextContent('')
})
