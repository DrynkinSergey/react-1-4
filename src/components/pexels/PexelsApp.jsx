import { useEffect, useState } from 'react'
import { ImageList } from './ImageList'
import { fetchPexelsImages, fetchPexelsImagesByQuery } from '../../services/api'
import s from './PexelsApp.module.css'
import SearchBar from './SearchBar'
export const PexelsApp = () => {
	const [items, setItems] = useState([])
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

	const handleChangePage = () => {
		setPage(prev => prev + 1)
	}

	const handleChangeQuery = query => {
		setQuery(query)
		setPage(1)
		setItems([])
	}

	return (
		<>
			<SearchBar handleChangeQuery={handleChangeQuery} />
			<ImageList items={items} />
			<div className={s.flexCenter}>
				<button onClick={handleChangePage} className={s.btn}>
					Load more
				</button>
			</div>
		</>
	)
}
