import React, { useState } from 'react'
import { GameHandlerContext } from '../GameHandlerProvider'

function GuessInput() {
  const { status, submitGuess } = React.useContext(GameHandlerContext);
  const [tentativeGuess, setTentativeGuess] = useState('')

  function onGuessInput(guessInput) {
    if (guessInput.length > 5) return
    setTentativeGuess(guessInput)
  }

  function onSubmit(event) {
    event.preventDefault()
    submitGuess(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        onChange={(event) => onGuessInput(event.target.value.toUpperCase())}
        pattern="[\w]{5}"
        disabled={status === 'running'}
      />
    </form>
  )
}

export default GuessInput
