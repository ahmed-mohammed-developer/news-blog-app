import React, { useEffect, useState } from 'react';
import Weather from './Weather';
import Calender from './Calender';
import './News.css';
import userImg from '../assets/images/user.jpg';
import noImg from '../assets/images/no-img.png';
import axios from 'axios';

const categories = [
  'general',
  'world',
  'business',
  'technology',
  'enterainment',
  'sports',
  'science',
  'health',
  'nation'
]

const News = () => {
  const [headline1, setHeadline] = useState(null);
  const [news, setNwes] = useState([]);
  const [selectCategory, setSelectedCategory] = useState('general');
  const [searchInput, setInputSearch] = useState('')
  const [searchQuery, setInputQuery] = useState('')


  useEffect(() => {
    const fetchNews = async () => {
      let url = `https://gnews.io/api/v4/top-headlines?category=${selectCategory}&lang=en&apikey=708c454eb8d5da769be0225ac1b62bd5`;

     if(searchQuery){
      url = ` https://gnews.io/api/v4/search?q=${searchQuery}&lang=en&apikey=708c454eb8d5da769be0225ac1b62bd5`
     }

      const response = await axios.get(url);
      const fetchedNews = response.data.articles;

      fetchedNews.forEach((article) => {
        if(!article.image) {
          article.image = noImg;
        }
      })
      setHeadline(fetchedNews[0])
      setNwes(fetchedNews.slice(1, 7))

    }
    fetchNews()
  }, [selectCategory, searchQuery])

  const handleCategoryClick = (e, category) => {
    e.preventDefault()
    setSelectedCategory(category)
  }
  const headleSearch = (e) => {
      e.preventDefault()
      setInputQuery(searchInput)
      setInputSearch('')
  }

  return (
    <div className='news'>
      <header className="news-header"><h1 className="logo">News & Blogs</h1> 
      <div className="search-bar">
        <form onSubmit={headleSearch}>
          <input type="text" placeholder='Search News... ' value={searchInput} onChange={(e) =>
            setInputSearch(e.target.value)
          }/>
          <button type='submit'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      </header>
      <div className="news-content">
        <div className="navbar">
            <div className="user">
              <img src={userImg} alt="User Image" />
              <p>Mary's Blog</p>
            </div>
            <nav className="categories">
              <h1 className="nav-heading">Categories</h1>
              <div className="nav-links">
                {categories.map((category) => (
                                  <a
                                   href="#"
                                    key={category}
                                     className='nav-link'
                                     onClick={(e) => handleCategoryClick(e, category)}
                                     >
                                    {category}
                                  </a>

                ))}
                <a href="#" className='nav-link'>Bockmarks 
                <i className="fa-regular fa-bookmark"></i>
                </a>
              </div>
            </nav>
        </div>
        <div className="news-section">
          {headline1 && (
            <div className="headline">
            <img src={headline1.image || noImg} alt={headline1.title} />
            <h2 className="headline-title">
              {headline1.title}
            <i className="fa-regular fa-bookmark bookmark"></i>
            </h2>
          </div>
          )}
            
            <div className="news-grid">
              {news.map((article, index) => ( 
                <div key={index} className="news-grid-item">
              <img src={article.image || noImg} alt={article.title} />
              <h3> 
              {article.title}
              <i className="fa-regular fa-bookmark bookmark"></i>
              </h3>
              </div>))}
            </div>
        </div>
        <div className="my-blogs">
           My Blogs
        </div>
        <div className="weather-calender">
        <Weather />
        <Calender />
        </div>
        
      </div>
      <footer className="news-footer">Footer</footer>
    </div>
  )
}

export default News
