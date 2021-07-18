import React from 'react'
import './Board.css'
import styled from 'styled-components'
import useWindowDimensions from 'useWindowDimensions'
export default function Board({ boardState, onPiecePlaced }: { boardState: (string | null)[][], onPiecePlaced : (x : number, y: number) => void}) {
    const { width, height } = useWindowDimensions()
    const limitingViewportDimension = Math.min(width, height)
    const squareSize = limitingViewportDimension / (boardState.length)
    
    const Square = styled.td`
        width: ${squareSize}px;
        height: ${squareSize}px;
        min-width: ${squareSize-2}px;
        min-height: ${squareSize-2}px;
        font-size: ${squareSize/2}px;
    `

    return (
        <table cellSpacing={0} cellPadding={0}>
            <tbody>
                {
                    boardState.map((row, rowIndex) =>
                        <tr key={rowIndex} className="board-row">
                            {
                                row.map((piece, columnIndex) =>
                                    <Square key={`${columnIndex}-${rowIndex}`} data-testid={`square-${columnIndex}-${rowIndex}`} onClick={(() => onPiecePlaced(rowIndex, columnIndex)) } className="board-square">{piece || ""}</Square>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

// ${x} ${y}