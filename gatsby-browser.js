/**
 * Implement Gatsby's Browser APIs in this file.
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
import Layout from './src/components/Layout';

// ------------------------------ Auth0
import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';



export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);



// ------------------------------ Delay scroll to top on page transition
const transitionDelay = 300;
export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.hash === '#pricing') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay);

    // window.setTimeout(
    //   () => document.getElementById("pricing").scrollIntoView()
    // , 1100);
  } else {
    const savedPosition = getSavedScrollPosition(location);
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    );
  }
  return false;
};



// ------------------------------ Auth0
// https://auth0.com/blog/securing-gatsby-with-auth0/
const onRedirectCallback = (appState) => {

  // Use Gatsby's navigate method to replace the url
  navigate(appState?.returnTo || '/accounts/', { replace: true });
};

console.log('window ', window)

// 'wrapRootElement' 
export const wrapRootElement = ({ element }) => {
  console.log('element ', element)
  
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENTID}

      // URL Auth0 will redirect your browser to with the authentication result.
      redirectUri={window.location.origin}

      // onRedirectCallback removes the code and state parameters from the URL when you are redirected from the authorize page.
      onRedirectCallback={onRedirectCallback}
    >
      {element}
    </Auth0Provider>
  );
};
/* Here's what's happening in this code :
  - The 'wrapRootElement' hook from the Gatsby Browser 
    API sets up the use of Provider components.

  - Wrap the root element in the <Auth0Provider>

  - Pass in the AUTH0_DOMAIN and AUTH0_CLIENTID 
    into the domain and clientId props

  - Pass in window.location.origin to the redirectUri 
    prop, which is the URL Auth0 will redirect your 
    browser to with the authentication result.

  - onRedirectCallback removes the code and state 
    parameters from the URL when you are redirected 
    from the authorize page.
*/



/* -------------------- NOTES : gatsby-browser.js

- file that lets you tap into the browser side, or 
  client-side part of the build process.

- 'wrapRootElement' 
  - allows to add 'context' or add a 'provider' to
    Gatsby app
  - Preserve State or Data between page navigation.
  - Accessed through 'wrapRootElement'.

*/










