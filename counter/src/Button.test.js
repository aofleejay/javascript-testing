import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

it('Render correct children.', () => {
  const { container } = render(<Button>Click Me</Button>)

  expect(container).toHaveTextContent('Click Me')
})

it('Should call prop onClick once when click button.', () => {
  const spyOnClick = jest.fn()
  const { getByText } = render(
    <Button id="click-me" onClick={spyOnClick}>
      Click Me
    </Button>,
  )

  const button = getByText(/click me/i)
  fireEvent.click(button)

  expect(spyOnClick).toHaveBeenCalledTimes(1)
})

it('Render button with correct text and id.', () => {
  const { container } = render(<Button id="click-me">Click Me</Button>)

  expect(container.firstChild).toMatchInlineSnapshot(`
    <button
      id="click-me"
    >
      Click Me
    </button>
  `)
})
