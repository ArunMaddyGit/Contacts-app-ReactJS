import React from "react";
import user from "../images/user.png";
import trash from "../images/trash.png"; 


const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className="col-5 d-flex contact-card">
            <img className="av-image" src={user} alt="user" />
                <div className="row col-8 contact-content">
                    <div className="contact-name">{name}</div>
                    <div className="contact-email">{email}</div>
                </div>
                <img className="trash-icon" style={{float:'right'}} src={trash}
                onClick={() => props.clickHander(id)}></img>

            </div>
    );
};

export default ContactCard;