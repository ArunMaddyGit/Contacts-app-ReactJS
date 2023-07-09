import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    //console.log(props);
    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) => {
        return ( 
            <ContactCard contact={contact} clickHander={deleteContactHandler}
            key={contact.id}></ContactCard>
        );
    })
    return(
        <div className="col-12 contact-listing">
            <h3>Contact List</h3>
            {renderContactList}

        </div>
    );
};

export default ContactList;