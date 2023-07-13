import { render, screen, fireEvent, act, waitFor } from '@testing-library/react'
import axios from 'axios'
import Home from '@/app/home/page'
import Landing from '@/app/page'
import React from 'react'


jest.mock('axios')

const port = process.env.PORT || 8080;
export const API = `http://localhost:${port}`

describe('Landing', () => {
	jest.mock(
		'next/link',
		() =>
			({ children, ...rest }: { children: React.ReactElement }) =>
				React.cloneElement(children, { ...rest }),
	);
	
  it('renders component properly', () => {
    render(<Landing />)

    const main = screen.getByRole('main')
		const greeting = screen.getByText(/Lord vader/i)
		const button = screen.getByRole('button')

    expect(main).toBeInTheDocument()
		expect(greeting).toBeInTheDocument()
		expect(button).toBeInTheDocument()
  })
	xit('navigates properly to Home on button click', async () => {
    render(<Landing />)

		const button = screen.getByText(/Execute order/i)
		expect(button).toBeInTheDocument()
		fireEvent.click(button)

  }, 10000)
})

describe('Home', () => {
  it('renders components properly', () => {
    render(<Home />)

		const radioButtons = screen.getAllByRole('radio')
		expect(radioButtons).toHaveLength(6)
	})
	xit('renders detailed data upon click', async () => {
    render(<Home />)

		const planetRadio = screen.getByTestId(/planets/i)
		expect(planetRadio).toBeInTheDocument()
		// await act(async () => {
		// });
		fireEvent.click(planetRadio)
		const submit = screen.getByRole('button')
		fireEvent.click(submit)
		// planetRadio.click()

		
		screen.debug()
		const div = await screen.findByAltText(/Loading.../i)
		// expect(div).toBeInTheDocument()
		
    await waitFor(() => {
      // expect(todoList).toHaveTextContent("New Todo");
    });

		

  })
})