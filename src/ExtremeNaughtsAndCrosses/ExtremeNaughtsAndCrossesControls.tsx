import React, { useState } from "react"

export interface ExtremeNaughtsAndCrossesControlsProps {
    onOptionsSubmitted: ({ newGridSize, newWinningNumberInARow }: { newGridSize: number, newWinningNumberInARow: number }) => void
}
export default function ExtremeNaughtsAndCrossesControls({ onOptionsSubmitted }: ExtremeNaughtsAndCrossesControlsProps) {
    const [inputGridSize, setInputGridSize] = useState<number>(10)
    const [inputWinningNumberInARow, setInputWinningNumberInARow] = useState<number>(3)
    return (
        <>
            <label htmlFor="grid-size">Grid Size</label><input type="number" id="grid-size" value={inputGridSize.toString()} onChange={(event) => { setInputGridSize(Number.parseInt(event.target.value)) }} />
            <label htmlFor="winning-number-in-a-row">Winning Number in a Row</label> <input type="number" id="winning-number-in-a-row" value={inputWinningNumberInARow.toString()} onChange={(event) => { setInputWinningNumberInARow(Number.parseInt(event.target.value)) }} />
            <button onClick={() => { onOptionsSubmitted({ newGridSize: inputGridSize, newWinningNumberInARow: inputWinningNumberInARow }) }}>Reset</button>
        </>
    )
}