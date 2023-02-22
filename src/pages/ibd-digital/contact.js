import React from 'react';
import { Link } from 'gatsby';

const Contact = () => {
  return (
    <div 
      style={{marginTop:'100px'}}
      className="contact-page"
    >
      <article>
        <h3>Contact page</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <article>
        <form 
          className="form contact-form"
          action=""
          // USE Formspree to submit forms :
          // https://formspree.io/
        >
          <div className="form-row">
            <label htmlFor="name">your name</label>
            <input type="text" name="name" id="name" />
          </div>

          <div className="form-row">
            <label htmlFor="email">your email</label>
            <input type="text" name="email" id="email" />
          </div>

          <div className="form-row">
            <label htmlFor="message">your email</label>
            <textarea name="message" id="message"></textarea>
          </div>

          <button type="submit" className="btn block">
            submit
          </button>
        </form>
      </article>
    </div>
  );
}

export default Contact;

