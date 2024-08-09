import React from 'react'
import Banner from '../Banner/Banner'

function SadBanner({ correctAnswer }) {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>{correctAnswer}</strong>.
      </p>
    </Banner>
  )
}

export default SadBanner
