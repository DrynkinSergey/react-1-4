import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'modern-normalize'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<App />
		<ToastContainer autoClose={1500} theme='dark' />
	</BrowserRouter>
)
