import { useNavigate } from 'react-router-dom'
import s from './PexelsApp.module.css'
const ImageItem = ({ item }) => {
	const navigate = useNavigate()
	return (
		<li onClick={() => navigate(`${item.id}`)} className={s.item}>
			<div>
				<img src={item.src.landscape} />
			</div>
			<p>{item.alt}</p>
		</li>
	)
}

export default ImageItem
