import React, { useState } from "react"
import ExtremeNaughtsAndCrossesGame from './ExtremeNaughtsAndCrossesGame'
import ExtremeNaughtsAndCrossesControls from './ExtremeNaughtsAndCrossesControls'
import {gridSizeAtom, winningNumberInARowAtom, controlsValuesAtom} from './ExtremeNaughtsAndCrossesControls'
import { useRecoilValue } from "recoil"

export default function ExtremeNaughtsAndCrosses() {
    //const inputGridSize = useRecoilValue(gridSizeAtom)
    //const inputWinningNumberInARow = useRecoilValue(winningNumberInARowAtom)

    const { gridSize: inputGridSize, winningNumberInARow: inputWinningNumberInARow, gameId} = useRecoilValue(controlsValuesAtom)

    return (
    <>
        <ExtremeNaughtsAndCrossesControls />
        <ExtremeNaughtsAndCrossesGame
            key={`${inputGridSize}${inputWinningNumberInARow}${gameId}`}
            gridSize={inputGridSize}
            players={["🧧", "📀", "🐸"]}
            numberOfPiecesInARowRequiredToWin={inputWinningNumberInARow} />
    </>)
}
