import React, { Fragment } from "react";
import ContactBox from "./contactbox/ContactBox.component";

import './contactme.styles.scss';

const ContactMe = () => {
  return (
    <Fragment>
      <body className="ContactMe-Page">
        <ContactBox></ContactBox>
        <ContactBox></ContactBox>
        <ContactBox></ContactBox>
        <ContactBox></ContactBox>
        <ContactBox></ContactBox>
        <ContactBox></ContactBox>
        <ContactBox></ContactBox>
      </body>
    </Fragment>
  )
}
export default ContactMe;
 //email, phone, linkedin, github, gitlab, discord, instagram