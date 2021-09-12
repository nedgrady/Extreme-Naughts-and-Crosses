import React, { useState } from "react"
import ExtremeNaughtsAndCrossesGame from './ExtremeNaughtsAndCrossesGame'
import ExtremeNaughtsAndCrossesControls from './ExtremeNaughtsAndCrossesControls'
import { gridSizeAtom, winningNumberInARowAtom, controlsValuesAtom } from './ExtremeNaughtsAndCrossesControls'
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil"
import useElementDimensions from "../useElementDimensions"
import styled from 'styled-components'

const FlexyGameContainer = styled.div`
    @media all and (orientation:portrait) {
        display: flex;
        flex-direction: column;
    }

    @media all and (orientation:landscape) {
        display: flex;
        flex-direction: row;
    }

    text-align: center;
    height: 100%;
    max-height: 100%;
`

export default function ExtremeNaughtsAndCrosses() {
    //const inputGridSize = useRecoilValue(gridSizeAtom)
    //const inputWinningNumberInARow = useRecoilValue(winningNumberInARowAtom)
    //     const { gridSize: inputGridSize, winningNumberInARow: inputWinningNumberInARow, gameId } = useRecoilValue(controlsValuesAtom)
    const inputGridSize = useRecoilValue(gridSizeAtom) ?? 1
    const inputWinningNumberInARow = useRecoilValue(winningNumberInARowAtom) ?? 3
    const [{ width, height }, gameContainerRef] = useElementDimensions()
    const limitingDimensionInPixels = Math.min(width, height)

    return (
        <FlexyGameContainer ref={gameContainerRef}>
            <ExtremeNaughtsAndCrossesControls />
            <ExtremeNaughtsAndCrossesGame
                key={`${inputGridSize}${inputWinningNumberInARow}`}
                gridSize={inputGridSize}
                players={["🧧", "📀", "🐸"]}
                numberOfPiecesInARowRequiredToWin={inputWinningNumberInARow}
                limitingDimensionInPixels={limitingDimensionInPixels} />
        </FlexyGameContainer>)
}
