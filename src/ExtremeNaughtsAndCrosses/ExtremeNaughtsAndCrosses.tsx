import React, { useState } from "react"
import Board from "./Board"
import WhosTurnIsIt from "./WhosTurnIsIt"

function ExtremeNaughtsAndCrosses(
    {
        gridSize,
        players
    } : {
        gridSize: number,
        players : string[]
    }) {
    const initialBoardState : string[][] = new Array(gridSize)
    initialBoardState.fill(new Array(gridSize))
    initialBoardState.forEach(row => row.fill(""))

    const [boardState, setBoardState] = useState(initialBoardState)
    const [whosTurnIsIt, setWhosTurnItIs] = useState("X")

    return (<><p>{whosTurnIsIt} To Move</p><Board boardState={boardState} onPiecePlaced={handlePiecePlaced}/></>)

    function handlePiecePlaced(rowIndex : number, columnIndex: number) {
        console.log(`handlePiecePlaced ${rowIndex} ${columnIndex}`)

        if(boardState[rowIndex][columnIndex])
            return

        const boardStateCopy : string[][] = []

        boardState.forEach(row => {
            boardStateCopy.push([...row])
        })

        boardStateCopy[rowIndex][columnIndex] = whosTurnIsIt

        setBoardState(boardStateCopy)

        if(whosTurnIsIt == "X") setWhosTurnItIs("O")
        if(whosTurnIsIt == "O") setWhosTurnItIs("X")
    }
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