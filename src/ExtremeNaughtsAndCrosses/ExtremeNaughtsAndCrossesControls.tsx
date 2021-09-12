import React, { useState } from "react"
import { atom, useRecoilState, useSetRecoilState } from 'recoil'

export const gridSizeAtom = atom<number | null>({
    key: "gridSize",
    default: 10
})

export const winningNumberInARowAtom = atom<number | null>({
    key: "winningNumberInARow",
    default: 4
})

export const controlsValuesAtom = atom({
    key: "ExtremeNaughtsAndCrossesControls_controlsValues",
    default: {
        gridSize: 10,
        winningNumberInARow: 4,
        gameId: 1
    }
})

export default function ExtremeNaughtsAndCrossesControls() {
    const [inputGridSize, setInputGridSize]  = useRecoilState(gridSizeAtom)
    const [inputWinningNumberInRow, setInputWinningNumberInARow]  = useRecoilState(winningNumberInARowAtom)

    return (
        <>
            <label htmlFor="grid-size">Grid Size</label>
            <input type="number" id="grid-size" 
                value={inputGridSize || ""}
                onChange={(event) => { setInputGridSize(Number.parseInt(event.target.value) || null) }} 
            />
            <label htmlFor="winning-number-in-a-row">Winning Number in a Row</label>
            <input type="number" id="winning-number-in-a-row"
                value={inputWinningNumberInRow || ""}
                onChange={(event) => { setInputWinningNumberInARow(Number.parseInt(event.target.value) || null) }}
            />
        </>
    )
}
