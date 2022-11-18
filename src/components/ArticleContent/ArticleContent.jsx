import React from 'react'
import { Link } from 'react-router-dom'
import './ArticleContent.Style.css'

const ArticleContent = ({img, category, title, previewText}) => {
    function articleUrl(){
        let url = title.replace(/[^a-zA-Z0-9 ]/g, '')
        return url = url.split(' ').join('-')
      }
    function categoryUrl(){
        let url = category.replace(/[^a-zA-Z0-9 ]/g, '')
        return url = url.split(' ').join('-')
    }
  return (
      <section className='article-content-container'>
        <div className="article-header-wrapper">
          <div className="article-header-text">
            <Link 
            to={`/category/${categoryUrl()}`}
            role='link' 
            className='article-header-text_category'>{category}</Link>
            <h3
            to={`/article/${articleUrl()}`} 
            className='article-header-text_title'>{title}</h3>
            <p className='article-header-text_preview-text'>{previewText}</p>
          </div>
          <figure role='figure' className='article-header-img'>
            <img src={img} alt={title}/>
          </figure>
        </div>
        <article className="article-paragraph-wrapper">
          <p className='article-paragraph first-paragraph'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Facilisis leo vel fringilla est ullamcorper eget nulla facilisi.
          In cursus turpis massa tincidunt dui ut ornare lectus. Interdum
          velit laoreet id donec.
          </p>
          <br />
          <br />
          <p className='article-paragraph'>
          Vel turpis nunc eget lorem. Posuere ac ut consequat semper
          viverra nam libero justo laoreet. Quis lectus nulla at volutpat
          diam ut venenatis tellus in. Magna eget est lorem ipsum dolor
          sit amet consectetur adipiscing. Enim nulla aliquet porttitor
          lacus luctus accumsan tortor posuere ac. Sollicitudin aliquam
          ultrices sagittis orci a. Elementum integer enim neque volutpat ac.
          </p>
          <br />
          <br />
          <p className="article-paragraph">
          Gravida rutrum quisque non tellus orci ac auctor augue.
          Massa sed elementum tempus egestas sed sed risus. Sit amet nulla
          facilisi morbi tempus iaculis urna id volutpat. Adipiscing
          commodo elit at imperdiet dui accumsan sit amet. A arcu cursus
          vitae congue mauris. Felis donec et odio pellentesque diam
          volutpat commodo sed.
          </p>
          <br />
          <br />
          <p className="article-paragraph">
          Integer feugiat scelerisque varius morbi enim nunc faucibus.
          In iaculis nunc sed augue lacus. At varius vel pharetra vel
          turpis nunc eget. Gravida in fermentum et sollicitudin. Nulla
          at volutpat diam ut venenatis tellus in metus. Tempor commodo
          ullamcorper a lacus vestibulum.
          </p>
        </article>

    </section>
  )
}

export default ArticleContent