import React, { useEffect, useState } from 'react';
import News from './Components/News'
import Blogs from './Components/Blogs'


const App = () => {
  const [showNews, setShowNews] = useState(true)
  const [showBlogs, setShowBlogs] = useState(false)
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => {
    const savedBlogs = JSON.parse(localStorage.getItem("blogs")) || []
    setBlogs(savedBlogs)
  }, [])

  const handlCreateBlog = (newBlog) => {
    setBlogs((prevBlogs) => {
      const updateBlogs = [...prevBlogs, newBlog]
      localStorage.setItem("blogs", JSON.stringify(updateBlogs))
      return updateBlogs
    } )
  }

  const handleShowBlogs = () => {
    setShowNews(false)
    setShowBlogs(true)
  }

  const handleBackToNews = () => {
    setShowNews(true)
    setShowBlogs(false)
  } 
  return (
    <div className='container'>
      <div className='news-blogs-app'>
        {showNews &&<News onShowBlogs={handleShowBlogs} blogs={blogs} /> }
        {showBlogs &&<Blogs onBack={handleBackToNews} onCreateBlog={handlCreateBlog} /> }
       
      </div>
    </div>
  )
}

export default App
