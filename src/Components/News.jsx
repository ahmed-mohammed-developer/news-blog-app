import React from 'react';
import Weather from './Weather';
import Calender from './Calender';
import './News.css'

const News = () => {
  return (
    <div className='news'>
      <header className="news-header">News Header</header>
      <div className="news-content">
        <div className="navbar">
            <div className="user">User</div>
            <nav className="categories">Categoris</nav>
        </div>
        <div className="news-section">
            <div className="headline">Head Line</div>
            <div className="news-grid">News Grid</div>
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
