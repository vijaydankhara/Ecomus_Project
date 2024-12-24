import React from 'react'
import "./index.css"
import Layout from './layout/Layout'
import ScrollToTop from 'react-scroll-to-top'


function App() {

  return (
    <>
      <div>
        <div className='scroll_bar'>
          <ScrollToTop smooth className='flex p-2 text-sm ' />

        </div>
        <Layout />
      </div>
    </>
  )
}

export default App
