import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { fetchPexelsImageById } from '../services/api'
import s from '../components/pexels/PexelsApp.module.css'
const SingleImage = () => {
	const { imageId } = useParams()
	const [image, setImage] = useState(null)

	useEffect(() => {
		const getData = async () => {
			try {
				const data = await fetchPexelsImageById(imageId)
				setImage(data)
			} catch (error) {
				console.log(error.message)
			}
		}
		getData()
	}, [imageId])

	if (!image) {
		return <div>Loading</div>
	}
	return (
		<div style={{ backgroundColor: image.avg_color }} className={s.single}>
			<img src={image.src.landscape} />
			<div className={s.content}>
				<h1>{image.alt}</h1>
				<p>{image.photographer}</p>
				<p>Avg color: {image.avg_color}</p>
				<div>
					<Link to='/images'>Back</Link>
				</div>
			</div>
		</div>
	)
}

export default SingleImage
