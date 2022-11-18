import React from 'react'
import '../HeroArticle/HeroArticle.Style.css'
import { Link } from 'react-router-dom'

const HeroArticle = ({img, category, title, previewText}) => {
    function articleUrl() {
        let url = title.replace(/[^a-zA-Z0-9 ]/g, '')
        return url = url.split(' ').join('-')
      }
      function categoryUrl() {
        let url = category.replace(/[^a-zA-Z0-9 ]/g, '')
        return url = url.split(' ').join('')
      }
  return (
    <section className='hero-container'>
      <div className="hero-article-wrapper left">
        <Link
        role='figure'
        to={`/article/${articleUrl()}`} 
        className='hero-article-img-container'>
        <img 
        src={img} 
        className='hero-article-img' 
        alt={title}
        />
        </Link>
        <div className="hero-article-text-container right">
          <Link
          role='link' 
          to={`/category/${categoryUrl()}`} 
          className='hero-article-category'>{category}</Link>
          <Link
          role='link'
          to={`/article/${articleUrl()}`} 
          className='hero-article-title'>{title}</Link>
          <p className='hero-article-preview-text'>{previewText}</p>
          <Link 
          role='button' 
          to={`/article/${articleUrl()}`} 
          className='read-more-btn'>Read More</Link>
        </div>
      </div>
    </section>
  )
}

export default HeroArticle