import React from 'react'

import { range } from '../../utils'

function Guess({ value, status }) {
  return (
    <p className="guess">
      {range(5).map((letterIndex) => {
        const statusClass = !!status ? status[letterIndex].status : null
        const letter = !!value ? value.split('')[letterIndex] : null
        return (
          <span key={letterIndex} className={`cell ${statusClass}`}>
            {letter}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
