import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { articleData } from '../../data';
import '../Category/Category.Style.css'
import Header from '../../components/Header/Header';
import Articles from '../../components/ArticlePreview/ArticlePreview';
import Footer from '../../components/Footer/Footer';
import PageTransition from '../../components/Transitions/PageTransition';

const Category = () => {
  const [articles, setArticles] = useState([]);
    useEffect(() => {
        setArticles(articleData)
    }, [])

    const  { id } = useParams()
  return (
    <>
      <PageTransition />
      <Header />
      <main className='category-container'>
          <h1 className='category-title'>{id}</h1>
          <section className='article-preview-container'>
            {articles.filter(articles => articles.category === id)
            .map(({img, category, title, previewText}, id) => {
              return (
                <Articles
                  key={id}
                  img={img}
                  category={category}
                  title={title}
                  previewText={previewText}
                />
              )
            })}
            </section>
      </main>
      <Footer />
    </>
  )
}

export default Category