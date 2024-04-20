import React from 'react'
import { MdDeleteForever } from 'react-icons/md'

export const NotesList = ({ notes, deleteNote }) => {
	return (
		<ul>
			{notes.map(item => (
				<li key={item.id}>
					<h3>{item.title}</h3>
					<p>{item.desc}</p>
					<button onClick={() => deleteNote(item.id)}>
						<MdDeleteForever size={48} color='red' />
					</button>
				</li>
			))}
		</ul>
	)
}
