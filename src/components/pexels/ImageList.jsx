import ImageItem from './ImageItem'
import s from './PexelsApp.module.css'
export const ImageList = ({ items }) => {
	return (
		<ul className={s.imageList}>
			{items.map(item => (
				<ImageItem key={item.id} item={item} />
			))}
		</ul>
	)
}
