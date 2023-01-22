import React from "react";

import './ContactBox.styles.scss';

const ContactBox = ({ icon }) => {
    return (
        <div className='Contact-Container'>
            <a className='contact-thumb' href={icon.link} target="_blank" rel="noreferrer">
                <img className='contact-icon' src={icon.path} alt={`[  icon]`} />
                <div className='icon-text'>{icon.name}</div>
            </a>
            <div className='contact-description-container'>
                <div className='description'>{icon.description}</div>
                <div className='tag'>{icon.tag}</div>
            </div>
        </div>
    )
}
export default ContactBox;