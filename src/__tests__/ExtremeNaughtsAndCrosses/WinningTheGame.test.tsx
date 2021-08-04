import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExtremeNaughtsAndCrossesGame from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrossesGame'
import React from 'react'

test('With three Xs in a row shows a winner', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

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

test('With three Xs in different row shows a winner', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

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


test('With three Os in a row shows a winner', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

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


test('With four Os in a row shows a winner', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={4} />)

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

test('With three Xs in a column shows a winner', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-0'))

    userEvent.click(screen.getByTestId('square-8-8'))

    userEvent.click(screen.getByTestId('square-0-1'))

    userEvent.click(screen.getByTestId('square-9-9'))

    userEvent.click(screen.getByTestId('square-0-2'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()

})

test('With three Xs diagonally left-to-right, on the principal diagonal shows a winner', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-0'))
    userEvent.click(screen.getByTestId('square-3-2'))
    userEvent.click(screen.getByTestId('square-1-1'))
    userEvent.click(screen.getByTestId('square-3-4'))
    userEvent.click(screen.getByTestId('square-2-2'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})

test('With four Xs diagonally left-to-right, to the right of the principal diagonal shows a winner', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={4} />)

    userEvent.click(screen.getByTestId('square-2-2'))
    userEvent.click(screen.getByTestId('square-3-2'))
    userEvent.click(screen.getByTestId('square-3-3'))
    userEvent.click(screen.getByTestId('square-3-4'))
    userEvent.click(screen.getByTestId('square-4-4'))
    userEvent.click(screen.getByTestId('square-8-9'))
    userEvent.click(screen.getByTestId('square-5-5'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})


test('With three Xs diagonally left-to-right, to the left of the principal diagonal shows a winner ', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-1'))
    userEvent.click(screen.getByTestId('square-8-6'))
    userEvent.click(screen.getByTestId('square-1-2'))
    userEvent.click(screen.getByTestId('square-6-8'))
    userEvent.click(screen.getByTestId('square-2-3'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})

test('With three Xs diagonally right-to-left, to the left of the principal diagonal shows a winner ', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-9-0'))
    userEvent.click(screen.getByTestId('square-8-6'))
    userEvent.click(screen.getByTestId('square-8-1'))
    userEvent.click(screen.getByTestId('square-6-8'))
    userEvent.click(screen.getByTestId('square-7-2'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})

test('With three Xs diagonally right-to-left on the principal diagonal shows a winner ', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-7-2'))
    expect(screen.queryByText(/X Wins/i)).not.toBeInTheDocument()
    userEvent.click(screen.getByTestId('square-8-6'))
    userEvent.click(screen.getByTestId('square-8-1'))
    userEvent.click(screen.getByTestId('square-6-8'))
    userEvent.click(screen.getByTestId('square-9-0'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})

test('With three Xs diagonally right-to-left, to the left of the principal diagonal shows a winner ', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-6-3'))
    userEvent.click(screen.getByTestId('square-8-6'))
    userEvent.click(screen.getByTestId('square-5-4'))
    userEvent.click(screen.getByTestId('square-6-8'))
    userEvent.click(screen.getByTestId('square-4-5'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})

test('With three Xs diagonally right-to-left, to the right of the principal diagonal shows a winner ', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-9-2'))
    userEvent.click(screen.getByTestId('square-8-6'))
    userEvent.click(screen.getByTestId('square-8-3'))
    userEvent.click(screen.getByTestId('square-6-8'))
    userEvent.click(screen.getByTestId('square-7-4'))

    expect(screen.getByText(/X Wins/i)).toBeInTheDocument()
})


test('Should only display when three of the SAME piece is detected in a row, rather than two consecutive pairs of different pieces ', () => {
    render(<ExtremeNaughtsAndCrossesGame gridSize={4} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />)

    userEvent.click(screen.getByTestId('square-0-0'))
    userEvent.click(screen.getByTestId('square-0-2'))

    userEvent.click(screen.getByTestId('square-0-1'))
    userEvent.click(screen.getByTestId('square-0-3'))

    // X X O O should not show a winner!

    expect(screen.queryByText(/O Wins/i)).not.toBeInTheDocument()
})
