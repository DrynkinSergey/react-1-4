import React, { useEffect, useState } from 'react'
import { ImageList } from '../components/pexels/ImageList'

const Favorites = () => {
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
	return (
		<div>
			<h1>Favorites images</h1>
			<ImageList favorites={favorites} remoteFromFav={remoteFromFav} items={favorites} />
		</div>
	)
}

export default Favorites
