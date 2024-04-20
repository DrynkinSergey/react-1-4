import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'modern-normalize'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
ReactDOM.createRoot(document.getElementById('root')).render(
	<>
		<App />
		<ToastContainer autoClose={1500} theme='dark' />
	</>
)
