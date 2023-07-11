export default function RadioInput({ value }: { value: string }) {
  return (
		<div>
			<input type="radio" name="filter" id={value} value={value} />
			<label htmlFor={value}>{value.toUpperCase()}</label>
		</div>
  )
}


