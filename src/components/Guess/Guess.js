import React from 'react'

import { range } from '../../utils'

function Guess({ value }) {
  return (
    <p className="guess">
      {range(5).map((letterIndex) => (
        <span key={letterIndex} className="cell">
          {!!value ? value.split('')[letterIndex] : null}
        </span>
      ))}
    </p>
  )
}

export default Guess
