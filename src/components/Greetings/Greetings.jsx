const Greetings = ({ age = 11, username, isOnline = false }) => {
	return (
		<section>
			<h1>Hello, {username}</h1>
			<h2>Тобі {age}</h2>

			{isOnline === true ? <h3>Online</h3> : <h3>Offline</h3>}
			{age >= 18 ? <h3>Ви є повнолітнім</h3> : <h3>Ви є дитиною</h3>}
			{/* {якщо age > 18 ? (тоді) <h3>Ви є повнолітнім</h3> : (інакше) <h3>Ви є дитиною</h3>} */}
		</section>
	)
}

export default Greetings
