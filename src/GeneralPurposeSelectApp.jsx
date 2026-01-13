import Dropdown from './Dropdown'

const starWarsOptions = {
  rey: "Rey",
  luke: "Luke Skywalker",
  leia: "Leia Organa",
  finn: "Finn (FN-2187)",
  kylo: "Kylo Ren"
}

const petOptions = {
  cat: "Cat",
  dog: "Dog",
  fish: "Fish",
  iguana: "Iguana"
}


export default function App() {
  const evens = [ 2, 4, 6, 8, 10, 12, 14, 16 ]
  return (
    <form>
      <ul>
        {evens.map(num => <li key={num}>{num}</li>)}
      </ul>
      <Dropdown options={starWarsOptions} />
      <Dropdown options={petOptions} />
      <button type="submit">Submit</button>
    </form>
  )
}
