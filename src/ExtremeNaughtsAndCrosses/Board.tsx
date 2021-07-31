import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    border-collapse: collapse;
`
const Square = styled.td`
    vertical-align: middle;
    text-align: center;

    border-color: black;
    padding: 0;
    margin: 0;

    border-width: 1px 1px 1px 1px;
    border-style: solid;
`
interface BoardProps {
    boardState: (string | null)[][],
    onPiecePlaced: (x: number, y: number) => void,
    limitingDimensionInPixels: number
}

export default function Board({ boardState, onPiecePlaced, limitingDimensionInPixels }: BoardProps) {

    const sizeOfEachSquareInPercent = `${100 / boardState.length}%`
    const sizeOfEachSquareInPixels = `${(limitingDimensionInPixels / boardState.length / 2) - 1}px`
    const css: React.CSSProperties = {
        width: sizeOfEachSquareInPercent,
        height: sizeOfEachSquareInPercent,
        fontSize: sizeOfEachSquareInPixels
    }

    return (
        <Table style={{ width: `${limitingDimensionInPixels}px`, height: `${limitingDimensionInPixels}px` }}>
            <tbody>
                {
                    boardState.map((row, rowIndex) =>
                        <tr key={rowIndex}>
                            {
                                row.map((piece, columnIndex) =>
                                    <Square key={`${columnIndex}-${rowIndex}`}
                                            data-testid={`square-${columnIndex}-${rowIndex}`}
                                            onClick={(() => onPiecePlaced(rowIndex, columnIndex))}
                                            style={css}>{piece || ""}
                                    </Square>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}
