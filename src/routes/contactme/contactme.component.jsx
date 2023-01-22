import React, { Fragment } from "react";
import ContactBox from "./contactbox/ContactBox.component";
import { iconInfos } from "./categories";

import './contactme.styles.scss';

const ContactMe = () => {
  return (
    <Fragment>
      <div className="ContactMe-Page">
        {iconInfos.map((icon) => { return <ContactBox icon={icon} key={icon.name}></ContactBox> })}
      </div>
    </Fragment>
  )
}
export default ContactMe;
