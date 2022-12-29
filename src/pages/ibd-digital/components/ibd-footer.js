/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React from "react";
import { Link, useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
// import styled from 'styled-components';

import InvestorsBusinessDaily_SVG from '../../../images/logo-investors-white.svg';
import '../styles/ibd-footer.scss';


// ==========  STYLES  ==========
// const Main = styled.div`
//   // border: 5px solid gray;
//   background: #0438BD;
// `

const IBD_Footer = () => {
  // const data = useStaticQuery(graphql`
  //   {
  //     allSanityImageAsset {
  //       edges {
  //         node {
  //           originalFilename
  //           gatsbyImageData
  //         }
  //       }
  //     }    
  //   }
  // `)
  // console.log('IBD_Footer data', data)

  // const ibdLogoWhite = [];
  // data.allSanityImageAsset.edges.map(eachNode => {
  //   if (eachNode.node.originalFilename === "logo-investors-white.svg") {
  //     ibdLogoWhite.push(eachNode.node.gatsbyImageData)
  //   }
  // })

  return (
    <div id="ibd-footer" style={{background: '#0438BD'}}>
      {/* ==== SECTION : FOOTER ==== */}
      <section className="section-footer">
        <nav>
          <ul>
            <li><Link to="/ibd/">Overview</Link></li>
            <li><Link to="/ibd/features/">Features</Link></li>
          </ul>
          <ul>
            <li><Link to="/ibd/why-ibd/">Why IBD</Link></li>
            <li><Link to="/ibd/faqs/">FAQs</Link></li>
          </ul>        
        </nav>

        <p>
          * After the initial 2-month term, the IBD Digital subscription will auto-renew at the regular monthly rate of $34.95. You can cancel at any time. Other conditions may apply. See Terms and Conditions on investors.com. Offer expires on 12/31/2021 at 11:59PM PT
        </p>

        <a 
          className="ibd-logo"
          href="https://www.investors.com/"
          target="_blank"
          alt="Link to investors.com"
        >
{/*          <GatsbyImage 
            className="logo-ibd-white"
            image={ibdLogoWhite[0]} 
            placeholder="Logo - Investor's Business Daily"
            alt="Logo - Investor's Business Daily"
          />*/}
        </a>          
        <p>
          © {new Date().getFullYear()}
          <span> Investor's Business Daily LLC. All rights reserved.</span> | 


          <a 
            href="https://get.investors.com/about-ibd/" 
            target="_blank" 
            rel="noreferrer noopener"
            alt="About Us"
          >
            About Us
          </a> |
          <a 
            href="https://www.investors.com/home/investors-business-daily-inc-terms-of-use/" 
            target="_blank" 
            rel="noreferrer noopener"
            alt="Terms of Use"
          >
            Terms of Use
          </a> |
          <a 
            href="https://www.investors.com/investors-business-daily-privacy-policy/" 
            target="_blank" 
            rel="noreferrer noopener"
            alt="Privacy Policy"
          >
            Privacy Policy
          </a> |
          <a 
            href="https://askinvestorhelp.force.com/s/" 
            target="_blank" 
            rel="noreferrer noopener"
            alt="Contact Us"
          >
            Contact Us
          </a> |
          <a 
            href="https://compliance.investors.com/#/optout" 
            target="_blank" 
            rel="noreferrer noopener"
            alt="Do Not Sell My Personal Information"
          >
            Do Not Sell My Personal Information
          </a>
          
        </p>
      </section>
    </div>
  )
};
export default IBD_Footer;
