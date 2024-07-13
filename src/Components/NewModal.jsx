import React from 'react'
import demoImg from '../assets/images/demo.jpg'
import './NewModal.css'

const NewModal = ({ show, articale, onClose }) => {
    if(!show) {
        return null
    }
  return (
    <div className='modal-overlay'>
      <div className="modal-content">
        <span className="class-button" onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
        </span>
        <img src={demoImg} alt="Model Image" className='modal-image' />
        <h2 className="modal-title">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, esse.</h2>
        <p className="modal-source">Soutc Sorce</p>
        <p className="modal-date">414444</p>
        <p className="modal-content-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis nam, minus voluptas laudantium voluptatum ullam expedita aliquid praesentium exercitationem amet mollitia pariatur earum iusto, maxime velit eligendi quos esse inventore vero fuga. Accusantium, eum ullam.</p>
        <a href="#" className="read-more-link">Read More</a>
      </div>
    </div>
  )
}

export default NewModal
