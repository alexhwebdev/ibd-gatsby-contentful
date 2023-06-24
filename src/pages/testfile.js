import React from "react";
import { Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LogoutButton from "../components/LogoutButton";



const Account = () => {
  const { user } = useAuth0();

  console.log('user ', user)

  return (
    <div style={{marginTop:'100px'}}>
      <nav>
        <Link to="/">Home</Link>
        <p>Email: {user.email}</p>
        <p>Account.js > Signed In successful page</p>

        <LogoutButton />
      </nav>
    </div>
  );
};

export default withAuthenticationRequired(Account);



/*
What's happening in this code?
  - You accessed the user object from the 
    useAuth0 hook

  - Added a link to the home page with the 
    Gatsby Link component

  - Displayed the users' email address stored 
    in the user object

  - Wrapped the exported account component in 
    withAuthenticationRequired()

*/