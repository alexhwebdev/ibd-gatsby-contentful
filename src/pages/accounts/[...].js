import React from "react"
import { Router } from "@reach/router"

import { graphql, Link } from "gatsby";

import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";

import PageOne from "./components/page-one";

import './styles/accounts.scss';


// PAGES
let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>


const App = (props) => {
  console.log('App props', props)

  const { 
    user, 
    getAccessTokenSilently,
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
      <LoginButton />
      <LogoutButton />

      <div className="nav-wrapper">
        <Link to="/accounts/">Home</Link>
        <Link to="/accounts/dashboard">Dash</Link>
        <Link to="/accounts/pageone">PageOne</Link>
      </div>

      <Router basepath="/accounts">
        <Home path="/" />
        <Dash path="dashboard" />
        <PageOne path="pageone" />
        {/*<PrivateRoute path="/details" component={Details} />*/}
      </Router>

    </div>
  )
}

export const data = graphql`
  {
    allSite {
      nodes {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    },
    allContentfulIbddContentType(filter: {pageTitle: {eq: "Secure Page"}}) {
      edges {
        node {
          pageTitle
          description
          slug
          pageContent {
            raw
          }
        }
      }
    }
  }
`

// export default App;
export default withAuthenticationRequired(App);










