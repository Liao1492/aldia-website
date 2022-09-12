import React from "react";

const ContactsUsFrom = () => {
  return (
    <div className="formBox">
      <div className="formBox__card">
        <form className="card-form">
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Full name</label>
          </div>
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Email</label>
          </div>
          <div className="input">
            <input type="text" className="input-field" required />
            <label className="input-label">Subject</label>
          </div>
          <div className="input">
            <textarea
              style={{ fontSize: "1.8rem" }}
              className="input-field"
              rows={7}
              required
            />
            <label className="input-label">Message</label>
          </div>
          <div className="action">
            <button className="action-button">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactsUsFrom;
