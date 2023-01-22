import React from "react";

import './ContactBox.styles.scss';

const ContactBox = ({ icon }) => {
    console.log(icon)
    return (
        <div className='Contact-Container'>
            <div className='contact-thumb'>
                <img className='contact-icon' src={icon.path} alt={`[  icon]`} />
                <text className='icon-text'>{icon.name}</text>
            </div>
        </div>
    )
}
export default ContactBox;