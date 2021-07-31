import React, { useState } from "react"
import ExtremeNaughtsAndCrossesGame from './ExtremeNaughtsAndCrossesGame'
import ExtremeNaughtsAndCrossesControls from './ExtremeNaughtsAndCrossesControls'
export default function ExtremeNaughtsAndCrosses() {
    const [inputGridSize, setInputGridSize] = useState<number>(10)
    const [inputWinningNumberInARow, setInputWinningNumberInARow] = useState<number>(10)

    return (
    <>
        <ExtremeNaughtsAndCrossesControls onOptionsSubmitted={({newGridSize, newWinningNumberInARow}) => {setInputGridSize(newGridSize); setInputWinningNumberInARow(newWinningNumberInARow)}}/>
        <ExtremeNaughtsAndCrossesGame
            key={`${inputGridSize}${inputWinningNumberInARow}`}
            gridSize={inputGridSize}
            players={["⚔", "🔥", "📘"]}
            numberOfPiecesInARowRequiredToWin={inputWinningNumberInARow} />
    </>)
}
