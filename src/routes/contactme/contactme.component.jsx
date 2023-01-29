import React, { Fragment } from "react";
import ContactBox from "./contactbox/ContactBox.component";
import { Contact_HeaderText, iconInfos } from "./categories";

import "./contactme.styles.scss";

const ContactMe = () => {
  return (
    <Fragment>
      <div className="ContactMe-Page">
        <div className="Contacts-Header-Container">
          <div className="Contacts-Header">
            <div className="text">{Contact_HeaderText}</div>
          </div>
        </div>
        <div className="Contacts-Container">
          {iconInfos.map((icon) => {
            return <ContactBox icon={icon} key={icon.name} />;
          })}
        </div>
      </div>
    </Fragment>
  );
};
export default ContactMe;
