import React from 'react'
import { createRoot } from 'react-dom/client'
import { ToastProvider } from './Toast'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ToastProvider>
    <App />
  </ToastProvider>
);
