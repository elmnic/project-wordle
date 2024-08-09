import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess'

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => (
        <Guess key={rowIndex} value={guesses.length >= rowIndex ? guesses[rowIndex] : null} />
      ))}
    </div>
  )
}

export default GuessResults
