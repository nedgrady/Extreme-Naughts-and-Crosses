import React, { useState } from "react"
import ExtremeNaughtsAndCrossesGame from './ExtremeNaughtsAndCrossesGame'
import ExtremeNaughtsAndCrossesControls from './ExtremeNaughtsAndCrossesControls'
import { gridSizeAtom, winningNumberInARowAtom, controlsValuesAtom } from './ExtremeNaughtsAndCrossesControls'
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"

export default function ExtremeNaughtsAndCrosses() {
    //const inputGridSize = useRecoilValue(gridSizeAtom)
    //const inputWinningNumberInARow = useRecoilValue(winningNumberInARowAtom)
    //     const { gridSize: inputGridSize, winningNumberInARow: inputWinningNumberInARow, gameId } = useRecoilValue(controlsValuesAtom)
    const inputGridSize = useRecoilValue(gridSizeAtom) ?? 1
    const inputWinningNumberInARow = useRecoilValue(winningNumberInARowAtom) ?? 3

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
