import React from 'react'
import Feed from './components/feed'
import Post from './components/post'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='min-h-screen bg-gray-950 pt-20'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Feed />} />
        <Route path='/post' element={<Post />} />
      </Routes>

    </div>
  )
}

export default App