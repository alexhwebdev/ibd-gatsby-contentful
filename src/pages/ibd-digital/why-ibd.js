/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import styled, { 
  // keyframes 
} from 'styled-components';


/* ==========  COMPONENTS  ========== */
import Seo from '../../components/seo';
import ReviewBadge from './components/review-badge';
import IBDFooter from './components/ibd-footer';


/* ==========  UTILS  ========== */
// import { parseSiteMetadata } from '../../utils/parseSiteMetadata';
import { parsePageContent } from '../../utils/parsePageContent';
import { sortedGatsbyImgData } from '../../utils/sortedGatsbyImgData';
import { campaignShopPage } from '../../utils/campaignShopPage';


/* ==========  FONT | FONT-AWESOME | STYLES  ========== */
import './styles/why-ibd.scss';
import './styles/review-badge.scss';
import './styles/ibd-footer.scss';


// ==========  STYLES  ==========
const Main = styled.div`
  // border: 5px solid red;
`


// ==========  SECTION 2 - CAN SLIM vs S&P 500  ==========
// const SpFiveHundredHeight = keyframes`
//   from { height: 45px; }
//   to { height: 140px; }
// `;
// const IbdCanSlimHeight = keyframes`
//   from { height: 45px; }
//   to { height: 250px; }
// `;
// const SpFiveHundred = styled.div`
//   height: auto;
//   max-height: 300px;

//   @media screen and (max-width: 414px) {
//     max-height: 110px;
//   }

//   animation: ${SpFiveHundredHeight} 1.5s 1 forwards;
// `
// const IbdCanSlim = styled.div`
//   max-height: 300px;

//   @media screen and (max-width: 414px) {
//     max-height: 200px;
//   }

//   animation: ${IbdCanSlimHeight} 1.5s 1 forwards;
// `




