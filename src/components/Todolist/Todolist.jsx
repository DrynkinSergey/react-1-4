import { useEffect, useState } from 'react'
import { AddForm } from './AddForm'
import { List } from './List'
import { nanoid } from 'nanoid'
import { toast } from 'react-toastify'

export const Todolist = () => {
	const [todos, setTodos] = useState(() => {
		const savedTodos = JSON.parse(window.localStorage.getItem('todos'))
		if (savedTodos?.length) {
			return savedTodos
		}
		return []
	})
	const [sortedType, setSortedType] = useState('ASC')

	useEffect(() => {
		window.localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleDeleteTodo = id => {
		setTodos(prev => prev.filter(item => item.id !== id))
	}

	const handleChangeTitle = id => {
		console.log(id)
		const newTitle = prompt('Enter new title')
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, todo: newTitle } : item)))
	}

	const getPriority = status => {
		switch (status) {
			case 'high':
				return 3
			case 'normal':
				return 2
			case 'low':
				return 1
			default:
				break
		}
	}
	const handleAddTodo = (title, status) => {
		setTodos(prev => [
			...prev,
			{ id: nanoid(), todo: title, completed: false, status: status, priority: getPriority(status) },
		])
	}

	const handleChangeStatus = (id, status) => {
		console.log(id, status)
		toast.info(`Status changed to ${status}`)
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, status, priority: getPriority(status) } : item)))
	}

	const handleToggleTodo = id => {
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}

	return (
		<div>
			<AddForm handleAddTodo={handleAddTodo} />
			<div className='list'>
				<List
					handleChangeTitle={handleChangeTitle}
					handleChangeStatus={handleChangeStatus}
					title='Todos'
					handleToggleTodo={handleToggleTodo}
					todos={todos}
					handleDeleteTodo={handleDeleteTodo}
				/>
			</div>
		</div>
	)
}
