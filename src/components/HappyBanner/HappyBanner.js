import React from 'react'
import Banner from '../Banner'
import { GameHandlerContext } from '../GameHandlerProvider';

function HappyBanner() {
  const { guesses } = React.useContext(GameHandlerContext);
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> You got it in{' '}
        <strong>{guesses.length} guess(es)</strong>.
      </p>
    </Banner>
  )
}

export default HappyBanner
