import React from "react";


const Form = () => {
  return (
    <div>
      Contact Form <br/><br/>

      <form
        action="https://formspree.io/f/myyaqvnw"
        method="POST"
      >
        <label>
          Your email:
          <input type="email" name="email" />
        </label>
        <br/><br/>

        <label>
          Your message:
          <textarea name="message"></textarea>
        </label>
        <br/><br/>

        <button type="submit">Send</button>
        <br/><br/>

        <input type="reset" value="Clear" />
      </form>
      {/*
      <form method="post" action="#">
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label><br/>

        <label>
          Email
          <input type="email" name="email" id="email" />
        </label><br/>

        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label><br/>

        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label><br/>

        <button type="submit">Send</button>
        <input type="reset" value="Clear" />
      </form>
      */}
    </div>
  )
};
export default Form





