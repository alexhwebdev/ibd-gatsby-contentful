/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it



import React from 'react';
import Layout from './src/components/Layout';

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
);


/* ==========  Delay scroll to top on page transition  ========== */
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






/* -------------------------------- NOTES
THE BASICS YOU SHOULD KNOW ABOUT GATSBY API FILES :
https://pagepro.co/blog/the-basics-you-should-know-about-gatsby-api-files/
  
  + GATSBY-CONFIG API FILE
  + GATSBY-NODE API FILE
  + GATSBY-BROWSER API FILE
  + GATSBY-SSR API FILE




'wrapPageElement': 
  - https://www.gatsbyjs.com/docs/reference/config-files/gatsby-browser/#wrapPageElement
  - This is useful for setting wrapper components around pages that won’t get unmounted on page changes.
  - Here you can wrap every page element from Gatsby. In this example, we are wrapping all page elements with Layout component.











*/