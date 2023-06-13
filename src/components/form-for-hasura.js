import React, { useState } from "react";


// import { useForm, ValidationError } from "@formspree/react";
import '../styles/contact-form-styles.scss';



const ContactForm =() => {
  const [email, setEmail] = useState(``);
  
  // async 24min mark
  const submit = async (event) => {
    event.preventDefault();

    const response = await fetch(
      `https://trusting-pheasant-77.hasura.app/v1/graphql`, 
      {
        method: `POST`,
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          query: `


            mutation Insert_User($email: String) {
              insert_Users_one(object: {
                email: $email
              }) {
                email
              }
            }

          `,
          variables: {
            email,
          },
        }),
    });

    await response.json();

    // Clear form
    setEmail(``)
    // console.log({ email })
  }

  return (
    <div className="contact-form-wrapper">

      <h1>Gatsby + Hasura</h1>

      <form onSubmit={submit}>
        <input 
          value={email} 
          onChange={(event) => setEmail(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>



    </div>
  );
}
export default ContactForm;


/* -------------------- NOTES
alexhong38@gmail


TUT : 
Livestream | Serverless Functions Forms with Gatsby and Hasura
https://www.youtube.com/watch?v=XZsBc4Dy84c






*/