const IBD_Why_IBD = (props) => {
  // console.log('IBD_Why_IBD props', props)

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
  // console.log('IBD_Overview pageContent', pageContent)


  const orderOfImgs = [ 
    'hero-woman-on-phone-blue-1400.webp',
    'icon-play-lt-blue.webp',
    'icon-light-bulb-lt-blue.webp',
    'icon-mic-lt-blue.webp',
    'icon-workshops-lt-blue.webp',
    'graphic-ibd-digital-screener-mobile.webp'
  ];
  const gatsbyImgArray = sortedGatsbyImgData(contentfulEdgesNode.pageImages, orderOfImgs);



  return (
    <Main>
      <Seo 
        // title={metaData[0].title}
        // description={metaData[1].excerpt}
        // // schemaMarkup={schema}

        title={metaData.title}
        description={metaData.description}
        schemaMarkup={schema}
      />

      <div style={{height:'60px'}}></div>

      <div id="why-ibd">

        {/* ==== SECTION 1 : Unbiased... ==== */}
        <section className="section-1">
          <div className="section-inner-container">
            <div className="img-overlay"></div>
            <GatsbyImage 
              className="img-woman-on-phone-blue"
              image={ gatsbyImgArray[0][1] } 
              alt="img-woman-on-phone-blue"
            />
            <div className="copy-wrapper">
              <div className="copy-container">
                {/*<h1 dangerouslySetInnerHTML={{__html: pageContent[0]}}></h1>*/}
                <span>{pageContent[0]}</span>
                <span>{pageContent[1]}</span>
                <span>{pageContent[2]}</span>
              
                <span>{pageContent[3]}</span>

                <div className="button-container">
                  {/* 2 Months for $20 */}
                  <button
                    onClick={() => { campaignShopPage('ica_n_20intro') }}
                    // data-product="302102" 
                    data-title="IBD Digital 2 weeks for $20" 
                  >
                    <span>{pageContent[4]}</span>
                  </button>
                </div>

                <span className="no-obligation">{pageContent[5]}</span>
              </div>  
            </div>
          </div>
        </section>


        {/* ==== SECTION 2 : Powered by... ==== */}
        <section id="can-slim-system" className="section-2">
          <div className="section-inner-container">
            <div className="copy-container">
              <span>{pageContent[6]}</span>
              <span>{pageContent[7]}</span>
              <span>{pageContent[8]}</span>
            </div>

            <div className="bar-chart-wrapper">
              <p>
                <strong>CAN SLIM vs S&P 500</strong>
              </p>

              <div className="bar-chart-container">
                <div className="bar-graph sp-500">
                  {/*<SpFiveHundred className="SpFiveHundred" />*/}
                  <div className="SpFiveHundred"></div>
                  <p>S&P 500</p>
                </div>
                <div className="bar-graph ibd-can-slim">
                  {/*<IbdCanSlim className="IbdCanSlim" />*/}
                  <div className="IbdCanSlim"></div>
                  <p>IBD CAN SLIM</p>
                </div>
              </div>

              <span className="disclaimer">{pageContent[9]}</span>
            </div>
          </div>
        </section>


        {/* ==== SECTION 3 : Why are new... ==== */}
        <section className="section-3">

          <div className="section-inner-container">
            <span>{pageContent[10]}</span>
            
            <div className="modules-container">
              <div className="modules">
                <span>{pageContent[11]}</span>
                <span>{pageContent[12]}</span>
              </div>

              <div className="modules">
                <span>{pageContent[13]}</span>
                <span>{pageContent[14]}</span>
              </div>

              <div className="modules">
                <span>{pageContent[15]}</span>
                <span>{pageContent[16]}</span>
              </div>
            </div>

            <h5 className="promo-link">
              {/* Get started today ... : 2 Months for $20 */}
              <button
                onClick={() => { campaignShopPage('ica_n_20intro') }}
                // data-product="302102" 
                data-title="IBD Digital 2 weeks for $20" 
              >
                <span>{pageContent[17]}</span>
              </button>
            </h5>
          </div>
        </section>


        {/* ==== SECTION 4 : You’ll learn valuable... ==== */}
        <section className="section-4">

          <div className="section-inner-container">
            <span>{pageContent[18]}</span>
            <span>{pageContent[19]}</span>

            <div className="modules-wrapper">
              <div className="modules-container">
                <GatsbyImage 
                  className="icon icon-play-lt-blue"
                  image={ gatsbyImgArray[1][1] } 
                  alt="icon-play-lt-blue"
                />
                <span>{pageContent[20]}</span>
                <span>{pageContent[21]}</span>
              </div>

              <div className="modules-container">
                <GatsbyImage 
                  className="icon icon-light-bulb-lt-blue"
                  image={ gatsbyImgArray[2][1] } 
                  alt="icon-light-bulb-lt-blue"
                />
                <span>{pageContent[22]}</span>
                <span>{pageContent[23]}</span>
              </div>

              <div className="modules-container">
                <GatsbyImage 
                  className="icon icon-mic-lt-blue"
                  image={ gatsbyImgArray[3][1] } 
                  alt="icon-mic-lt-blue"
                />
                <span>{pageContent[24]}</span>
                <span>{pageContent[25]}</span>
              </div>

              <div className="modules-container">
                <GatsbyImage 
                  className="icon icon-workshops-lt-blue"
                  image={ gatsbyImgArray[4][1] } 
                  alt="icon-workshops-lt-blue"
                />
                <span>{pageContent[26]}</span>
                <span>{pageContent[27]}</span>
              </div>
            </div>
          </div>
        </section>


        {/* ==== SECTION 5 : See for yourself... ==== */}
        <section className="section-5">
          <div className="section-inner-container">

            <div className="copy-container">
              <span>{pageContent[28]}</span>
              <span>{pageContent[29]}</span>

              <div className="button-container">
                {/* Get Started : 2 Months for $20 */}
                <button
                  onClick={() => { campaignShopPage('ica_n_20intro') }}
                  // data-product="302102" 
                  data-title="IBD Digital 2 weeks for $20" 
                >
                  <span>{pageContent[30]}</span>
                </button>
              </div>

              <span className="no-obligation">{pageContent[31]}</span>
            </div>

            <GatsbyImage 
              className="graphic-ibd-digital-screener-mobile"
              image={ gatsbyImgArray[5][1] } 
              alt="graphic-ibd-digital-screener-mobile"
            />
          </div>
        </section>

        <ReviewBadge></ReviewBadge>
        <IBDFooter></IBDFooter>
      </div>
    </Main>
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

    allContentfulIbddContentType(filter: {pageTitle: {eq: "Why IBD"}}) {
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
export default IBD_Why_IBD;
