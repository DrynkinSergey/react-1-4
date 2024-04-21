import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Images from './pages/Images'
import Todos from './pages/Todos'
import NotFound from './pages/NotFound'
import SingleImage from './pages/SingleImage'

const App = () => {
	return (
		<>
			<header className='header'>
				<Link to='/'>React</Link>
				<ul>
					<li>
						<NavLink to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink to='/images'>Images</NavLink>
					</li>
					<li>
						<NavLink to='/todos'>Todos</NavLink>
					</li>
				</ul>
			</header>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/images' element={<Images />} />
				<Route path='/images/:imageId' element={<SingleImage />} />
				<Route path='/todos' element={<Todos />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
