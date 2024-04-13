import Greetings from './components/Greetings/Greetings'

const App = () => {
	return (
		<div>
			<Greetings username='Anton' />
			<Greetings username='Alex' age={41} isOnline={true} />
		</div>
	)
}

export default App
