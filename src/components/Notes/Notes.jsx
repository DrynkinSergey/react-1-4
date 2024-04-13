import { useState } from 'react'
import { AddForm } from '../AddForm/AddForm'
import { nanoid } from 'nanoid'

export const Notes = () => {
	const [notes, setNotes] = useState([
		{ id: '1', title: 'Прочитав книгу', desc: 'Інформація про книгу' },
		{ id: '2', title: 'Поглянути фільм', desc: 'Інформація про фільм' },
		{ id: '3', title: 'Поглянути сайт', desc: 'Інформація про сайт' },
		{ id: '4', title: 'Погодувати кота', desc: 'Купити віскас ' },
	])

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

	return (
		<div>
			<h2>Notes</h2>
			<p>Всього нотаток: {notes.length}</p>
			<AddForm addNote={addNote} />
			<ul>
				{notes.map(item => (
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
