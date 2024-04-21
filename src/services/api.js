import axios from 'axios'
import { api } from '../config'

export const fetchTodos = async skip => {
	const res = await axios.get(`https://dummyjson.com/todos?limit=10&skip=${skip}`)
	return res.data
}

export const fetchPexelsImages = async page => {
	const res = await api.get(`curated?page=${page}`)
	console.log(res.data)
	return res.data
}

export const fetchPexelsImagesByQuery = async (page, query) => {
	const res = await api.get(`search?page=${page}&query=${query}`)
	return res.data
}

// export const fetchTodosSync = () => {
// 	axios.get('https://dummyjson.com/todos').then(res => {
// 		console.log(res.data)
// 	})
// 	console.log('done')
// }
