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
		console.log(newTitle)
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, title: newTitle } : item)))
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
			{ id: nanoid(), title: title, completed: false, status: status, priority: getPriority(status) },
		])
	}

	const getSortedData = data => {
		if (sortedType === 'DESC') {
			return data.sort((a, b) => a.priority - b.priority)
		}
		return data.sort((a, b) => b.priority - a.priority)
	}

	const handleChangeStatus = (id, status) => {
		console.log(id, status)
		toast.info(`Status changed to ${status}`)
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, status, priority: getPriority(status) } : item)))
	}

	const handleToggleTodo = id => {
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}

	const statusLists = [
		{ title: 'High', data: todos.filter(item => item.status === 'high') },
		{ title: 'Normal', data: todos.filter(item => item.status === 'normal') },
		{ title: 'Low', data: todos.filter(item => item.status === 'low') },
	]

	const completedStatus = [
		{ title: 'All', data: getSortedData(todos) },
		{ title: 'Completed', data: getSortedData(todos.filter(item => item.completed)) },
		{ title: 'Active', data: getSortedData(todos.filter(item => !item.completed)) },
	]

	return (
		<div>
			<h1>Todolist</h1>
			<AddForm handleAddTodo={handleAddTodo} />
			<div className='list'>
				{statusLists.map(column => (
					<List
						handleChangeTitle={handleChangeTitle}
						key={column.title}
						handleChangeStatus={handleChangeStatus}
						title={column.title}
						handleToggleTodo={handleToggleTodo}
						todos={column.data}
						handleDeleteTodo={handleDeleteTodo}
					/>
				))}
			</div>
			<hr />
			<h2>Sorted type: {sortedType} </h2>
			<select value={sortedType} onChange={e => setSortedType(e.target.value)}>
				<option value='ASC'> ASC</option>
				<option value='DESC'> DESC</option>
			</select>
			<div className='list'>
				{completedStatus.map(column => (
					<List
						key={column.title}
						handleChangeStatus={handleChangeStatus}
						title={column.title}
						handleToggleTodo={handleToggleTodo}
						todos={column.data}
						handleDeleteTodo={handleDeleteTodo}
					/>
				))}
			</div>
		</div>
	)
}
