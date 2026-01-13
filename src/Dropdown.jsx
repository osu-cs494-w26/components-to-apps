export default function Dropdown(props) {
  return (
    <select>
      {Object.keys(props.options).map(key =>
        <option key={key} value={key}>{props.options[key]}</option>
      )}
    </select>
  )
}
