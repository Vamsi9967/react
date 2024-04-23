import React from 'react';
import './contact.css';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Add your custom logic for form submission here
    // For example, you can send a request to your server or perform client-side validation
  };

  return (
    <div className="con_tact me">
  <h2>Contact Us</h2>
  <div className="row">
    <div className="col">
      <div className="form-group">
        <label>First Name</label>
        <input type="text" />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Surname</label>
        <input type="text" />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Email</label>
        <input type="text" />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Phone</label>
        <input type="text" />
      </div>
    </div>
    <div className="col">
      <div className="form-group">
        <label>Message</label>
        <textarea defaultValue={""} />
      </div>
    </div>
    <div className="col">
      <input type="submit" defaultValue="Submit" />
    </div>
  </div>
</div>


  );
}

export default Contact;






