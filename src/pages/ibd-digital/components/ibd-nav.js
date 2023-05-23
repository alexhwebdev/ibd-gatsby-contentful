/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React, { 
  // useEffect, 
  useState 
} from "react";
// import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
// import { globalHistory } from '@reach/router'
import { GatsbyImage } from "gatsby-plugin-image";



/* ==========  UTILS  ========== */
import { campaignShopPage } from '../../../utils/campaignShopPage';


/* ==========  FONT | FONT-AWESOME | STYLES  ========== */
// import "@fontsource/manrope/500.css";
// import "@fontsource/manrope/700.css";
// import './ibd-global.scss';
// import { Hamburger } from '../../utils/Hamburger';
import '../styles/ibd-nav.scss';


/* ==========  IMAGES | ASSETS  ========== */
import Logo_IBD_Blue from '../../../images/logo-investors-blue.svg';
import Logo_IBD_White from '../../../images/logo-investors-white.svg';



const NavWrapper = styled.nav`
  height: 60px;
  
  @media screen and (max-width: 991px) {
    height: ${({ hamState }) => (hamState ? "490px" : "60px")};
  }
`
const SignInStartTrial = styled.div`
  display: flex;
`
const AnchorTag = styled(Link)`
  &.active {
    border-bottom: 2px solid #0438BD;
    color: #0438BD !important;
    text-decoration: none;
  }
`
const Hamburger = styled.div`
  div {
    :first-child {
      transform: ${({ hamState }) => (hamState ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ hamState }) => (hamState ? "0" : "1")};
    }
    :nth-child(3) {
      transform: ${({ hamState }) => (hamState ? "rotate(-45deg)" : "rotate(0)")};
    }

    // @media screen and (max-width: 414px) {
      // :nth-child(2) {
      //   margin-top: 4px;
      // }
    // }
  }
`


// ========== window bug ==========
// https://www.gatsbyjs.com/docs/debugging-html-builds/#ssr-during-gatsby-develop
// + 'window' is not available during SSR. 
const isBrowser = typeof window !== "undefined"
if (isBrowser) {
  window.onscroll = function() {onScrollFunc()};
}

const onScrollFunc = () => {
  var logoUpdate = Logo_IBD_Blue;
  const navbar = document.getElementById("ibd-nav-wrapper");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    navbar.className = "small";
    logoUpdate = Logo_IBD_White;
    // setScrollPosition(false)
  } else {
    navbar.className = "big";
    logoUpdate = Logo_IBD_Blue;
    // setScrollPosition(window.scrollY)
  }  
}


