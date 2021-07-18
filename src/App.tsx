import React from 'react'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'

import './App.css'

function App() {
  return (
    <>
      <h1>Exteme Naughts and Crosses</h1>
      <ExtremeNaughtsAndCrosses gridSize={15} players={["❌", "♻️", "🔷"]} numberOfPiecesInARowRequiredToWin={3} />
    </>
    )
}

export default App
