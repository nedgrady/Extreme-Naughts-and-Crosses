import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'
import React from 'react'

test('Three Xs a row shows a winner', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-0'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-8-8'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-1-0'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-3-3'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-2-0'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})

test('Three Xs in different row shows a winner', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-5-5'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByTestId('square-2-0'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByTestId('square-6-5'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByTestId('square-7-9'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()

    userEvent.click(screen.getByTestId('square-7-5'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})
