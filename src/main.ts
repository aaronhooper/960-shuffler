import { createRoot } from 'react-dom/client'
import { createElement } from 'react'
import App from './App'
import './style.css'

const root = createRoot(document.getElementById('app')!)
const app = createElement(App, null, null)
root.render(app)
