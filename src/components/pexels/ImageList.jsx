import ImageItem from './ImageItem'
import s from './PexelsApp.module.css'
export const ImageList = ({ items, handleAddToFav, favorites = [], remoteFromFav }) => {
	return (
		<ul className={s.imageList}>
			{items.map(item => (
				<ImageItem
					favorites={favorites}
					key={item.id}
					remoteFromFav={remoteFromFav}
					handleAddToFav={handleAddToFav}
					item={item}
				/>
			))}
		</ul>
	)
}
