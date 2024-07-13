import React from 'react'
import './Modal.css'
import './Bookmarks.css'

import demoImg from '../assets/images/demo.jpg'

const BookMarks = () => {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <span className="class-button">
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">
          BookMarks News
        </h2>
        <div className="bookmarks-list">
          <div className="bookmark-item">
            <img src={demoImg} alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
          <div className="bookmark-item">
            <img src={demoImg} alt="" />
            <h3>Lorem ipsum dolor sit amet.</h3>
            <span className="delete-button">
              <i className="fa-regular fa-circle-xmark"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookMarks
