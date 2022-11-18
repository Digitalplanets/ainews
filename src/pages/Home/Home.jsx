import {React, useState, useEffect} from 'react';
import { articleData } from '../../data';
import PageTransition from '../../components/Transitions/PageTransition';
import Header from '../../components/Header/Header';
import HeroArticle from '../../components/HeroArticle/HeroArticle';
import Articles from '../../components/ArticlePreview/ArticlePreview';
import Footer from '../../components/Footer/Footer';

const Home = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        setArticles(articleData)
    }, [])
  return (
    <>
      <PageTransition />
      <Header />
      {articles.filter(articles => articles.articleId === 1).map(({img, category, title, previewText}, id) => {
        return(
          <HeroArticle 
            key={id}
            img={img}
            category={category}
            title={title}
            previewText={previewText}
          />
        )
      })}
      <section className='article-preview-container'>
        {articles.map(({img, category, title, previewText}, id) => {
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
      <Footer />
    </>
  )
}

export default Home