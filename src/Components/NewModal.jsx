import React from 'react'
import demoImg from '../assets/images/demo.jpg'
import './NewModal.css'

const NewModal = ({ show, articale2, onClose }) => {
    if(!show) {
        return null
    }
  return (
    <div className='modal-overlay'>
      <div className="modal-content">
        <span className="class-button" onClick={onClose} >
            <i className="fa-solid fa-xmark"></i>
        </span>
        {articale2 && (
            <>
            
            
            <img src={articale2.image} alt={articale2.title} className='modal-image' />
        <h2 className="modal-title">
            {articale2.title}
        </h2>
        <p className="modal-source">Source: {articale2.source.name}</p>
        <p className="modal-date">
            {new Date(articale2.publishedAt).toLocaleString('en-Us', {
                month: 'short',
                day: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })}
        </p>
        <p className="modal-content-text">
            {articale2.content}
        </p>
        <a href={articale2.url} target='_blank' rel='noopener noreferrer' className="read-more-link">Read More</a>
            
            </>
        )}
      
      </div>
    </div>
  )
}

export default NewModal
