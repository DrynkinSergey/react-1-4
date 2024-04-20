import clsx from 'clsx'
import s from './Greetings.module.css'

const Greetings = ({ age = 11, username, isOnline = false, message }) => {
	return (
		<section>
			<h1 className={s.title}>Hello, {username}</h1>
			<h2 className={clsx(s.age, age > 18 ? s.center : s.start, s.bold)}>Тобі {age}</h2>
			<h3>{message}</h3>
			{isOnline === true ? <h3>Online</h3> : <h3>Offline</h3>}
			{age >= 18 ? <h3>Ви є повнолітнім</h3> : <h3>Ви є дитиною</h3>}
		</section>
	)
}

export default Greetings
