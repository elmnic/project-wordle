import React from 'react'

import { range } from '../../utils'

function Guess({ value, status }) {
  return (
    <p className="guess">
      {range(5).map((letterIndex) => {
        return (
          <span
            key={letterIndex}
            className={`cell ${!!status ? status[letterIndex].status : null}`}
          >
            {!!value ? value.split('')[letterIndex] : null}
          </span>
        )
      })}
    </p>
  )
}

export default Guess
