import React, { useState } from 'react'

import { WORDS } from '../../data'
import { sample } from '../../utils'
import GuessInput from '../GuessInput'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import GuessResults from '../GuessResults/GuessResults'
import HappyBanner from '../HappyBanner/HappyBanner'
import SadBanner from '../SadBanner/SadBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = useState([])
  const [status, setStatus] = useState('running')

  function handleSubmitGuess(tentativeGuess) {
    if (guesses.length >= NUM_OF_GUESSES_ALLOWED) {
      return
    }
    const nextGuesses = [...guesses, tentativeGuess]
    // @ts-ignore
    setGuesses(nextGuesses)

    if (tentativeGuess === answer) {
      setStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setStatus('lost')
    }
  }
  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        enabled={status === 'running'}
      />
      {status === 'won' && <HappyBanner nrOfGuesses={guesses.length} />}
      {status === 'lost' && <SadBanner correctAnswer={answer} />}
    </>
  )
}

export default Game
