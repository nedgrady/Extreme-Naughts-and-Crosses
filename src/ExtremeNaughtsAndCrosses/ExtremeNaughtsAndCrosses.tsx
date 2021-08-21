import React, { useState } from "react"
import ExtremeNaughtsAndCrossesGame from './ExtremeNaughtsAndCrossesGame'
import ExtremeNaughtsAndCrossesControls from './ExtremeNaughtsAndCrossesControls'
import {gridSizeAtom, winningNumberInARowAtom} from './ExtremeNaughtsAndCrossesControls'
import { useRecoilValue } from "recoil"

export default function ExtremeNaughtsAndCrosses() {
    const inputGridSize = useRecoilValue(gridSizeAtom)
    const inputWinningNumberInARow = useRecoilValue(winningNumberInARowAtom)

    return (
    <>
        <ExtremeNaughtsAndCrossesControls />
        <ExtremeNaughtsAndCrossesGame
            key={`${inputGridSize}${inputWinningNumberInARow}`}
            gridSize={inputGridSize}
            players={["🧧", "📀", "🐸"]}
            numberOfPiecesInARowRequiredToWin={inputWinningNumberInARow} />
    </>)
}
