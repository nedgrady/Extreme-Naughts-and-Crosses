import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'
import React from 'react'

test('Starts With The Correct Number of Empty Squares', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3}/>)

    expect(screen.getAllByRole('cell', { name: ""})).toHaveLength(100)
})


const playersTestCases = [[
    ["❌", "⭕"],
    ["X", "O"],
    ["O", "X"]
]]

test.each(playersTestCases)('Displays The Correct Initial Player To Move', (players) => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={players}  numberOfPiecesInARowRequiredToWin={3}/>)

    expect(screen.getByText(`${players[0]} To Move`)).toBeInTheDocument()
})

test.each(playersTestCases)('Making a Move Displays The Next Player To Move', (players) => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={players}  numberOfPiecesInARowRequiredToWin={3}/>)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(screen.getByText(`${players[1]} To Move`)).toBeInTheDocument()
})

test('Displays A Piece In The Correct Square After A Move', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}  numberOfPiecesInARowRequiredToWin={3}/>)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")
})

test('Displays A Piece In The Correct Square After Two Moves', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}  numberOfPiecesInARowRequiredToWin={3}/>)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")

    const someSquareInWhichToMakeASecondMove = screen.getByTestId('square-1-1')
    userEvent.click(someSquareInWhichToMakeASecondMove)

    expect(someSquareInWhichToMakeASecondMove).toHaveTextContent("O")
})

test('Displays A Piece In The Correct Square After Three Moves', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}  numberOfPiecesInARowRequiredToWin={3}/>)

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
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}  numberOfPiecesInARowRequiredToWin={3}/>)

    const allSquares = screen.getAllByTestId(/square-\d*-\d*/)

    allSquares.forEach(square => {
        expect(square).toBeEmptyDOMElement()
    })
})

test('Squares Other Than Those Clicked Stay Empty', async () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}  numberOfPiecesInARowRequiredToWin={3}/>)

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
        expect(square).toBeEmptyDOMElement()
    })
})

test('Making Two Move Displays The Next Player To Move After Each Move', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}  numberOfPiecesInARowRequiredToWin={3}/>)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-0-0')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(screen.getByText('O To Move')).toBeInTheDocument()

    const someSquareInWhichToMakeASecondMove = screen.getByTestId('square-1-1')
    userEvent.click(someSquareInWhichToMakeASecondMove)

    expect(screen.getByText('X To Move')).toBeInTheDocument()
})

test("Making a move on a taken square doesn't overwrite the existing piece", () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}  numberOfPiecesInARowRequiredToWin={3}/>)

    const someSquareInWhichToMakeAMove = screen.getByTestId('square-8-9')
    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")

    userEvent.click(someSquareInWhichToMakeAMove)

    expect(someSquareInWhichToMakeAMove).toHaveTextContent("X")
})


test.each(
    [3, 5, 6]
)("Correctly displays %p is the number of pieces in a row required to win", (numberOfPiecesInARowRequiredToWin) => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={numberOfPiecesInARowRequiredToWin}/>)
    expect(screen.getByText(new RegExp(`${numberOfPiecesInARowRequiredToWin} in a row to win`, 'i'), { exact: false,  }))
})