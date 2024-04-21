import { useNavigate } from 'react-router-dom'
import s from './PexelsApp.module.css'
import { FaRegBookmark } from 'react-icons/fa'
import { FaBookmark } from 'react-icons/fa'

const ImageItem = ({ item, handleAddToFav, favorites, remoteFromFav }) => {
	const navigate = useNavigate()
	const isExist = favorites.some(el => el.id === item.id)
	return (
		<li className={s.item}>
			<div className={s.bookmark}>
				{isExist ? (
					<button onClick={() => remoteFromFav(item)}>
						<FaBookmark />
					</button>
				) : (
					<button onClick={() => handleAddToFav(item)}>
						<FaRegBookmark />
					</button>
				)}
			</div>
			<div>
				<img onClick={() => navigate(`/images/${item.id}`)} src={item.src.landscape} />
			</div>
			<p>{item.alt}</p>
		</li>
	)
}

export default ImageItem
