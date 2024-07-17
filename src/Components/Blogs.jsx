import React from 'react'
import userImg from '../assets/images/user.jpg'
import './Blogs.css'

const Blogs = () => {
  return (
   <div className="blogs">
    <div className="blogs-left">
        <img src={userImg} alt="" />
    </div>
    <div className="blogs-right">
{/*<button className="post-btn">Creat New Post</button> */}
<div className="blogs-right-form">
    <h1>New Post</h1>
    <form>
        <div className="img-upload">
    <label htmlFor="file-upload"
     className="file-upload">
        <i className="bx bx-upload"></i> Upload Image
     </label>
     <input type="file"  id="file-upload" />
     </div>
     <input type="text"  placeholder='Add Title (Max 60 Characters' className='title-input' />
     <textarea  className='text-input' placeholder='Add Text'></textarea>
     <button className="submit-btn" type='submit'>
        Submit Button
     </button>
     </form>
</div>
        <button className="blogs-close-btn">Back <i className="bx bx-chevron-right"></i></button>
    </div>
  </div>
  )
}

export default Blogs
