import React from 'react'
import './Board.css'

export default function Board({ boardState, onPiecePlaced }: { boardState: (string | null)[][], onPiecePlaced : (x : number, y: number) => void}) {
    return (
        <table>
            <tbody>
                {
                    boardState.map((row, rowIndex) =>
                        <tr key={rowIndex}>
                            {
                                row.map((piece, columnIndex) =>
                                    <td key={`${columnIndex}-${rowIndex}`} data-testid={`square-${columnIndex}-${rowIndex}`} onClick={(() => onPiecePlaced(rowIndex, columnIndex)) }>{piece || `?`}</td>
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