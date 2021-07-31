import React, { useState } from "react"
import ExtremeNaughtsAndCrossesGame from './ExtremeNaughtsAndCrossesGame'
import ExtremeNaughtsAndCrossesControls from './ExtremeNaughtsAndCrossesControls'
export default function ExtremeNaughtsAndCrosses() {
    const [inputGridSize, setInputGridSize] = useState<number>(10)

    return (
    <>
        <ExtremeNaughtsAndCrossesControls onOptionsSubmitted={({newGridSize}) => {setInputGridSize(newGridSize)}}/>
        <ExtremeNaughtsAndCrossesGame key={inputGridSize} gridSize={inputGridSize} players={["X", "O"]} numberOfPiecesInARowRequiredToWin={3} />
    </>)
}


/**        <label htmlFor="grid-size">Grid Size</label> <input type="number" id="grid-size" value={inputGridSize} onChange={}/>
        <button onClick={() => {setBoardState(createInitialEmptyBoardState(inputGridSize))}}>Reset</button> */