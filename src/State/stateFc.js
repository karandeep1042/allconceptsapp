import React, { useState } from 'react'

export default function StateFc() {
    const [text,setText] = useState('hello ')

    const clickHandler =()=>{
        setText("You clicked the button");
    }

  return (
    <div>
        <h1>{text}</h1>
        <button onClick={clickHandler}>Click to change the text</button>
    </div>
  )
}
