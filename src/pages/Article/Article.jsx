import React, { useEffect, useState } from 'react'
import { articleData } from '../../data';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header'
import ArticleContent from '../../components/ArticleContent/ArticleContent';
import Footer from '../../components/Footer/Footer';
import PageTransition from '../../components/Transitions/PageTransition';

const Article = () => {
  const [articles, setArticles] = useState([]);
    useEffect(() => {
        setArticles(articleData)
    }, [])
    let { id } = useParams();
    id = id.split('-').join(' ');
    console.log(id);
  return (
    <>
      <PageTransition />
      <Header />
      <main className='article-container'>
        {articles.filter(articles => id === articles.title.replace(/[^a-zA-Z0-9 ]/g, ''))
        .map(({img, category, title, previewText}, id) => {
          return (
            <ArticleContent
            key={id}
            img={img}
            category={category}
            title={title}
            previewText={previewText}
            />
          )
        })}
      </main>
      <Footer />
    </>
  )
}

export default Article