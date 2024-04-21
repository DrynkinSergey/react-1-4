import { useEffect, useState } from 'react'
import { ImageList } from './ImageList'
import { fetchPexelsImages, fetchPexelsImagesByQuery } from '../../services/api'
import s from './PexelsApp.module.css'
import SearchBar from './SearchBar'
export const PexelsApp = () => {
	const [items, setItems] = useState([])
	const [favorites, setFavorites] = useState(() => {
		const savedFav = JSON.parse(window.localStorage.getItem('favorites'))
		if (savedFav?.length) {
			return savedFav
		}
		return []
	})
	const [page, setPage] = useState(1)
	const [query, setQuery] = useState('')

	useEffect(() => {
		const getData = async () => {
			try {
				const res = query ? await fetchPexelsImagesByQuery(page, query) : await fetchPexelsImages(page)
				setItems(prev => [...prev, ...res.photos])
			} catch (error) {
				console.log(error.message)
			}
		}
		getData()
	}, [page, query])

	useEffect(() => {
		window.localStorage.setItem('favorites', JSON.stringify(favorites))
	}, [favorites])

	const handleChangePage = () => {
		setPage(prev => prev + 1)
	}

	const handleChangeQuery = query => {
		setQuery(query)
		setPage(1)
		setItems([])
	}

	const handleAddToFav = item => {
		setFavorites(prev => [...prev, item])
	}
	const remoteFromFav = item => {
		setFavorites(prev => prev.filter(el => el.id !== item.id))
	}

	return (
		<>
			<SearchBar handleChangeQuery={handleChangeQuery} />
			<ImageList favorites={favorites} remoteFromFav={remoteFromFav} handleAddToFav={handleAddToFav} items={items} />
			<div className={s.flexCenter}>
				<button onClick={handleChangePage} className={s.btn}>
					Load more
				</button>
			</div>
		</>
	)
}
