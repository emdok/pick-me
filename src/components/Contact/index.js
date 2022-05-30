import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

// Contact page component
function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formState;

//handles the change in state of formState with error validation
  function handleChange(e) {
    setFormState({...formState, [e.target.name]: e.target.value })

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    } 
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  // Handles form submission and console logs submission for now
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <form id="contact-form" className="form page-fade" onSubmit={handleSubmit}>
      <div className="name">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          onBlur={handleChange}
        ></input>
      </div>
      <div className="email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          onBlur={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          placeholder="Start typing..."
          name="message"
          defaultValue={message}
          onBlur={handleChange}
        ></textarea>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button type="submit">
        Submit
      </button>
    </form>
  );
}

export default Contact;