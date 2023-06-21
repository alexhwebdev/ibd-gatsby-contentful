// src/components/LoginButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


function LoginButton() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    <button onClick={loginWithRedirect}>
      Log in
    </button>
  );
};


export default LoginButton;



/*
Here's a breakdown of this code:
  - The useAuth0 hook gives you access auth state 
    and methods. In this example, you get the 
    isAuthenticated auth state and the 
    loginWithRedirect method from the useAuth0 hook.
  
  - The auth state isAuthenticated checks if 
    Auth0 has authenticated the user before 
    React renders any component.
  
  - Pass loginWithRedirect to the onClick handler 
    to redirect your users to the Auth0 Universal 
    Login Page, where they can get authenticated.
*/