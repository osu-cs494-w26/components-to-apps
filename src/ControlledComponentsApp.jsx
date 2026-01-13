import { useState } from 'react'

export default function App() {
  const [ name, setName ] = useState("")
  return (
    <form onSubmit={e => {
      e.preventDefault()
      alert(`Name: ${name}`)
    }}>
      <label>
        Name
        <input type="text" value={name} onChange={e => {
          setName(e.target.value)
        }} />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
