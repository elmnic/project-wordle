import React from 'react'
import { GameHandlerContext } from '../GameHandlerProvider'
import HappyBanner from '../HappyBanner'
import SadBanner from '../SadBanner'

function GameOverBanner() {
  const { gameStatus } = React.useContext(GameHandlerContext)
  return <>
    {gameStatus === 'won' && <HappyBanner />}
    {gameStatus === 'lost' && <SadBanner />}
  </>
}

export default GameOverBanner
