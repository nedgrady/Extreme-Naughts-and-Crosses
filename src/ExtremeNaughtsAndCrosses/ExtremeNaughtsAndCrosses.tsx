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
        numberOfPiecesInARowRequiredToWin?: number
    }) {
    const initialBoardState : BoardState = new Array(gridSize)
    initialBoardState.fill(new Array(gridSize))
    initialBoardState.forEach(row => row.fill(null))

    const [boardState, setBoardState] = useState(initialBoardState)
    const [whosTurnIsIt, setWhosTurnItIs] = useState("X")

    const winner = calculateWinner(boardState)


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


function calculateWinner(boardState : BoardState) {

    //console.log(boardState[3][3])
    let winner

    boardState.forEach(row => {
        if(threeInARowPresentInArray(row))
            winner = "X"
    })

    return winner
}

function threeInARowPresentInArray(array : unknown[]) {

    for(let i = 0; i < array.length - 3; i++)
    {
        if(!array[i]) continue

        if(array[i] === array[i + 1] && array[i] === array[i + 2])
        {
            return true
        }
    }
    return false
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