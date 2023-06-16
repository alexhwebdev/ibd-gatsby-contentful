import React from "react";
import { Link } from "gatsby";
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LogoutButton from "../../components/LogoutButton";


const SecurePage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
	/* Options
		error
		getAccessTokenSilently
		getAccessTokenWithPopup
		getIdTokenClaims
		handleRedirectCallback
		isAuthenticated
		isLoading
		loginWithPopup
		loginWithRedirect
		logout
		user
	*/

  console.log('user ', user)
  console.log('getAccessTokenSilently ', getAccessTokenSilently())
  console.log('useAuth0() ', useAuth0())

  return (
    <div style={{marginTop:'100px'}}>
      <nav>
        <Link to="/">Home</Link>
        <p>Email: {user.email}</p>
        <p>secure-page.js > Signed In successful page</p>

        <LogoutButton />
      </nav>
    </div>
  );
};

export default withAuthenticationRequired(SecurePage);



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