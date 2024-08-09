import React from 'react'

import { range } from '../../utils'

function Guess({ value, status }) {
  return (
    <p className="guess">
      {range(5).map((letterIndex) => {
        const statusClass = !!status
          ? `cell ${status[letterIndex].status}`
          : 'cell'
        const letter = !!value ? value.split('')[letterIndex] : null
        return (
          <span key={letterIndex} className={statusClass}>
            {letter}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
