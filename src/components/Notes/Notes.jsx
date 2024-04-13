import { useState } from 'react'

export const Notes = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [name, setName] = useState('Alex')
	const [city, setCity] = useState('Lviv')
	const [clicks, setClicks] = useState(0)
	// const isOpen = true

	const handleOpen = () => {
		console.log(isOpen)
		setIsOpen(!isOpen)
		console.log(isOpen)
	}

	const handleClick = () => {
		setName(prompt('Enter new name'))
	}
	const handleChangeCity = () => {
		setCity(prompt('Enter new city'))
	}
	return (
		<div>
			<h2>Notes</h2>
			<h2>Hello, {name}</h2>
			<h3>Your city {city}</h3>
			<button onClick={handleOpen}> {isOpen ? 'Close' : 'Open'} </button>
			{isOpen && (
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad impedit odio, minus illum dolores consectetur eius
					dolorem fuga quas voluptates culpa libero velit ratione, veniam fugit cum accusamus quam dolore.
				</p>
			)}
			<button onClick={handleClick}>Change name</button>
			<button onClick={handleChangeCity}>Change city</button>
			<button onClick={() => setClicks(prev => prev + 1)}>Clicks: {clicks}</button>
		</div>
	)
}
