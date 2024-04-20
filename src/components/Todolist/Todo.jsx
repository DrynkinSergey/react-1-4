export const Todo = ({ item, handleDeleteTodo }) => {
	return (
		<li>
			<p>{item.title}</p>
			<button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
		</li>
	)
}
