import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='notFound'>
			<img src='https://static-00.iconduck.com/assets.00/9-404-error-illustration-2048x908-vp03fkyu.png' alt='404' />
			<h1>Page not found...</h1>
			<Link to='/'>Home</Link>
		</div>
	)
}

export default NotFound
