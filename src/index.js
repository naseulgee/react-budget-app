import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

// root 를 생성하고 실질적으로 index.js 파일의 내용을 rendering 하도록 설정
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
