import React, { useState } from 'react'

import { WORDS } from '../../data'
import { sample } from '../../utils'
import GuessInput from '../GuessInput'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessResults from '../GuessResults/GuessResults'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])

  function handleSubmitGuess(tentativeGuess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return
    }
    // @ts-ignore
    setGuesses([...guesses, tentativeGuess])
  }

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game
