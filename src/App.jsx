import Greetings from './components/Greetings/Greetings'

const App = () => {
	return (
		<div>
			<Greetings username='Alex' age={41} isOnline={true} />
			<div className='box'></div>
			<h2 className='title'>Hello react</h2>
		</div>
	)
}

export default App
