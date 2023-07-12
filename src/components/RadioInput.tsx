export default function RadioInput({ value, onChange, checked, onClick }:
	{ 
    value: string,
		checked: boolean | undefined,
		onChange: React.ChangeEventHandler<HTMLInputElement>,
    onClick?: React.MouseEventHandler<HTMLInputElement>
  }) {
  return (
		<div>
			<input 
        type="radio" 
        name="filter" 
        checked={checked} 
        id={value} 
        value={value} 
        onChange={onChange} 
        onClick={onClick}
      />
			<label htmlFor={value}>{value.toUpperCase()}</label>
		</div>
  )
}


