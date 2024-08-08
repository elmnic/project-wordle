import React, { useState } from 'react'

import { WORDS } from '../../data'
import { sample } from '../../utils'
import Guess from '../Guess'
import GuessInput from '../GuessInput'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

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
    const newGuess = { guess: tentativeGuess, id: crypto.randomUUID() }
    // @ts-ignore
    setGuesses([...guesses, newGuess])
  }

  return (
    <>
      <Guess guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game
