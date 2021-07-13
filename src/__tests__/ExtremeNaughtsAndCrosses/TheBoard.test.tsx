import { render, screen } from '@testing-library/react'
import Board from 'ExtremeNaughtsAndCrosses/Board'
import React from 'react'

test('displays the specified board state', () => {
    const boardState = [
        ["X", "O", "X"],
        ["X", "O", "X"],
        ["X", "*", "X"]
    ]

    render(<Board boardState={boardState} onPiecePlaced={jest.fn()}/>)

    expect(screen.getAllByText("X")).toHaveLength(6)
    expect(screen.getAllByText("O")).toHaveLength(2)
    expect(screen.getAllByText("*")).toHaveLength(1)
})
