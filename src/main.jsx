import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


const result = createRoot(document.getElementById('root'))

result.render(
  <App/>
)