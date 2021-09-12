import React, { useState } from "react"
import Board from "./Board"

type BoardState = (string | null)[][];

function ExtremeNaughtsAndCrossesGame(
    {
        gridSize,
        players,
        numberOfPiecesInARowRequiredToWin,
        limitingDimensionInPixels
    }: {
        gridSize: number,
        players: string[],
        numberOfPiecesInARowRequiredToWin: number,
        limitingDimensionInPixels: number
    }) {

    const [boardState, setBoardState] = useState(createInitialEmptyBoardState(gridSize))

    const winner = calculateWinner(boardState, numberOfPiecesInARowRequiredToWin)
    const numberOfMovesMade = calculateNumberOfMovesMade(boardState)
    const whosTurnIsIt = players[numberOfMovesMade % players.length]

    return (
        <>
            <p>{whosTurnIsIt} To Move</p>
            <p>{numberOfPiecesInARowRequiredToWin} in a row to win</p>
            {winner && <h4><strong>{winner} Wins!</strong></h4>}
            <Board
                boardState={boardState}
                onPiecePlaced={handlePiecePlaced}
                limitingDimensionInPixels={limitingDimensionInPixels} />
        </>)

    function handlePiecePlaced(x: number, y: number) {

        if (boardState[x][y])
            return

        const boardStateCopy: BoardState = []

        boardState.forEach(row => {
            boardStateCopy.push([...row])
        })

        boardStateCopy[x][y] = whosTurnIsIt

        setBoardState(boardStateCopy)
    }
}

function calculateWinner(
    boardState: BoardState,
    numberOfPiecesInARowRequiredToWin: number) {

    let winner

    for (let row of boardState) {
        winner = areSomeNumberOfConsecutiveItemsPresentInArray(numberOfPiecesInARowRequiredToWin, row)
        if (winner)
            return winner
    }

    let transposedBoardState = boardState[0].map((_, columnIndex) => boardState.map(row => row[columnIndex]))
    for (let column of transposedBoardState) {
        winner = areSomeNumberOfConsecutiveItemsPresentInArray(numberOfPiecesInARowRequiredToWin, column)
        if (winner)
            return winner
    }

    const diagonals: BoardState = []
    const leftDiagonalsStartIndex = boardState.length - 1
    const rightToLeftDiagonalsStartingIndexRightOfPrincipalDiagonal = leftDiagonalsStartIndex * 2
    const rightToLeftDiagonalsStartingIndexLeftOfPrincipalDiagonal = leftDiagonalsStartIndex * 3

    boardState.forEach(_ => {
        diagonals.push([], [], [], [])
    })

    for (let currentDiagonal = 0; currentDiagonal < diagonals.length; currentDiagonal++) {
        for (let pieceIndex = 0; pieceIndex < boardState.length - currentDiagonal; pieceIndex++) {
            diagonals[currentDiagonal].push(boardState[pieceIndex][pieceIndex + currentDiagonal])
            diagonals[currentDiagonal + leftDiagonalsStartIndex].push(boardState[pieceIndex][pieceIndex - currentDiagonal])
            diagonals[currentDiagonal + rightToLeftDiagonalsStartingIndexRightOfPrincipalDiagonal].push(boardState[boardState.length - 1 - pieceIndex][pieceIndex - currentDiagonal])
            diagonals[currentDiagonal + rightToLeftDiagonalsStartingIndexLeftOfPrincipalDiagonal].push(boardState[boardState.length - 1 - pieceIndex][pieceIndex + currentDiagonal])
        }
    }

    for (let diagonal of diagonals) {
        winner = areSomeNumberOfConsecutiveItemsPresentInArray(numberOfPiecesInARowRequiredToWin, diagonal)
        if (winner)
            return winner
    }
}

function areSomeNumberOfConsecutiveItemsPresentInArray(
    targetNumberOfConsecutiveItems: number,
    array: unknown[]
) {
    let numberOfConsecutiveFound = 1

    let previousItem: unknown = {}

    for (const currentItem of array) {
        if (currentItem && currentItem === previousItem)
            numberOfConsecutiveFound++
        else
            numberOfConsecutiveFound = 1

        if (numberOfConsecutiveFound === targetNumberOfConsecutiveItems)
            return currentItem

        previousItem = currentItem
    }

    return null
}

function calculateNumberOfMovesMade(boardState: BoardState) {
    let numberOfMoves = 0

    boardState.forEach(row => {
        numberOfMoves += row.filter(pieceOrEmpty => !!pieceOrEmpty).length
    })

    return numberOfMoves
}

function createInitialEmptyBoardState(gridSize: number) {
    const initialBoardState: BoardState = new Array(gridSize)
    initialBoardState.fill(new Array(gridSize))
    initialBoardState.forEach(row => row.fill(null))
    return initialBoardState
}

export default ExtremeNaughtsAndCrossesGame