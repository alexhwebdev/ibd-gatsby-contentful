// Formspree : 
// https://formspree.io/forms/myyaqvnw/submissions
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import '../styles/contact-form-styles.scss';



export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.GATSBY_CONTACT_FORM);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div className="contact-form-wrapper">
      <form onSubmit={handleSubmit}>


        {/* ---------- FIRST, LAST NAME ---------- */}
        <label className="first-name">
          <p>First Name*</p>
          <input type="text" name="first-name" id="first-name" />
        </label><br/><br/>

        <label>
          <p>Last Name*</p>
          <input type="text" name="last-name" id="last-name" />
        </label><br/><br/>


        {/* ---------- EMAIL ---------- */}
        <label htmlFor="email"><p>Email Address*</p></label>
        <input id="email" type="email" name="email" />
        <ValidationError 
          prefix="Email" 
          field="email" 
          errors={state.errors} 
        />
        <br/><br/>


        {/* ---------- PHONE ---------- */}
        <label for="phone">Enter your phone number:</label>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
        <small>Format: 123-567-8910</small>
        <br/><br/>


        {/* ---------- MESSAGE ---------- */}
        <label htmlFor="message"><p>Message</p></label>
        <textarea id="message" name="message" />
        <ValidationError 
          prefix="Message" 
          field="message" 
          errors={state.errors} 
        />
        <br/><br/>


        {/* ---------- TYPE OF INVESTOR ---------- */}
        <label htmlFor="select">
          What type of investor are you?
        </label>

        <div className="financial-advisor customcb">
          <input type="checkbox" value="1" id="customcb1" 
            name="Type of investor" value="Financial Advisor"/>
          <label class="inner" for="customcb1"></label>
          <label class="outer" for="customcb1">
            Financial Advisor
          </label>
        </div>
        <div className="institutional-investor customcb">
          <input type="checkbox" value="1" id="customcb2" 
            name="Type of investor" value="Institutional Investor"/>
          <label class="inner" for="customcb2"></label>
          <label class="outer" for="customcb2">
            Institutional Investor
          </label>
        </div>
        <div className="individual-investor customcb">
          <input type="checkbox" value="1" id="customcb3" 
            name="Type of investor" value="Individual Investor"/>
          <label class="inner" for="customcb3"></label>
          <label class="outer" for="customcb3">
            Individual Investor
          </label>
        </div>
        <br/><br/>


        <button 
          type="submit" 
          disabled={state.submitting}
          // value="Post" 
        >Submit</button>
        <ValidationError errors={state.errors} />
      </form>
    </div>
  );
}
