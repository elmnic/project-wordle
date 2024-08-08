import React from 'react'

import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function Guess({ guesses }) {
  return (
    <div className="guess-results">
      {guesses.map(({ guess, id }) => {
        return (
          <p key={id} className="guess">
            {guess.split('').map((l, index) => (
              <span key={index} className="cell">{l}</span>
            ))}
          </p>
        )
      })}
      {range(guesses.length, NUM_OF_GUESSES_ALLOWED).map((_, i) => {
        return (
          <p key={i} className="guess">
            {range(0, 5).map((_, index) => (
              <span key={index} className="cell"></span>
            ))}
          </p>
        )
      })}
    </div>
  )
}

export default Guess