const IbdNav = (props, context) => {
  //   // allSanityImageAsset {
  //   //   edges {
  //   //     node {
  //   //       originalFilename
  //   //       gatsbyImageData
  //   //     }
  //   //   }
  //   // }  
  // const data = useStaticQuery(graphql`
  //   {
  //     allStrapiIbdDigital {
  //       edges {
  //         node {
  //           Page_Images {
  //             name
  //             localFile {
  //               url
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  // // console.log('ibd-nav.js data ', data)

  // let ibdLogoBlue = '';
  // let ibdLogoWhite = '';
  // data.allStrapiIbdDigital.edges.map(eachPageNode => {
  //   eachPageNode.node.Page_Images.map( eachImg => {
  //     if (eachImg.name === "logo-investors-blue.svg") {
  //       ibdLogoBlue = eachImg.localFile.url;
  //     }
  //     else if  (eachImg.name === "logo-investors-white.svg") {
  //       ibdLogoWhite = eachImg.localFile.url;
  //     }
  //   });
  // });
  // // console.log('ibd-nav.js ibdLogoBlue ', ibdLogoBlue)
  // // console.log('ibd-nav.js ibdLogoWhite ', ibdLogoWhite)


  const [ hamState, showHamNav ] = useState(false);
  const [goToPricing, updateGoToPricing] = useState(false);

  // 'Scroll to ID': does not work with Page Transition added.
  // This is alternate method when adding Page Transitions.
  if (goToPricing === true) {
    window.setTimeout(
      // () => window.scrollTo(document.getElementById("pricing"))
      () => document.getElementById("pricing").scrollIntoView()
    , 1000);
  } 


  return (
    <NavWrapper id="ibd-nav-wrapper" hamState={hamState}>
      {/* ==========  HAMBURGER  ========== */}
      <div className="logo-hamburger-container">
        <AnchorTag 
          to="/ibd-digital/" 
          className="ibd-logo"
          activeClassName="active" 
          title="Investors Business Daily"
          alt="Investors Business Daily"
        >
          {/*
          <img 
            src={logoUpdate} 
            alt="Logo - Investor's Business Daily" 
          />
          */}
          {/*<div className="ibd-logo-img"></div>*/}

          {/*<GatsbyImage 
            className="ibd-logo-blue-img"
            image={ibdLogoBlue}
            placeholder="ibd-logo-blue-img"
            alt="Logo - IBD"
          />*/}
          <img 
            src={Logo_IBD_Blue} 
            alt="IBD Logo blue"
            className="ibd-logo-blue-img"
          />

          {/*<GatsbyImage 
            className="ibd-logo-white-img"
            image={ibdLogoWhite}
            placeholder="ibd-logo-white-img"
            alt="Logo - IBD"
          />*/}
          <img 
            src={Logo_IBD_White} 
            alt="IBD Lovo white"
            className="ibd-logo-white-img"
          />
        </AnchorTag>

        <Hamburger 
          id="hamburger" 
          hamState={hamState} 
          onClick={() => showHamNav(!hamState)}
        >
          <div />
          <div />
          <div />
        </Hamburger>
      </div>

      {/* ==========  NAV-LINKS  ========== */}
      <div className="nav-links">
        <ul>
          <li>
            <AnchorTag 
              to="/ibd-digital/" 
              // to={
              //   "/ibd/" && "/ibd"
              // }
              className="anchortag Overview" 
              activeClassName="active" 
              title="Investors Business Daily - Overview"
              alt="Investors Business Daily - Overview"

              // reset routing from Pricing
              onClick={
                function(event){ 
                  showHamNav(!hamState);
                  updateGoToPricing(false);
                }
                // hamState = true ? showHamNav(!hamState) : showHamNav(hamState)
              }
            >Overview</AnchorTag>
          </li>
          <li>
            <AnchorTag 
              to="/ibd-digital/features/" 
              className="anchortag Features" 
              activeClassName="active" 
              title="Investors Business Daily - Features"
              alt="Investors Business Daily - Features"

              // reset routing from Pricing
              onClick={
                function(event){ 
                  showHamNav(!hamState);
                  updateGoToPricing(false);
                }
              }
            >Features</AnchorTag>
          </li>
          <li>
            <AnchorTag 
              to="/ibd-digital/why-ibd/" 
              className="anchortag Why-IBD" 
              activeClassName="active" 
              title="Investors Business Daily - Why IBD"
              alt="Investors Business Daily - Why IBD"

              // reset routing from Pricing
              onClick={
                function(event){ 
                  showHamNav(!hamState);
                  updateGoToPricing(false);
                }
              }
            >Why IBD</AnchorTag>
          </li>
          <li>
            <AnchorTag 
              to="/ibd-digital/faqs/" 
              className="anchortag FAQS" 
              activeClassName="active" 
              title="Investors Business Daily - FAQs"
              alt="Investors Business Daily - FAQs"

              // reset routing from Pricing
              onClick={
                function(event){ 
                  showHamNav(!hamState);
                  updateGoToPricing(false);
                }
              }
            >FAQS</AnchorTag>
          </li>
          <li>
            {/*Gatsby Smooth Scroll Anchor Links - https://www.gatsbyjs.com/plugins/gatsby-plugin-anchor-links/*/}
            <Link 
              // to="/ibd#pricing"
              to="/ibd-digital/"
              // state={{ goToPricing: true }}

              className="anchortag" 
              title="Investors Business Daily - Pricing"
              alt="Investors Business Daily - Pricing"

              // reset routing from Overview
              // hamState={hamState} 
              onClick={
                function(event){ 
                  showHamNav(!hamState);
                  updateGoToPricing(true);
                }
              }
            >PRICING</Link>
          </li>


          <li>
            <AnchorTag 
              to="/ibd-digital/airpods/" 
              className="anchortag FAQS" 
              activeClassName="active" 
              title="Investors Business Daily - FAQs"
              alt="Investors Business Daily - FAQs"

              // reset routing from Pricing
              onClick={
                function(event){ 
                  showHamNav(!hamState);
                  updateGoToPricing(false);
                }
              }
            >Airpods</AnchorTag>
          </li>



        </ul>        
      </div>


      {/* ==========  SIGN IN | START TRIAL  ========== */}
      <SignInStartTrial 
        className="sign-in-start-trial" 
        hamState={hamState}
      >
        {/*  SIGN IN  */}
        <a 
          className="sign-in" 
          title="IBD - Sign In"
          href="https://myibd.investors.com/secure/signin.aspx?eurl=https%3A%2F%2Finvestors.com" 
          alt="IBD - Sign in"
          // class="whiteLink  not-gated mr-3 head-signin d-inline-block"
        >Sign In</a>

        {/*  START TRIAL  */}
        <button className="start-trial"
          data-title="IBD Digital 2 weeks for $20" 
          onClick={() => { campaignShopPage('ica_n_20intro')}}
          // data-product="302102" 
          aria-label="Start Trial"
        >
          Start Trial
        </button>
      </SignInStartTrial>

    </NavWrapper>
  )
}

export default IbdNav;
