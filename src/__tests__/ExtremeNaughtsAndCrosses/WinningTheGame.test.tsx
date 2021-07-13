import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'
import React from 'react'

test('Displays The Target Number of Consecutive Pieces', () => {
    render(<ExtremeNaughtsAndCrosses gridSize={10} players={["X", "O"]}/>)

    expect(screen.getAllByRole('cell', { name: "?"})).toHaveLength(100)
})