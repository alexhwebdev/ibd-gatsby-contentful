/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React, {
  // useEffect
} from "react";
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
// import styled from 'styled-components';


/* ==========  COMPONENTS  ========== */
import SEO from '../../components/seo';
import ReviewBadge from './components/review-badge';
import IBDFooter from './components/ibd-footer';
import Accordion from '../../components/Accordion';
// import IBDLayout from './components/ibd-layout';
// import IBDLayout from '../../layouts/ibd-layout';


/* ==========  UTILS  ========== */
// import { parseSiteMetadata } from '../../utils/parseSiteMetadata';
import { parsePageContent } from '../../utils/parsePageContent';
import { sortedGatsbyImgData } from '../../utils/sortedGatsbyImgData';
import { campaignShopPage } from '../../utils/campaignShopPage';


/* ==========  FONT | FONT-AWESOME | STYLES  ========== */
// import "@fontsource/manrope/400.css";
// import "@fontsource/manrope/700.css";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../../utils/font-awesome';
// import { faChevronRight, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import './styles/faqs.scss';
import './styles/review-badge.scss';
import './styles/ibd-footer.scss';


// ==========  STYLES  ==========
// const Main = styled.div``



const IBD_Faqs = (props) => {
  // ---------- PAGE : META DATA ----------
  const metaData = props.data.allSite.nodes[0].siteMetadata;


    // ---------- PAGE : SEO SCHEMA ----------
  // GatsbyJS: How to Implement Schema Markup on Your Gatsby Site
  // https://www.youtube.com/watch?v=BIQGBKXc6AI
  // https://search.google.com/test/rich-results
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gatsby Sanity IBD",
    "description": metaData.description,
    "url": metaData.siteUrl,
    "logo": ""
  }


  // ---------- PAGE : COPY ----------
  const contentfulEdgesNode = props.data.allContentfulIbddContentType.edges[0].node;
  const pageContent = parsePageContent( contentfulEdgesNode.pageTitle, contentfulEdgesNode.pageContent.raw);


  // ---------- PAGE : IMAGES ----------
  const orderOfImgs = [ 
    "hero-ibd-app-iphone.webp",
    // "graphic-ibd-digital-devices-2020.webp"
    "graphic-ibdd-product-shot-faqs.webp"
  ];
  const gatsbyImgArray = sortedGatsbyImgData(contentfulEdgesNode.pageImages, orderOfImgs);


  // ---------- PAGE : COMPONENTS ----------
  const accordionData = [
    { question: `${pageContent[2].props.children[0]}`, answer: `${pageContent[3].props.children[0]}` },
    { question: `${pageContent[4].props.children[0]}`, answer: `${pageContent[5].props.children[0]}` },
    { question: `${pageContent[6].props.children[0]}`, answer: `${pageContent[7].props.children[0]}` },
    { question: `${pageContent[8].props.children[0]}`, answer: `${pageContent[9].props.children[0]}` },
    { question: `${pageContent[10].props.children[0]}`, answer: `${pageContent[11].props.children[0]}` },
    { question: `${pageContent[12].props.children[0]}`, answer: `${pageContent[13].props.children[0]}` },
    { question: `${pageContent[14].props.children[0]}`, answer: `${pageContent[15].props.children[0]}` },
    { question: `${pageContent[16].props.children[0]}`, answer: `${pageContent[17].props.children[0]}` },
  ];


  return (
    <div>
      <SEO 
        // title={metaData[0].title}
        // description={metaData[1].excerpt}
        // // schemaMarkup={schema}

        title={metaData.title}
        description={metaData.description}
        schemaMarkup={schema}
      />

      <div style={{height:'60px'}}></div>

      <div 
        id="faqs" 
        // className={containerStyles.test}
      >
        {/* ==== SECTION 1 : Frequently Asked Questions... ==== */}
        <section className="section-1">

          <div className="section-inner-container">
            <GatsbyImage 
              className="graphic-ibd-digital-devices-2020"
              image={ gatsbyImgArray[0][1] } 
              alt="graphic-ibd-digital-devices-2020"
            />
            <div className="copy-wrapper">
              <div className="copy-container">
                <span>{pageContent[0]}</span>
                <span>{pageContent[1]}</span>
              </div>
            </div>
          </div>
        </section>



        {/* ==== SECTION 2 : What makes IBD Digital unique?... ==== */}
        <section className="section-2">
          <div className="section-inner-container">
            <div className="accordion">
              {
                accordionData.map(({ question, answer }, index) => (
                  <Accordion key={index} question={question} answer={answer} />
                ))
              }
            </div>
          </div>
        </section>



        {/* ==== SECTION 3 : Start your 2-month trial... ==== */}
        <section className="section-3">
          <div className="section-inner-container">

            <div className="copy-img-container">
              <div className="copy-container">
                <span>{pageContent[18]}</span>
                <span>{pageContent[19]}</span>
              </div>
              {/*
              <GatsbyImage 
                className="graphic-ibd-digital-devices-2020"
                image={ gatsbyImgArray[1][1] } 
                alt="graphic-ibd-digital-devices-2020"
              />*/}

              <GatsbyImage 
                className="graphic-ibd-digital-devices-2020"
                image={ gatsbyImgArray[1][1] } 
                alt="graphic-ibd-digital-devices-2020"
              />
            </div>


            <div className="button-container">
              {/* Try 2 Months for $20 */}
              <button
                onClick={() => { campaignShopPage('ica_n_20intro') }}
                // data-product="302102" 
                data-title="IBD Digital 2 weeks for $20" 
              >
                <span>{pageContent[20]}</span>
                {/*<FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />*/}
              </button>
            </div>

            <span className="no-obligation">{pageContent[21]}</span>
          </div>
        </section>

        <ReviewBadge></ReviewBadge>
        <IBDFooter></IBDFooter>
      </div>
    </div>
  )
};

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

    allContentfulIbddContentType(filter: {pageTitle: {eq: "FAQs"}}) {
      edges {
        node {
          pageTitle
          description
          slug
          pageContent {
            raw
          }
          pageImages {
            filename
            gatsbyImageData
          }
        }
      }
    }

  }
`
export default IBD_Faqs;
