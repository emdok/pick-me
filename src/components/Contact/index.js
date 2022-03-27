import React from 'react';

function Contact() {
  return (
    <form className="form">
      <div className="name">
        <label for="name">Name:</label>
        <input type="text" name="name" className='inputName' tabIndex="1"></input>
      </div>
      <div className="email">
        <label for="email">Email:</label>
        <input type="email" name="email" id="email" className='inputEmail' placeholder='example@example.com' tabIndex="2"></input>
      </div>
      <div>
        <label for="message">Message:</label>
        <textarea placeholder='Start typing...' className='inputMessage' name="message"></textarea>
      </div>
      <button type="submit" className="submit">Submit</button>
    </form>
  )
}

export default Contact