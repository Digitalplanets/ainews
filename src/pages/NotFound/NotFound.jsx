import React from 'react'
import { Link } from 'react-router-dom'
import '../NotFound/NotFound.Style.css'
import Header from '../../components/Header/Header'
import PageTransition from '../../components/Transitions/PageTransition'

const NotFound = () => {
  return (
    <>
    <PageTransition />
    <Header />
      <div className='notfound-container'>
        <Link 
        to='/' 
        className='notfound-text'>
          <h1 className='notfound-title'>404</h1>
          <div className='divider'></div>
          <p className='notfound-desc'>This page could not be found.</p>
        </Link>
      </div>
    </>
  )
}

export default NotFound