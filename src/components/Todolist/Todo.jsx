import clsx from 'clsx'

export const Todo = ({ item, handleDeleteTodo, handleToggleTodo, handleChangeStatus }) => {
	const statuses = ['high', 'normal', 'low']

	return (
		<li
			className={clsx('todo', {
				red: item.status === 'high',
				green: item.status === 'normal',
				yellow: item.status === 'low',
			})}
		>
			<input onChange={() => handleToggleTodo(item.id)} checked={item.completed} type='checkbox' />
			<p>{item.title}</p>
			<select value={item.status} onChange={e => handleChangeStatus(item.id, e.target.value)}>
				{statuses.map(status => (
					<option key={status} value={status}>
						{status}
					</option>
				))}
			</select>
			<button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
		</li>
	)
}
