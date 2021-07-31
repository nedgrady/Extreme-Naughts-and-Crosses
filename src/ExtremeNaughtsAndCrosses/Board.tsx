import React from 'react'
import './Board.css'
import styled from 'styled-components'
import useElementDimensions from 'useElementDimensions'
interface BoardProps {
    boardState: (string | null)[][],
    onPiecePlaced: (x: number, y: number) => void,
    limitingDimension: number
}

export default function Board({ boardState, onPiecePlaced, limitingDimension }: BoardProps) {

    const numberOfSquaresInPercent = `${100 / boardState.length}%`
    const css: React.CSSProperties = {
        width: numberOfSquaresInPercent,
        height: numberOfSquaresInPercent
    }

    return (
        <table cellSpacing={0} cellPadding={0} style={{ width: `${limitingDimension}px`, height: `${limitingDimension}px` }}>
            <tbody>
                {
                    boardState.map((row, rowIndex) =>
                        <tr key={rowIndex} className="board-row">
                            {
                                row.map((piece, columnIndex) =>
                                    <td key={`${columnIndex}-${rowIndex}`} data-testid={`square-${columnIndex}-${rowIndex}`} onClick={(() => onPiecePlaced(rowIndex, columnIndex))} className="board-square" style={css}>{piece || ""}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}
