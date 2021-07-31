import React, { useState } from "react"

export interface ExtremeNaughtsAndCrossesControlsProps {
    onOptionsSubmitted: ({ newGridSize }: { newGridSize: number }) => void
}
export default function ExtremeNaughtsAndCrossesControls({ onOptionsSubmitted }: ExtremeNaughtsAndCrossesControlsProps) {
    const [inputGridSize, setInputGridSize] = useState<number>(10)
    return (
        <>
            <label htmlFor="grid-size">Grid Size</label> <input type="number" id="grid-size" value={inputGridSize.toString()} onChange={(event) => { setInputGridSize(Number.parseInt(event.target.value)) }} />
            <button onClick={() => { onOptionsSubmitted({ newGridSize: inputGridSize }) }}>Reset</button>
        </>
    )
}