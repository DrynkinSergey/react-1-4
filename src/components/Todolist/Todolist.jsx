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

	useEffect(() => {
		window.localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const handleDeleteTodo = id => {
		console.log(id)
		// 1. Використати функцію сеттер (setTodos)
		// 2. Пробіжатись по массиву todos
		// 3. На кожній ітерації перевірити чи співпадає айді
		// 4. Якщо так - видалити елемент, якщо ні - нічого не робити

		setTodos(prev => prev.filter(item => item.id !== id))
	}

	const handleAddTodo = (title, status) => {
		// alert(title)
		setTodos(prev => [...prev, { id: nanoid(), title: title, completed: false, status: status }])
	}

	const handleChangeStatus = (id, status) => {
		console.log(id, status)
		toast.info(`Status changed to ${status}`)
		setTodos(prev => prev.map(item => (item.id === id ? { ...item, status } : item)))
	}

	const handleToggleTodo = id => {
		console.log(id)
		//1. Використати функцію сеттер (setTodos)
		//2. Пробіжатись по масиву todos
		//3. На кожній ітерації перевіряємо айді елемента з тим, що ми хочемо змінити
		//4. Якщо айді співпало - змінюємо completed на протилежне значення, якщо ні - повертаємо ітем

		setTodos(prev => prev.map(item => (item.id === id ? { ...item, completed: !item.completed } : item)))
	}

	const statusLists = [
		{ title: 'High', data: todos.filter(item => item.status === 'high') },
		{ title: 'Normal', data: todos.filter(item => item.status === 'normal') },
		{ title: 'Low', data: todos.filter(item => item.status === 'low') },
	]

	const completedStatus = [
		{ title: 'All', data: todos },
		{ title: 'Completed', data: todos.filter(item => item.completed) },
		{ title: 'Active', data: todos.filter(item => !item.completed) },
	]

	return (
		<div>
			<h1>Todolist</h1>
			<AddForm handleAddTodo={handleAddTodo} />
			<div className='list'>
				{statusLists.map(column => (
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
			<hr />
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
