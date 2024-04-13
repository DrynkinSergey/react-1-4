export const SearchForm = ({ changeFilter }) => {
	return (
		<div>
			<input type='text' onChange={e => changeFilter(e.target.value)} />
		</div>
	)
}
