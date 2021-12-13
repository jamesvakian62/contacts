import React from "react";
import Contact from "./Contact";

function Contactslist({ contacts }) {
  return (
    <div className="Contactslist">
      <div className="title">
        <h1>Directory</h1>
      </div>

      {contacts.map((contact, objKey) => {
        console.log(contact); // contact is gettin the data one at a time.
        return (
          <Contact
            key={objKey}
            img={contact.img}
            name={contact.name}
            tel={contact.tel}
          />
        );
      })}
    </div>
  );
}

export default Contactslist;
