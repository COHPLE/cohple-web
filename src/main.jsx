import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PrivacyPolicy from './privacy.jsx'
import './index.css'

const path = window.location.pathname

let Page

if (path === "/privacy") {
  Page = PrivacyPolicy
} else {
  Page = App
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Page />
  </React.StrictMode>,
)