import { useState } from 'react'
import s from './PexelsApp.module.css'
const SearchBar = ({ handleChangeQuery }) => {
	const [query, setQuery] = useState('')
	const handleSubmit = e => {
		e.preventDefault()
		handleChangeQuery(query)
	}
	return (
		<form onSubmit={handleSubmit} className={s.form}>
			<input value={query} onChange={e => setQuery(e.target.value)} type='text' placeholder='Enter search value' />
			<button className={s.btn}>Search</button>
		</form>
	)
}

export default SearchBar
