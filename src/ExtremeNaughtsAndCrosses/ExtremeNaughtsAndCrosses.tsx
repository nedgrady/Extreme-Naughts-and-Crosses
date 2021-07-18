import React, { useState } from "react"
import Board from "./Board"

type BoardState = (string | null) [][];

function ExtremeNaughtsAndCrosses(
    {
        gridSize,
        players,
        numberOfPiecesInARowRequiredToWin
    } : {
        gridSize: number,
        players : string[],
        numberOfPiecesInARowRequiredToWin: number
    }) {
    const initialBoardState : BoardState = new Array(gridSize)
    initialBoardState.fill(new Array(gridSize))
    initialBoardState.forEach(row => row.fill(null))

    const [boardState, setBoardState] = useState(initialBoardState)
    const [whosTurnIsIt, setWhosTurnItIs] = useState("X")

    const winner = calculateWinner(boardState, numberOfPiecesInARowRequiredToWin)


    return (
        <>
            <p>{whosTurnIsIt} To Move</p>
            <p>{numberOfPiecesInARowRequiredToWin} in a row to win</p>
            <Board boardState={boardState} onPiecePlaced={handlePiecePlaced}/>
            {winner && <p>{winner} Wins</p>}
        </>)

    function handlePiecePlaced(x : number, y: number) {

        if(boardState[x][y])
            return

        const boardStateCopy : BoardState = []

        boardState.forEach(row => {
            boardStateCopy.push([...row])
        })

        boardStateCopy[x][y] = whosTurnIsIt

        setBoardState(boardStateCopy)

        if(whosTurnIsIt == "X") setWhosTurnItIs("O")
        if(whosTurnIsIt == "O") setWhosTurnItIs("X")
    }
}


function calculateWinner(boardState : BoardState, numberOfPiecesInARowRequiredToWin : number) {

    let winner

    for(let row of boardState)
    {
        winner = areSomeNumberOfConsecutiveItemsPresentInArray(numberOfPiecesInARowRequiredToWin, row)
        if(winner)
            return winner
    }

    let transposedBoardState = boardState[0].map((_, columnIndex) => boardState.map(row => row[columnIndex]))
    for(let column of transposedBoardState)
    {
        winner = areSomeNumberOfConsecutiveItemsPresentInArray(numberOfPiecesInARowRequiredToWin, column)
        if(winner)
            return winner
    }

    const diagonals : BoardState = []
    const leftDiagonalsStartIndex = boardState.length - 1

    boardState.forEach(_ => {
        diagonals.push([], [])
    })

    for(let currentDiagonal = 0; currentDiagonal < diagonals.length; currentDiagonal++) {
        for(let pieceIndex = 0; pieceIndex < boardState.length - currentDiagonal; pieceIndex++) {
            diagonals[currentDiagonal].push(boardState[pieceIndex][pieceIndex + currentDiagonal])
            diagonals[currentDiagonal + leftDiagonalsStartIndex].push(boardState[pieceIndex][pieceIndex - currentDiagonal])
        }
    }

    for(let diagonal of diagonals) {
        winner = areSomeNumberOfConsecutiveItemsPresentInArray(numberOfPiecesInARowRequiredToWin, diagonal)
        if(winner)
            return winner
    }
}

function areSomeNumberOfConsecutiveItemsPresentInArray(targetNumberOfConsecutiveItems : number, array: unknown[]){
    let numberOfConsecutiveFound = 1

    let previousItem : unknown = {}

    for (const currentItem of array) {
        if(currentItem && currentItem === previousItem)
            numberOfConsecutiveFound++
        
        if(numberOfConsecutiveFound === targetNumberOfConsecutiveItems)
            return currentItem

        previousItem = currentItem
    }

    return null
}

// function calculateNextPlayerToMove(boardState : string[][], players: string[]) {
//     const flattenedBoardState : string[] = []
//     boardState.forEach(row => row.forEach(piece => flattenedBoardState.push(piece)))

//     const numberOfX = flattenedBoardState.filter(piece => piece == "X").length
//     const numberOfO = flattenedBoardState.filter(piece => piece == "O").length

//     if(numberOfO < numberOfX)
//         return "O"
//     else
//         return "X"
// }



export default ExtremeNaughtsAndCrosses