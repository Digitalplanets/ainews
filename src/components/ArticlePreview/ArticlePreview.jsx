import React from 'react'
import { Link } from 'react-router-dom'
import './ArticlePreview.Style.css'

const ArticlePreview = ({img, category, title, previewText}) => {
    function articleUrl(){
        let url = title.replace(/[^a-zA-Z0-9 ]/g, '')
        return url = url.split(' ').join('-')
        // console.log(url = url.split(' ').join('-'))
      }
      function categoryUrl(){
        let url = category.replace(/[^a-zA-Z0-9 ]/g, '')
        return url = url.split(' ').join('-')
      }
  return (
    <section className='article-preview-container'>
      <div className="article-preview-content-wrapper">
          <Link 
          role='figure'
          to={`/article/${articleUrl()}`}
          className='article-preview-img-container'>
          <img 
          src={img} 
          className='article-preview-img' 
          alt={title}
          />
          </Link>
          <Link
          role='link'
          to={`/category/${categoryUrl()}`}
          className='article-preview-category'>{category}</Link>
          <Link
          role='link' 
          to={`/article/${articleUrl()}`}
          className='article-preview-title'>{title}</Link>
          <p className='article-preview-previewText'>{previewText}</p>
          <Link 
          role='button'
          to={`/article/${articleUrl()}`}
          className='read-story-link'>Read Story
          </Link>
      </div>
    </section>
  )
}

export default ArticlePreview