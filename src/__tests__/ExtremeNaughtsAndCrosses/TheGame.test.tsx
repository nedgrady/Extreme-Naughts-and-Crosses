import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'
import React from 'react'

test('Starts With The Correct Number of Empty Squares', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}/>)

    expect(screen.getAllByRole('cell', { name: "?"})).toHaveLength(100)
})

test('Displays The Correct Initial Player To Move', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    expect(screen.getByText('X To Move')).toBeInTheDocument()
})

test('Making a Move Displays The Next Player To Move', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(screen.getByText('O To Move')).toBeInTheDocument()
})

test('Displays A Piece In The Correct Square After A Move', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")
})

test('Displays A Piece In The Correct Square After Two Moves', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")

    const someSquareInWhichToMakeASecondMove = screen.getByTestId('square-1-1')
    userEvent.click(someSquareInWhichToMakeASecondMove)

    expect(someSquareInWhichToMakeASecondMove).toHaveTextContent("O")
})

test('Displays A Piece In The Correct Square After Three Moves', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")

    const someSquareInWhichToMakeASecondMove = screen.getByTestId('square-1-1')
    userEvent.click(someSquareInWhichToMakeASecondMove)

    expect(someSquareInWhichToMakeASecondMove).toHaveTextContent("O")

    const someSquareInWhichToMakeAThirdMove = screen.getByTestId('square-5-2')
    userEvent.click(someSquareInWhichToMakeAThirdMove)

    expect(someSquareInWhichToMakeAThirdMove).toHaveTextContent("X")
})

test('All Squares Start Empty', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    const allSquares = screen.getAllByTestId(/square-\d*-\d*/)

    allSquares.forEach(square => {
        expect(square).toHaveTextContent("?")
    })
})

test('Squares Other Than Those Clicked Stay Empty', async () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    const allSquares = screen.getAllByTestId(/square-\d*-\d*/)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")

    // const someSquareInWhichToMakeASecondMove = screen.getByTestId('square-1-1')
    // userEvent.click(someSquareInWhichToMakeASecondMove)

    let squaresThatShouldBeEmpty = await screen.findAllByTestId(/square\-\d\-\d/)

    const squaresThatWereNotClicked = ((square : HTMLElement) => square !== someSquareInWhichToMakeAMove)

    squaresThatShouldBeEmpty = squaresThatShouldBeEmpty.filter(squaresThatWereNotClicked)

    squaresThatShouldBeEmpty.forEach((square) => {
        expect(square).toHaveTextContent("?")
    })
})

test('Making Two Move Displays The Next Player To Move After Each Move', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(screen.getByText('O To Move')).toBeInTheDocument()

    const someSquareInWhichToMakeASecondMove = screen.getByTestId('square-1-1')
    userEvent.click(someSquareInWhichToMakeASecondMove)

    expect(screen.getByText('X To Move')).toBeInTheDocument()
})

test("Making a move on a taken square doesn't overwrite the existing piece", () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} />)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-8-9')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")

    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")
})