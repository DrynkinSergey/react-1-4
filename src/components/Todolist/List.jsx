import { Todo } from './Todo'

export const List = ({ handleChangeTitle, todos, handleDeleteTodo, handleChangeStatus, handleToggleTodo, title }) => {
	return (
		<div>
			<h2 className='title'>{title}</h2>
			<h2 className='title'>Всього нотаток: {todos.length}</h2>
			{todos.length === 0 && <h2>Немає нотаток</h2>}
			<ul className='todoWrapper'>
				{todos.map(item => (
					<Todo
						key={item.id}
						item={item}
						handleChangeTitle={handleChangeTitle}
						handleChangeStatus={handleChangeStatus}
						handleDeleteTodo={handleDeleteTodo}
						handleToggleTodo={handleToggleTodo}
					/>
				))}
			</ul>
		</div>
	)
}
