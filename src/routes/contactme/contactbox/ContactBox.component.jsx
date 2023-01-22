import React from "react";

import './ContactBox.styles.scss';

const ContactBox = ({ icon }) => {
    console.log(icon)
    return (
        <div className='Contact-Container'>
            <img className='contact-icon' src={icon.path} alt={`[  icon]`}/>
            <text>{icon.name}</text>
        </div>
    )
}
export default ContactBox;