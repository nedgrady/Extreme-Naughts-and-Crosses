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


test('Three Os in a row shows a winner', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-0'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-5-5'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-2-0'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-6-5'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-7-9'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-7-5'))

    expect(screen.getByText(/O Wins/i)).toBeInTheDocument()
})


test('Four Os in a row shows a winner', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={4} />)

    userEvent.click(screen.getByTestId('square-0-0'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-5-5'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-2-0'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-6-5'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-7-9'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-7-5'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-1-1'))
    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-8-5'))

    expect(screen.getByText(/O Wins/i)).toBeInTheDocument()
})

test('Three Xs in a column shows a winner', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-0'))

    userEvent.click(screen.getByTestId('square-8-8'))

    userEvent.click(screen.getByTestId('square-0-1'))

    userEvent.click(screen.getByTestId('square-9-9'))

    userEvent.click(screen.getByTestId('square-0-2'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()

})

test('Three Xs diagonally left-to-right, on the principal diagonal shows a winner', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-0'))
    userEvent.click(screen.getByTestId('square-3-2'))
    userEvent.click(screen.getByTestId('square-1-1'))
    userEvent.click(screen.getByTestId('square-3-4'))
    userEvent.click(screen.getByTestId('square-2-2'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})

test('Four Xs diagonally left-to-right, to the right of the principal diagonal shows a winner', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={4} />)

    userEvent.click(screen.getByTestId('square-2-2'))
    userEvent.click(screen.getByTestId('square-3-2'))
    userEvent.click(screen.getByTestId('square-3-3'))
    userEvent.click(screen.getByTestId('square-3-4'))
    userEvent.click(screen.getByTestId('square-4-4'))
    userEvent.click(screen.getByTestId('square-8-9'))
    userEvent.click(screen.getByTestId('square-5-5'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})


test('Three Xs diagonally left-to-right, to the left of the principal diagonal shows a winner ', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-1'))
    userEvent.click(screen.getByTestId('square-8-6'))
    userEvent.click(screen.getByTestId('square-1-2'))
    userEvent.click(screen.getByTestId('square-6-8'))
    userEvent.click(screen.getByTestId('square-2-3'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})

// test('Three Xs diagonally right-to-left, to the left of the principal diagonal shows a winner ', () => {
//     render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

//     userEvent.click(screen.getByTestId('square-9-0'))
//     userEvent.click(screen.getByTestId('square-8-6'))
//     userEvent.click(screen.getByTestId('square-8-1'))
//     userEvent.click(screen.getByTestId('square-6-8'))
//     userEvent.click(screen.getByTestId('square-7-2'))

//     expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
// })