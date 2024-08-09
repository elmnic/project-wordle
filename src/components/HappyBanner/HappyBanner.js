import React from 'react'
import Banner from '../Banner'

function HappyBanner({ nrOfGuesses }) {
  return (
    <Banner status="happy">
      <p>
        <strong>Congratulations!</strong> You got it in{' '}
        <strong>{nrOfGuesses} guess(es)</strong>.
      </p>
    </Banner>
  )
}

export default HappyBanner
