// src/components/LoginButton.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


// function LoginButton() {
//   const {
//     isAuthenticated,
//     loginWithRedirect,
//   } = useAuth0();

//   return !isAuthenticated && (
//     <button onClick={loginWithRedirect}>
//       Log in
//     </button>
//   );
// };
// export default LoginButton;



const LoginButton = (props) => {
  // console.log('LoginButton product ', product)
  console.log('LoginButton props ', props)
  // console.log('passedState ', passedState)
  // user.sub = "auth0|6494d05df1ac1401362da096"

  const {
    user,
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  // console.log('isAuthenticated ', isAuthenticated)
  // console.log('user ', user)
  // console.log('useAuth0() ', useAuth0())

  // if (isAuthenticated && user) {
  //   // Access the user's profile and retrieve the ClientID
  //   const clientId = user.sub // Assuming the ClientID is stored in the 'sub' field of the user profile

  //   // Perform navigation based on the ClientID
  //   if (clientId === "auth0|6494d05df1ac1401362da096") {
  //     // Redirect or navigate to a specific account page
  //     // Example: navigate('/account')
  //     userState = "ibdd"
  //   } 
  //   else {
  //     // Redirect or navigate to a different page
  //     // Example: navigate('/dashboard')
  //     userState = ""
  //   }
  // }


  // const state = props.account.toString();

  const loginFunc = () => {
    loginWithRedirect({appState: props.route})
    // loginWithRedirect({appState: "/accounts/"})
  }




  return !isAuthenticated && (
    <button onClick={loginFunc}>
      Log in to {props.product}
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