import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'
import React from 'react'

test('Renders a Grid Size numerical input', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3}/>)

    expect(screen.getByRole('spinbutton', { name: "Grid Size"})).toBeInTheDocument()
})

test('Renders a "Reset" button', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3}/>)

    expect(screen.getByRole('button', { name: "Reset"})).toBeInTheDocument()
})

const gridSizeCases = [5, 10, 14]
test.each(gridSizeCases)('Entering a Grid Size of %s then clicking "Reset" displays a grid of size %s', (inputGridSize) => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3}/>)

    const gridSizeInput = screen.getByRole('spinbutton', { name: "Grid Size"})
    userEvent.type(gridSizeInput, inputGridSize.toString())

    const resetButton = screen.getByRole('button', { name: "Reset"})
    userEvent.click(resetButton)

    expect(screen.getAllByRole('cell', { name: ""})).toHaveLength(inputGridSize * inputGridSize)
})
