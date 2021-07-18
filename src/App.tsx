import React from 'react'
import ExtremeNaughtsAndCrosses from 'ExtremeNaughtsAndCrosses/ExtremeNaughtsAndCrosses'

function App() {
  return (<ExtremeNaughtsAndCrosses gridSize={15} players={["❌", "♻️", "🔷"]} numberOfPiecesInARowRequiredToWin={3}/>)
}

export default App
