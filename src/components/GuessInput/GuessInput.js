import React from 'react';
import { useState } from 'react';
import GuessResults from '../GuessResults/GuessResults';

function GuessInput() {
  const [guess, setGuess] = useState('')
  const [guesses, setGuesses] = useState([])

  function onGuessInput(guess) {
    if (guess.length > 5)
      return
    setGuess(guess.toUpperCase())
  }

  function onSubmit(event) {
    event.preventDefault()
    const nextGuess = { id: crypto.randomUUID(), guess }
    const nextGuesses = [...guesses, nextGuess]
    setGuesses(nextGuesses)

    console.log({ nextGuess })
    setGuess('')
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <form className='guess-input-wrapper' onSubmit={onSubmit}>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          id='guess-input'
          type='text'
          value={guess}
          onChange={event => onGuessInput(event.target.value)}
          pattern='[\w]{5}'
        />
      </form>
    </>)
}

export default GuessInput;
