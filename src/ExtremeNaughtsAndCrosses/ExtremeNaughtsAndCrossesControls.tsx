import React, { useState } from "react"
import { atom, useSetRecoilState } from 'recoil'

export const gridSizeAtom = atom({
    key: "gridSize",
    default: 10
})

export const winningNumberInARowAtom = atom({
    key: "winningNumberInARow",
    default: 4
})

export default function ExtremeNaughtsAndCrossesControls() {
    const setInputGridSize = useSetRecoilState(gridSizeAtom)
    const setInputWinningNumberInARow = useSetRecoilState(winningNumberInARowAtom)

    const [internalGridSize, setInternalGridSize] = useState<string>("10")
    const [internalWinningNumberInARow, setInternalWinningNumberInARow] = useState<string>("4")

    return (
        <>
            <label htmlFor="grid-size">Grid Size</label>
            <input type="number" id="grid-size" 
                value={internalGridSize}
                onChange={(event) => { setInternalGridSize(event.target.value) }} 
            />
            <label htmlFor="winning-number-in-a-row">Winning Number in a Row</label>
            <input type="number" id="winning-number-in-a-row"
                value={internalWinningNumberInARow}
                onChange={(event) => { setInternalWinningNumberInARow(event.target.value) }}
            />
            <button onClick={() => { setInputGridSize(Number.parseInt(internalGridSize)); setInputWinningNumberInARow(Number.parseInt(internalWinningNumberInARow))}}>Reset</button>
        </>
    )
}
