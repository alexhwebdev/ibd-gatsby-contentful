import React from "react"
import { Router } from "@reach/router"

import { graphql, Link } from "gatsby";

import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";



let Home = () => <div style={{marginTop:'100px'}}>Home</div>
let Dash = () => <div style={{marginTop:'100px'}}>Dash</div>

const App = (props) => {
  console.log('App props', props)

  const { 
    user, 
    getAccessTokenSilently,
    getAccessTokenWithPopup,
    getIdTokenClaims
  } = useAuth0();
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
  console.log('getIdTokenClaims ', getIdTokenClaims())
  console.log('useAuth0() ', useAuth0())

  return (
    <div style={{marginTop:'100px'}}>
      <Link to="/accounts/">Home</Link>
      <Link to="/accounts/dashboard">Dash</Link>

      <Router basepath="/accounts">
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>

      <LoginButton />
      <LogoutButton />
    </div>
  )
}

// export default App;
export default withAuthenticationRequired(App);










