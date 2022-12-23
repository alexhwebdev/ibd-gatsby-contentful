/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";


/* ==========  COMPONENTS | COMPONENTs CSS  ========== */
import SEO from '../../components/seo';
import ReviewBadge from './components/review-badge';
import IBDFooter from './components/ibd-footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


/* ==========  UTILS  ========== */
// import { parseSiteMetadata } from '../../utils/parseSiteMetadata';
import { parsePageContent } from '../../utils/parsePageContent';
import { sortedGatsbyImgData } from '../../utils/sortedGatsbyImgData';
import { campaignShopPage } from '../../utils/campaignShopPage';


/* ==========  FONT | FONT-AWESOME | STYLES  ========== */
// import "@fontsource/poppins/500.css";
// import "@fontsource/poppins/600.css";
// import "@fontsource/poppins/700.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../../utils/font-awesome';
// import { faCheck, faChevronRight } from '@fortawesome/free-solid-svg-icons'
// import DOMPurify from "dompurify";
import './styles/features.scss';
import './styles/review-badge.scss';
import './styles/ibd-footer.scss';



const Features = (props) => {
  // console.log('Features props', props)

  // ---------- PAGE : META DATA ----------
  const metaData = props.data.allSite.nodes[0].siteMetadata;


  // ---------- PAGE : SEO SCHEMA ----------
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
  console.log('FEATURES pageContent', pageContent)





  // ---------- PAGE : IMAGES ----------
  const orderOfImgs = [ 
    "graphic-ibd-mobile-hand-700px.webp",
    "graphic-ibd-digital-devices-2020.webp",

    "graphic-IBD-50-400px.webp",
    "graphic-sector-leaders-400px.webp",
    "graphic-ipo-leaders-400px.webp",
    "graphic-long-term-leaders-400px.webp",
    "graphic-big-cap-20-400px.webp",
    "graphic-buy-zone-400px.webp",
    "graphic-ibd-ratings-500px.webp",
    "icon-check-mark-blue-125px.webp",
    "icon-filter-blue-125px.webp",

    "graphic-man-on-phone-800px.webp",
    "graphic-ibd-mobile-stock-screener-800px.webp"
  ];
  const gatsbyImgArray = sortedGatsbyImgData(contentfulEdgesNode.pageImages, orderOfImgs);
  // console.log('IBD_Features gatsbyImgArray', gatsbyImgArray)





  // ---------- PAGE : COMPONENTS ----------
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };


  return (
    <div>
      <SEO 
        title={metaData.title}
        description={metaData.description}
        schemaMarkup={schema}
      />

      <div style={{height:'60px'}}></div>

      <div id="features">
        {/* ==== SECTION 1 : Smart features that...  ==== */}
        <section className="section-1">
          <div className="section-inner-container">
            <div className="copy-container">
              <span>{pageContent[0]}</span>
              
              <div className="paragraph-fontawesome">
                <span>{pageContent[1]}</span>

                {/* GET STARTED NOW : 2 Months for $20 */}
                <button
                  onClick={() => { campaignShopPage('ica_n_20intro') }}
                  // data-product="302102" 
                  data-title="IBD Digital 2 weeks for $20" 
                  aria-label="Get Started Now"
                >
                  <span>{pageContent[2]}</span>
                </button>
              </div>
            </div>
            <div className="img-container">
              <GatsbyImage 
                className="graphic-ibd-mobile-hand"
                image={gatsbyImgArray[0][1]}
                placeholder="graphic-ibd-mobile-hand"
                alt="Image - IBD mobile hand"
              />
            </div>            
          </div>
        </section>



        {/* ==== SECTION 2 : All our premium... ==== */}
        <section className="section-2">
          <div className="section-inner-container">
            {/*<span dangerouslySetInnerHTML={{__html: pageContent[3]}}></span>*/}
            <span>{pageContent[3]}</span>
            <GatsbyImage 
              className="graphic-ibd-digital-devices-2020"
              image={gatsbyImgArray[1][1]}
              placeholder="graphic-ibd-digital-devices-2020"
              alt="Image - IBD Digital Device"
            />
            <div className="list-container">
              <ul className="list">
                <li className="list-item">
                  <span></span>
                  <span>{pageContent[4]}</span>

                </li>
                <li className="list-item">
                  <span></span>
                  <span>{pageContent[5]}</span>
                </li>
                <li className="list-item">
                  <span></span>
                  <span>{pageContent[6]}</span>
                </li>
              </ul>
              <ul className="list">
                <li className="list-item">
                  <span></span>
                  <span>{pageContent[7]}</span>
                </li>
                <li className="list-item">
                  <span></span>
                  <span>{pageContent[8]}</span>
                </li>
                <li className="list-item">
                  <span></span>
                  <span>{pageContent[9]}</span>
                </li>
              </ul>
            </div>

            <div className="button-container">
              {/* GET INSTANT ACCESS : 2 Months for $20 */}
              <button
                onClick={() => { campaignShopPage('ica_n_20intro') }}
                // data-product="302102" 
                data-title="IBD Digital 2 weeks for $20" 
                aria-label="Get Instant Access"
              >
                <span>{pageContent[10]}</span>
                {/*<FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />*/}
              </button>
            </div>
            <span className="no-obligation">{pageContent[11]}</span>
          </div>
        </section>


        {/* ==== SECTION 3 : You get new... ==== */}
        <section className="section-3">
          <div className="section-inner-container">
            <div className="copy-container">
              <span>{pageContent[12]}</span>

              <div className="paragraph-fontawesome">
                <span>{pageContent[13]}</span>


                {/*Gatsby Smooth Scroll Anchor Links - https://www.gatsbyjs.com/plugins/gatsby-plugin-anchor-links/*/}
                <AnchorLink 
                  to="/ibd/why-ibd#can-slim-system" 
                  className="anchortag" 
                  title="Investors Business Daily - Pricing"
                >
                  <span>{pageContent[14]}</span>
                </AnchorLink>
              </div>
            </div>
            <div className="carousel-container">
              {/* <FeaturesCarousel data={ gatsbyImgArray }></FeaturesCarousel> */}

              {/* ==== Slider | 
                Componentizing this does not work. (ex. features-carousel.js)
                Slider based on jQuery anyway, look for alternative. 
              ==== */}
              <Slider {...sliderSettings}>
                <div className="img-copy-container">
                  <GatsbyImage 
                    className="graphic-IBD-50"
                    image={gatsbyImgArray[2][1]}
                    placeholder="graphic-IBD-50"
                    alt="Image - IBD Digital Device"
                  />
                  <div className="copy-container">
                    <span>IBD 50</span>
                    <span>Our flagship stock list of the top 50 growth stocks with top-notch fundamental strength</span>
                  </div>
                </div>

                <div className="img-copy-container">
                  <GatsbyImage 
                    className="graphic-sector-leaders"
                    image={gatsbyImgArray[3][1]}
                    placeholder="graphic-sector-leaders"
                    alt="Image - Microscope"
                  />
                  <div className="copy-container">
                    <span>IPO Sector Leaders</span>
                    <span>Only the strongest stocks from the best-performing sectors</span>
                  </div>
                </div>

                <div className="img-copy-container">
                  <GatsbyImage 
                    className="graphic-ipo-leaders"
                    image={gatsbyImgArray[4][1]}
                    placeholder="graphic-ipo-leaders"
                    alt="Image - Uptrend arrows"
                  />
                  <div className="copy-container">
                    <span>IPO Leaders</span>
                    <span>The strongest new IPOs poised for big gains</span>
                  </div>
                </div>

                <div className="img-copy-container">
                  <GatsbyImage 
                    className="graphic-long-term-leaders"
                    image={gatsbyImgArray[5][1]}
                    placeholder="graphic-long-term-leaders"
                    alt="Image - Office buildings"
                  />
                  <div className="copy-container">
                    <span>Long-Term Leaders</span>
                    <span>Load up your portfolio with these stable perennial market leaders</span>
                  </div>
                </div>

                <div className="img-copy-container">
                  <GatsbyImage 
                    className="graphic-big-cap-20"
                    image={gatsbyImgArray[6][1]}
                    placeholder="graphic-big-cap-20"
                    alt="Image - Computer chips"
                  />
                  <div className="copy-container">
                    <span>Big Cap 20</span>
                    <span>The top large cap stocks with superior fundamentals</span>
                  </div>
                </div>

                <div className="img-copy-container">
                  <GatsbyImage 
                    className="graphic-buy-zone"
                    image={gatsbyImgArray[7][1]}
                    placeholder="graphic-buy-zone"
                    alt="Image - Keyboard Buy button"
                  />
                  <div className="copy-container">
                    <span>Stocks Near A Buy Zone</span>
                    <span>Highlights a handful or our top stock picks nearing a buy point</span>
                  </div>
                </div>

              </Slider>


            </div>            
          </div>
        </section>


        {/* ==== SECTION 4 : We built a better... ==== */}
        <section className="section-4">
          <div className="section-inner-container">
            <div className="img-container">
              <GatsbyImage 
                className="graphic-ibd-ratings"
                image={gatsbyImgArray[8][1]}
                placeholder="graphic-ibd-ratings"
                alt="Image - IBD Digital Device"
              />
            </div>
            <div className="copy-container">
              <span>{pageContent[27]}</span>
              <span>{pageContent[28]}</span>
              <span>{pageContent[29]}</span>
            </div>
          </div>
        </section>


        {/* ==== SECTION 5 : Here’s how to ... ==== */}
        <section className="section-5">
          <div className="section-inner-container">
            <span>{pageContent[30]}</span>

            <div className="img-copy-container">
              <div className="left-container">
                <div className="img-container">
                  <GatsbyImage 
                    className="icon-check-mark-blue"
                    image={gatsbyImgArray[9][1]}
                    placeholder="icon-check-mark-blue"
                    alt="Image - IBD Digital Device"
                  />
                </div>

                <div className="copy-container">
                  <span>{pageContent[31]}</span>
                  <span>{pageContent[32]}</span>
                </div>
              </div>
              <div className="right-container">
                <div className="img-container">
                  <GatsbyImage 
                    className="icon-filter"
                    image={gatsbyImgArray[10][1]}
                    placeholder="icon-filter"
                    alt="Image - IBD Digital Device"
                  />
                </div>
                <div className="copy-container">
                  <span>{pageContent[33]}</span>
                  <span>{pageContent[34]}</span>
                </div>
              </div>
            </div>            
          </div>
        </section>


        {/* ==== SECTION 6 : Market trend analysis... ==== */}
        <section className="section-6">
          <div className="section-inner-container">
            <span>{pageContent[35]}</span>


            <div className="img-copy-container">
              <div className="img-container">
                <GatsbyImage 
                  className="graphic-man-on-phone"
                  image={gatsbyImgArray[11][1]}
                  placeholder="graphic-man-on-phone"
                  alt="Image - IBD Digital Device"
                />
              </div>
              <div className="copy-container">
                <span>{pageContent[36]}</span>
                <span>{pageContent[37]}</span>
                <ul>
                  <li className="list-item">
                    <span>{pageContent[38]}</span>
                  </li>
                  <li className="list-item">
                    <span>{pageContent[39]}</span>
                  </li>
                  <li className="list-item">
                    <span>{pageContent[40]}</span>
                  </li>
                </ul>
                <span>{pageContent[41]}</span>


                <div className="button-container">
                  {/* GET INSTANT ACCESS : 2 Months for $20 */}
                  <button
                    onClick={() => { campaignShopPage('ica_n_20intro') }}
                    // data-product="302102" 
                    data-title="IBD Digital 2 weeks for $20" 
                    aria-label="Get Instant Access"
                  >
                    <span>{pageContent[42]}</span>
                  </button>
                </div>


              </div>          
            </div>          
          </div>
        </section>


        {/* ==== SECTION 7 : IBD Stock Screener... ==== */}
        <section className="section-7">
          <div className="section-inner-container">
            <div className="img-copy-container">
              <div className="copy-container">
                <span>{pageContent[43]}</span>
                <span>{pageContent[44]}</span>
                <span>{pageContent[45]}</span>
              </div>
              <div className="img-container">
                <GatsbyImage 
                  className="graphic-ibd-mobile-stock-screener"
                  image={gatsbyImgArray[12][1]}
                  placeholder="graphic-ibd-mobile-stock-screener"
                  alt="Image - IBD Digital Device"
                />
              </div>
            </div>
            </div>
        </section>


        {/* ==== SECTION 8 : Take a trial... ==== */}
        <section className="section-8">
          <div className="section-inner-container">
            <div className="copy-container">
              <span>{pageContent[46]}</span>

              <div className="button-container">
                {/* 2 MONTHS FOR $20 : 2 Months for $20 */}
                <button
                  onClick={() => { campaignShopPage('ica_n_20intro') }}
                  // data-product="302102" 
                  data-title="IBD Digital 2 weeks for $20" 
                  aria-label="2 Months for $20"
                >
                  <span>{pageContent[47]}</span>
                  {/*<FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />*/}
                </button>
              </div>
              <span className="no-obligation">{ pageContent[48] }</span>
            </div>
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

    allContentfulIbddContentType(filter: {pageTitle: {eq: "Features"}}) {
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

export default Features;