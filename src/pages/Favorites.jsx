import { useEffect, useState } from 'react'
import { ImageList } from '../components/pexels/ImageList'
import { toast } from 'react-toastify'

const Favorites = () => {
	const [value, setValue] = useState('')
	const [access, setAccess] = useState(false)
	const [favorites, setFavorites] = useState(() => {
		const savedFav = JSON.parse(window.localStorage.getItem('favorites'))
		if (savedFav?.length) {
			return savedFav
		}
		return []
	})
	useEffect(() => {
		window.localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])
	const remoteFromFav = item => {
		setFavorites(prev => prev.filter(el => el.id !== item.id))
	}

	const handleGetAccess = () => {
		const access = import.meta.env.VITE_ACCESS === value
		if (access) {
			return setAccess(true)
		}
		toast.error('Wrong access')
	}
	if (!access) {
		return (
			<div>
				<h1>Please sign in</h1>
				<input type='text' value={value} onChange={e => setValue(e.target.value)} />
				<button onClick={handleGetAccess}>Sign in</button>
			</div>
		)
	}

	return (
		<div>
			<h1>Favorites images</h1>
			<ImageList favorites={favorites} remoteFromFav={remoteFromFav} items={favorites} />
		</div>
	)
}

export default Favorites
