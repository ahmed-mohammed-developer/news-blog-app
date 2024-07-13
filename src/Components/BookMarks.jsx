import React from 'react'
import './Modal.css'
import './Bookmarks.css'
import noImg from '../assets/images/no-img.png'

const BookMarks = ({show, bookmarks, onClose, onSetlectArtical, onDeleteBookmark}) => {
  if(!show) {
    return null
  }
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <span className="class-button" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
        </span>
        <h2 className="bookmarks-heading">
          BookMarks News
        </h2>
        <div className="bookmarks-list">
          {bookmarks.map((articla3, index) => (
          <div className="bookmark-item" key={index}
          onClick={() => onSetlectArtical(articla3)} >
          <img src={articla3.image || noImg} alt={articla3.title} />
          <h3>{articla3.title}</h3>
          <span className="delete-button" onClick={(e) => {
            e.stopPropagation()
            onDeleteBookmark(articla3)
          }}>
            <i className="fa-regular fa-circle-xmark"></i>
          </span>
        </div>

          ))}
          
        </div>
      </div>
    </div>
  )
}

export default BookMarks
