import React, { Fragment } from "react";
import ContactBox from "./contactbox/ContactBox.component";
import { Contact_HeaderText, iconInfos } from "./categories";
import PageHeader from "../components/pageHeader/pageheader.component";

import "./contactme.styles.scss";

const ContactMe = () => {
  return (
    <Fragment>
      <div className="ContactMe-Page">
        <PageHeader text={Contact_HeaderText} />
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
