import { useEffect, useState } from 'react'
import { AddForm } from '../AddForm/AddForm'
import { nanoid } from 'nanoid'
import { SearchForm } from '../SearchForm/SearchForm'
import { MdDeleteForever } from 'react-icons/md'
import { FcCommandLine } from 'react-icons/fc'
import { GrNotes } from 'react-icons/gr'
import { NotesList } from './NotesList'

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
		window.localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	const deleteNote = id => {
		setNotes(prev => prev.filter(item => item.id !== id))
	}

	const addNote = note => {
		const isExist = notes.find(item => item.title === note.title)
		if (isExist) {
			alert('Така нотатка вже існує')
			return
		}
		const newNote = {
			title: note.title,
			desc: note.desc,
			id: nanoid(),
		}
		setNotes(prev => [...prev, newNote])
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
			<h2>
				Notes <GrNotes size={48} color='violet' />
			</h2>
			<p>
				Всього нотаток <FcCommandLine size={48} />: {notes.length}
			</p>
			<AddForm addNote={addNote} />
			<SearchForm changeFilter={changeFilter} />
			<hr />
			<h2>Current filter: {filter}</h2>
			<NotesList deleteNote={deleteNote} notes={filteredData} />
		</div>
	)
}
