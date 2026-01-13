import { useState } from 'react'

function SwitchButton() {
  const [ isOn, setIsOn ] = useState(true)
  return (
    <button onClick={() => setIsOn(prevIsOn => !prevIsOn)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  )
}

export default function App() {
  return (
    <>
    <p>
      <button onClick={() => alert("The button was clicked") }>
        This is a button
      </button>
    </p>
    <p>
      <a
        href="https://web.engr.oregonstate.edu/~hessro/teaching/cs494-w26"
        target="_blank"
        rel="noreferrer"
        onClick={e => {
          console.log("== e:", e)
          e.preventDefault()
        }}
      >
        This is a link to the CS 494 website.
      </a>
    </p>
    <p>
      <SwitchButton />
    </p>
    </>
  )
}
