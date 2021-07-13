import React from 'react'
import './Board.css'

export default function Board({ boardState, onPiecePlaced }: { boardState: string[][], onPiecePlaced : (rowIndex : number, columnIndex: number) => void}) {
    return (
        <table>
            <tbody>
                {
                    boardState.map((row, rowIndex) =>
                        <tr key={rowIndex}>
                            {
                                row.map((piece, columnIndex) =>
                                    <td key={columnIndex} data-testid={`square-${rowIndex}-${columnIndex}`} onClick={(() => onPiecePlaced(rowIndex, columnIndex)) }>{piece || "?"}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}