import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { send } from "emailjs-com";

// Contact page component
function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = formState;

  //emailJS
  const [toSend, setToSend] = useState({
    name: "",
    email: "",
    message: "",
  });

  //handles the change in state of formState with error validation
  function handleChange(e) {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    setFormState({ ...formState, [e.target.name]: e.target.value });

    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);

      if (!isValid) {
        setErrorMessage("Your email is invalid.");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
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

    send("service_lieu4td", "template_rdohmga", toSend, "uEf333vBDQeTLqRKG")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  return (
    <form id="contact-form" className="form page-fade" onSubmit={handleSubmit}>
      <div className="name">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          defaultValue={name}
          value={toSend.name}
          onBlur={handleChange}
        ></input>
      </div>
      <div className="email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          defaultValue={email}
          value={toSend.email}
          onBlur={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          placeholder="Start typing..."
          name="message"
          defaultValue={message}
          value={toSend.message}
          onBlur={handleChange}
        ></textarea>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Contact;
