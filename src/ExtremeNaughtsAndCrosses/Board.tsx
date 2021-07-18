import React from 'react'
import './Board.css'

export default function Board({ boardState, onPiecePlaced }: { boardState: (string | null)[][], onPiecePlaced : (x : number, y: number) => void}) {
    return (
        <table cellSpacing={0} cellPadding={0}>
            <tbody>
                {
                    boardState.map((row, rowIndex) =>
                        <tr key={rowIndex} className="board-row">
                            {
                                row.map((piece, columnIndex) =>
                                    <td key={`${columnIndex}-${rowIndex}`} data-testid={`square-${columnIndex}-${rowIndex}`} onClick={(() => onPiecePlaced(rowIndex, columnIndex)) } className="board-square">{piece || ""}</td>
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