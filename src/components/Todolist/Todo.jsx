import clsx from 'clsx'

export const Todo = ({ handleChangeTitle, item, handleDeleteTodo, handleToggleTodo, handleChangeStatus }) => {
	const statuses = ['high', 'normal', 'low']

	return (
		<li
			className={clsx('todo', {
				red: item.status === 'high',
				green: item.status === 'normal',
				yellow: item.status === 'low',
			})}
		>
			<p>{item.id}.</p>
			<input onChange={() => handleToggleTodo(item.id)} checked={item.completed} type='checkbox' />
			<p onClick={() => handleChangeTitle(item.id)}>{item.todo}</p>
			<div>
				<select value={item.status} onChange={e => handleChangeStatus(item.id, e.target.value)}>
					{statuses.map(status => (
						<option key={status} value={status}>
							{status}
						</option>
					))}
				</select>
				<button onClick={() => handleDeleteTodo(item.id)}>Delete</button>
			</div>
		</li>
	)
}
