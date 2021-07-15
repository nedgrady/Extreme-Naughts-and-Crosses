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

test('sets the test ids of each square', () => {
    const boardState = [
        ["00", "10", "20"],
        ["01", "11", "21"],
        ["02", "12", "22"]
    ]

    render(<Board boardState={boardState} onPiecePlaced={jest.fn()}/>)

    expect(screen.getByTestId("square-0-0")).toHaveTextContent("00")
    expect(screen.getByTestId("square-0-1")).toHaveTextContent("01")
    expect(screen.getByTestId("square-0-2")).toHaveTextContent("02")
    expect(screen.getByTestId("square-1-0")).toHaveTextContent("10")
    expect(screen.getByTestId("square-1-1")).toHaveTextContent("11")
    expect(screen.getByTestId("square-1-2")).toHaveTextContent("12")
    expect(screen.getByTestId("square-2-0")).toHaveTextContent("20")
    expect(screen.getByTestId("square-2-1")).toHaveTextContent("21")
    expect(screen.getByTestId("square-2-2")).toHaveTextContent("22")

})
