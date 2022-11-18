import { React, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../Footer/Footer.Style.css'
import {articleData} from '../../data'

const Footer = () => {
  const [articles, setArticles] = useState([]);
    useEffect(() => {
        setArticles(articleData)
    }, [])
  return (
    <footer className='footer-container'>
      <div className="footer-container_top">
      <div className="footer-title-container">
      <NavLink
        role='link'
        to='/'
        className='footer-title'>
            HUEMAN
        </NavLink>
      <p className='footer-desc'>The worlds first artificial intelligence newspaper themed on black news.</p>
      </div>
      <ul className="footer-menu">
        <h3 className='footer-menu_title'>MORE FROM HUEMAN</h3>
          <div className="footer-menu_item-wrapper">
          {articles.map(({category}, id) => {
            return (
              <li 
            key={id}
            className='footer-menu_item'>
            <NavLink
            role='link'
            to={`/category/${category}`}
            className='footer-menu_link'>
                {category}
            </NavLink>
            </li>
            )
          })}
          </div>
      </ul>
      </div>
      <hr />
      <div className="footer-container_bottom">
        <small>© 2022 HUEMAN.</small>
      </div>
    </footer>
  )
}

export default Footer