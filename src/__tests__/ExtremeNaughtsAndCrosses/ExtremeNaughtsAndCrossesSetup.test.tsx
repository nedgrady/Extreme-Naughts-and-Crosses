import { render, screen } from '@testing-library/react'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'
import React from 'react'
import userEvent from '@testing-library/user-event'
test('Starts with a default grid size of 10', () => {
    render(<ExtremeNaughtsAndCrosses />)

    expect(screen.getAllByRole('cell', { name: ""})).toHaveLength(100)
})

test('Renders a Grid Size numerical input, containing a default of 10', () => {
    render(<ExtremeNaughtsAndCrosses />)

    expect(screen.getByRole('spinbutton', { name: "Grid Size"})).toBeInTheDocument()
})


test('Renders a "Reset" button', () => {
    render(<ExtremeNaughtsAndCrosses />)

    expect(screen.getByRole('button', { name: "Reset"})).toBeInTheDocument()
})

const gridSizeCases = [3, 5, 10, 14]
test.each(gridSizeCases)('Entering a Grid Size of %s then clicking "Reset" displays a grid of size %s', (inputGridSize) => {
    render(<ExtremeNaughtsAndCrosses />)

    const gridSizeInput = screen.getByRole('spinbutton', { name: "Grid Size"})
    userEvent.clear(gridSizeInput)
    userEvent.type(gridSizeInput, inputGridSize.toString())

    const resetButton = screen.getByRole('button', { name: "Reset"})
    userEvent.click(resetButton)

    expect(screen.getAllByRole('cell', { name: ""})).toHaveLength(inputGridSize * inputGridSize)
})

test('Renders a "Reset" button', () => {
    render(<ExtremeNaughtsAndCrosses />)

    expect(screen.getByRole('button', { name: "Reset"})).toBeInTheDocument()
})

test('Renders a numerical input for the number of consecutive pieces to win', () => {
    render(<ExtremeNaughtsAndCrosses />)

    expect(screen.getByRole('spinbutton', { name: "Winning Number in a Row"})).toBeInTheDocument()
})

test('Entering a number of consective pieces to win changes then clicking refresh changes the number of pieces to win display', () => {
    render(<ExtremeNaughtsAndCrosses />)

    const targetNumberInput = screen.getByRole('spinbutton', { name: "Winning Number in a Row"})
    userEvent.clear(targetNumberInput)
    userEvent.type(targetNumberInput, "2")

    const resetButton = screen.getByRole('button', { name: "Reset"})
    userEvent.click(resetButton)

    expect(screen.getByText(/2 in a row to win/i, { exact: false })).toBeInTheDocument()

})