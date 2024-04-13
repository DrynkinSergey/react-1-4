import { useEffect, useState } from 'react'
import { AddForm } from '../AddForm/AddForm'
import { nanoid } from 'nanoid'
import { SearchForm } from '../SearchForm/SearchForm'

export const Notes = () => {
	const [notes, setNotes] = useState(() => {
		const savedNotes = JSON.parse(localStorage.getItem('notes'))
		if (savedNotes?.length) {
			return savedNotes
		}
		return [
			{ id: '1', title: 'Прочитав книгу', desc: 'Інформація про книгу' },
			{ id: '2', title: 'Поглянути фільм', desc: 'Інформація про фільм' },
			{ id: '3', title: 'Поглянути сайт', desc: 'Інформація про сайт' },
			{ id: '4', title: 'Погодувати кота', desc: 'Купити віскас ' },
		]
	})
	const [filter, setFilter] = useState('')

	useEffect(() => {
		console.log('Hello')
	}, [])

	useEffect(() => {
		console.log('filter', filter)
	}, [filter])

	useEffect(() => {
		window.localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	const deleteNote = id => {
		console.log(notes.filter(item => item.id !== id))
		setNotes(prev => prev.filter(item => item.id !== id))
	}

	const addNote = note => {
		const newNote = {
			title: note.title,
			desc: note.desc,
			id: nanoid(),
		}
		setNotes(prev => [...prev, newNote])
		console.log(newNote)
	}
	const changeFilter = value => {
		setFilter(value)
	}

	const getFilteredData = () => {
		return notes.filter(
			item =>
				item.title.toLowerCase().includes(filter.toLowerCase()) ||
				item.desc.toLowerCase().includes(filter.toLowerCase())
		)
	}

	const filteredData = getFilteredData()
	return (
		<div>
			<h2>Notes</h2>
			<p>Всього нотаток: {notes.length}</p>
			<AddForm addNote={addNote} />
			<SearchForm changeFilter={changeFilter} />
			<hr />
			<h2>Current filter: {filter}</h2>
			<ul>
				{filteredData.map(item => (
					<li key={item.id}>
						<h3>{item.title}</h3>
						<p>{item.desc}</p>
						<button onClick={() => deleteNote(item.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	)
}
