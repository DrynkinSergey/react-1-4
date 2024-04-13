export const Notes = () => {
	const showSum = (a, b) => {
		console.log(+a + +b)
		console.log('First number: ' + a)
		console.log('Second number: ' + b)
	}
	const sayHi = name => {
		console.log('Hello ' + name)
	}

	return (
		<div>
			<h2>Notes</h2>
			<button onClick={() => alert('Hello')}>Hello</button>
			<button onClick={() => showSum(prompt('Enter second number'), prompt('Enter first number'))}>Show sum</button>
			<button onClick={() => showSum(1, 4)}>Show sum 2</button>
			<button onClick={() => showSum(10, '14')}>Show sum 3</button>

			<button onClick={() => sayHi('Sasha')}>Show sum 3</button>
		</div>
	)
}
