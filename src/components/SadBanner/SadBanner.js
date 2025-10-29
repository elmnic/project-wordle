import React from 'react'
import Banner from '../Banner/Banner'
import { GameHandlerContext } from '../GameHandlerProvider'

function SadBanner() {
  const { answer } = React.useContext(GameHandlerContext);
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  )
}

export default SadBanner
