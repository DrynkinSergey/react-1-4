import s from './PexelsApp.module.css'
const ImageItem = ({ item }) => {
	return (
		<li className={s.item}>
			<div>
				<img src={item.src.landscape} />
			</div>
			<p>{item.alt}</p>
		</li>
	)
}

export default ImageItem
