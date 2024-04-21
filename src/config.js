import axios from 'axios'

export const api = axios.create({
	baseURL: 'https://api.pexels.com/v1/',
	headers: {
		Authorization: import.meta.env.VITE_TOKEN,
	},
})
