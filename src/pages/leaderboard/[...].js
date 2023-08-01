import React from "react"
import { Router } from "@reach/router"

import { graphql, Link } from "gatsby";

import { navigate } from 'gatsby';
import { useAuth0 } from "@auth0/auth0-react";
import { withAuthenticationRequired } from '@auth0/auth0-react';

import LoginButton from "../../components/LoginButton";
import LogoutButton from "../../components/LogoutButton";

import PageOne from "./components/page-one";

import './styles/accounts.scss';


// PAGES
let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>



const forceRefresh = () => {
  console.log('forceRefresh window ', window)
  window.location.reload()
}


const App = (props) => {
  console.log('App props', props)

  const { 
    user, 
    isAuthenticated,
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

  // console.log('user ', user)
  // console.log('getAccessTokenSilently ', getAccessTokenSilently())
  // console.log('getIdTokenClaims ', getIdTokenClaims())
  // console.log('useAuth0() ', useAuth0())



  // if (isAuthenticated && user) {
  //   // Access the user's profile and retrieve the userSub
  //   const userSub = user.sub // Assuming the userSub is stored in the 'sub' field of the user profile
  //   // sub : "auth0|6494a63f1413ef120a2629c4"

  //   // Perform navigation based on the userSub
  //   // alexhwebdev@gmail.com
  //   if (userSub === "auth0|6494d05df1ac1401362da096") {
  //     // Redirect or navigate to a specific account page
  //     // Example: navigate('/account')
  //     navigate('/accounts/')
  //   } 
  //   // else if (userSub === "auth0|6494d0806ee6f0aa8795bfaf") {
  //   //   // Redirect or navigate to a specific account page
  //   //   // Example: navigate('/account')
  //   //   navigate('/ibdd/')
  //   // } 
  //   else {
  //     // Redirect or navigate to a different page
  //     // Example: navigate('/dashboard')
  //     navigate('/')
  //   }
  // }


  return (
    <div style={{marginTop:'100px'}}>
      <LoginButton/>
      <LogoutButton />

      <h1>Leaderboard Secure Pages</h1>

      <div className="nav-wrapper">
        <Link to="/leaderboard/">Home</Link>
        <Link to="/leaderboard/dashboard">Dash</Link>
        <Link to="/leaderboard/pageone">PageOne</Link>
      </div>

      <Router basepath="/leaderboard">
        <Home path="/" />
        <Dash path="dashboard" />
        <PageOne path="pageone" />
        {/*<PrivateRoute path="/details" component={Details} />*/}
      </Router>


      <button onClick={() => { forceRefresh() }}>
        forceRefresh
      </button>

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







