import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <form id="contact-form" className="form" onSubmit={handleSubmit}>
      <div className="name">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onChange={handleChange}
        ></input>
      </div>
      <div className="email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          placeholder="Start typing..."
          name="message"
          defaultValue={message}
          onChange={handleChange}
        ></textarea>
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Contact;
