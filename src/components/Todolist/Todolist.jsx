import { useState } from 'react'
import { AddForm } from './AddForm'
import { List } from './List'
import { nanoid } from 'nanoid'

export const Todolist = () => {
	const [todos, setTodos] = useState([
		{ id: '1', title: 'Подивись серіал', completed: false },
		{ id: '2', title: 'Подивись фільм', completed: false },
		{ id: '3', title: 'Сходити на прогулянку', completed: false },
		{ id: '4', title: 'Купити віскас', completed: false },
	])

	const handleDeleteTodo = id => {
		console.log(id)
		// 1. Використати функцію сеттер (setTodos)
		// 2. Пробіжатись по массиву todos
		// 3. На кожній ітерації перевірити чи співпадає айді
		// 4. Якщо так - видалити елемент, якщо ні - нічого не робити

		setTodos(prev => prev.filter(item => item.id !== id))
	}

	return (
		<div>
			<h1>Todolist</h1>
			<AddForm />
			<List todos={todos} handleDeleteTodo={handleDeleteTodo} />
		</div>
	)
}
