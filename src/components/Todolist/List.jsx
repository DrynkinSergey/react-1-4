import { Todo } from './Todo'

export const List = ({ todos, handleDeleteTodo }) => {
	return (
		<ul>
			{/* 2[1,3,4,5,6,7] */}
			{todos.map(item => (
				<Todo key={item.id} item={item} handleDeleteTodo={handleDeleteTodo} />
			))}
		</ul>
	)
}
