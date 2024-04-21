import { useState } from 'react'
import { Flip, toast } from 'react-toastify'

export const AddForm = ({ handleAddTodo }) => {
	const [title, setTitle] = useState('')
	const [status, setStatus] = useState('normal')
	const handleSubmit = e => {
		e.preventDefault()
		if (!title) {
			return toast.warning('Please enter title', { transition: Flip })
		}
		handleAddTodo(title, status)
		toast.success('Todo added 🔥')
		setTitle('')
	}
	return (
		<form onSubmit={handleSubmit}>
			<input type='text' value={title} onChange={e => setTitle(e.target.value)} />
			<select value={status} onChange={e => setStatus(e.target.value)}>
				<option value='high'>High</option>
				<option value='normal'>Normal</option>
				<option value='low'>Low</option>
			</select>
			<button>Add todo</button>
		</form>
	)
}
