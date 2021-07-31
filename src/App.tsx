import React from 'react'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'

import './App.css'

function App() {
  return (
    <>
      <ExtremeNaughtsAndCrosses gridSize={12} players={["❌", "♻️", "🔷"]} numberOfPiecesInARowRequiredToWin={3} />
    </>
    )
}

export default App
