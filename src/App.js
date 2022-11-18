import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Article from './pages/Article/Article'
import Category from './pages/Category/Category'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
  return (
    <>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/article/:id' element={<Article />} />
      <Route path='/category/:id' element={<Category />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App