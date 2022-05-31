import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";
import { send } from "emailjs-com";

const initialState = {
  name: "",
  email: "",
  message: "",
};

// Contact page component
function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [{ name, email, message }, setFormState] = useState(initialState);

  //emailJS
  const [toSend, setToSend] = useState(initialState);

  //handles the change in state of formState with error validation
  function handleChange(e) {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    setFormState({ ...initialState, [e.target.name]: e.target.value });

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
      setFormState({ ...initialState, [e.target.name]: e.target.value });
    }
  }

  const clearState = () => {
    setToSend({ ...initialState });
  };

  // Handles form submission and console logs submission for now
  function handleSubmit(e) {
    e.preventDefault();
    console.log(toSend);

    send("service_lieu4td", "template_rdohmga", toSend, "uEf333vBDQeTLqRKG")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    setTimeout(() => {
      clearState();
    }, 1000);

    console.log("we are here");
  }

  return (
    <form id="contact-form" className="form page-fade" onSubmit={handleSubmit}>
      <div className="name">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          value={toSend.name}
          onBlur={handleChange}
          onChange={handleChange}
        ></input>
      </div>
      <div className="email">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          value={toSend.email}
          onBlur={handleChange}
          onChange={handleChange}
        ></input>
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          placeholder="Start typing..."
          name="message"
          value={toSend.message}
          onBlur={handleChange}
          onChange={handleChange}
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
