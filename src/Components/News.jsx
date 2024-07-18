import React, { useEffect, useState } from 'react';
import Weather from './Weather';
import Calender from './Calender';
import './News.css';
import userImg from '../assets/images/user.jpg';
import noImg from '../assets/images/no-img.png';


import axios from 'axios';
import NewModal from './NewModal';
import BookMarks from './BookMarks';

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

const News = ({onShowBlogs, blogs}) => {
  const [headline1, setHeadline] = useState(null);
  const [news, setNwes] = useState([]);
  const [selectCategory, setSelectedCategory] = useState('general');
  const [searchInput, setInputSearch] = useState('')
  const [searchQuery, setInputQuery] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedArticale, setSelectedArtical] = useState(null)
  const [bookmarks, setBookMarks] = useState([])
  const [showBookmarksModal, setshowBookmarksModal] = useState(false)


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

      const savedBokmarks = JSON.parse(localStorage.getItem("bookmarks")) || []
      setBookMarks(savedBokmarks)

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

   const heandleArtical = (articale2) => {
    setSelectedArtical(articale2)
    setShowModal(true)
    console.log(articale2)
   }

   const bookmarkClickHandel = (article) => {
    setBookMarks((prevBookmarks) => {
      const updateBookmarks = prevBookmarks.find((bookmark) => bookmark.title === article.title) ? prevBookmarks.filter((bookmark) => bookmark.title !== article.title) :[...prevBookmarks, article]
      localStorage.setItem("bookmarks", JSON.stringify((updateBookmarks)))
      return updateBookmarks
    })
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
            <div className="user" onClick={onShowBlogs}>
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
                <a href="#" className='nav-link' onClick={() => setshowBookmarksModal(true)}>Bockmarks 
                <i className="fa-solid fa-bookmark"></i>
                </a>
              </div>
            </nav>
        </div>
        <div className="news-section">
          {headline1 && (
            <div className="headline" onClick={() => 
              heandleArtical(headline1)
            }>
            <img src={headline1.image || noImg} alt={headline1.title} />
            <h2 className="headline-title">
              {headline1.title}
            <i className={`
             ${bookmarks.some((bookmark) =>
               bookmark.title === headline1.title) 
               ? 'fa-solid' 
               : 'fa-regular'
               } fa-bookmark bookmark`}
              onClick={(e) => {
               e.stopPropagation()
               bookmarkClickHandel(headline1)
              }}
              ></i>
            </h2>
          </div>
          )}
            
            <div className="news-grid">
              {news.map((article, index) => ( 
                <div key={index} className="news-grid-item" onClick={() => 
                  heandleArtical(article)
                }>
              <img src={article.image || noImg} alt={article.title} />
              <h3> 
              {article.title}
              <i className={` ${bookmarks.some((bookmark) => bookmark.title === article.title) ? "fa-solid" : "fa-regular" } fa-bookmark bookmark`}
              onClick={(e) => {
               e.stopPropagation()
               bookmarkClickHandel(article)
              }}
              ></i>
              </h3>
              </div>))}
            </div>
        </div>
        <NewModal show={showModal} articale2={selectedArticale} onClose={() => setShowModal(false)} />
          <BookMarks show={showBookmarksModal} bookmarks={bookmarks} onClose={() => 
            setshowBookmarksModal(false)}
            onSetlectArtical={heandleArtical}
            onDeleteBookmark={bookmarkClickHandel}
            />
        <div className="my-blogs">
          <h1 className="my-blog-heading">My Blogs</h1>
          <div className="blog-posts">
            {blogs.map((blog, index) => (
              <div key={index}
              className="blog-post">
                    <img src={blog.image  || noImg} alt={blog.title}/>
                    <h3>{blog.title}</h3>
                   {/* <p>{blog.content}</p> */}
                    <div className="post-buttons">
                <button className="edit-post">
                  <i className="bx bxs-edit"></i>
                </button>
                <button className="delete-post">
                  <i className="bx bxs-x-circle"></i>
                </button>
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className="weather-calender">
        <Weather />
        <Calender />
        </div>
        
      </div>
      <footer className="news-footer">
        <p>
          <span>News & Blogs App</span>
        </p>
        <p>
          &copy; All Right Reserved. By Code And Create
        </p>
      </footer>
    </div>
  )
}

export default News
