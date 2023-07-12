

export default function Form({ children, className, onSubmit, onChange }: 
	{ 
		children: React.ReactNode,
		className: object,

	}) {
  return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<div className={styles.links}>
				{children} 
			</div>
			<input
				type="text"
				placeholder='Search...'
				className={styles.input}
				onChange={handleChange}
				value={query}
			/>
		</form>

  )
}

