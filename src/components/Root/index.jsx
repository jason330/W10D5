import React from 'react'
import { BrowserRouter } from 'react-router-dom/'; //cjs/react-router-dom.min
// import BrowserRouter from 'react-router-dom'
import App from '../../App'

function Root () {
  console.log('test2')
  return (
    <BrowserRouter>
      <App />    
    </BrowserRouter>
  )
}

export default Root;