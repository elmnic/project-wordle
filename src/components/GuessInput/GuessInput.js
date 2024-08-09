import React, { useState } from 'react'

function GuessInput({ handleSubmitGuess, enabled }) {
  const [tentativeGuess, setTentativeGuess] = useState('')

  function onGuessInput(guessInput) {
    if (guessInput.length > 5) return
    setTentativeGuess(guessInput)
  }

  function onSubmit(event) {
    event.preventDefault()
    handleSubmitGuess(tentativeGuess)
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
        disabled={!enabled}
      />
    </form>
  )
}

export default GuessInput
