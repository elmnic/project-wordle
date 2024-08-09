import React from 'react'
import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import Guess from '../Guess'
import { checkGuess } from '../../game-helpers'

function GuessResults({ guesses, answer }) {
  const guessRows = range(NUM_OF_GUESSES_ALLOWED).map((rowIndex) => {
    const currentGuess = guesses.length >= rowIndex ? guesses[rowIndex] : null
    const currentGuessStatus = currentGuess
      ? checkGuess(currentGuess, answer)
      : null

    return (
      <Guess key={rowIndex} value={currentGuess} status={currentGuessStatus} />
    )
  })

  return <div className="guess-results">{guessRows}</div>
}

export default GuessResults
