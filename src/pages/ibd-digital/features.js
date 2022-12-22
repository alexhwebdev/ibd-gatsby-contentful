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
  console.log('IBD_Features gatsbyImgArray', gatsbyImgArray)





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
              <h1>{pageContent[0]}</h1>
              
              <div className="paragraph-fontawesome">
                <p>{pageContent[1]}</p>

                {/* GET STARTED NOW : 2 Months for $20 */}
                <button
                  onClick={() => { campaignShopPage('ica_n_20intro') }}
                  // data-product="302102" 
                  data-title="IBD Digital 2 weeks for $20" 
                  aria-label="Get Started Now"
                >
                  <p>{pageContent[2]}</p>
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
            <h2 dangerouslySetInnerHTML={{__html: pageContent[3]}}></h2>
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
                  <p dangerouslySetInnerHTML={{__html: pageContent[4]}}></p>
                  {/*<p>{pageContent[4]}</p>*/}

                </li>
                <li className="list-item">
                  <span></span>
                  <p dangerouslySetInnerHTML={{__html: pageContent[5]}}></p>
                </li>
                <li className="list-item">
                  <span></span>
                  <p dangerouslySetInnerHTML={{__html: pageContent[6]}}></p>
                </li>
              </ul>
              <ul className="list">
                <li className="list-item">
                  <span></span>
                  <p dangerouslySetInnerHTML={{__html: pageContent[7]}}></p>
                </li>
                <li className="list-item">
                  <span></span>
                  <p dangerouslySetInnerHTML={{__html: pageContent[8]}}></p>
                </li>
                <li className="list-item">
                  <span></span>
                  <p dangerouslySetInnerHTML={{__html: pageContent[9]}}></p>
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
                <p>{pageContent[10]}</p>
                {/*<FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />*/}
              </button>
            </div>
            <p className="no-obligation">{pageContent[11]}</p>
          </div>
        </section>


        {/* ==== SECTION 3 : You get new... ==== */}
        <section className="section-3">
          <div className="section-inner-container">
            <div className="copy-container">
              <h2>{pageContent[12]}</h2>

              <div className="paragraph-fontawesome">
                <p>{pageContent[13]}</p>


                {/*Gatsby Smooth Scroll Anchor Links - https://www.gatsbyjs.com/plugins/gatsby-plugin-anchor-links/*/}
                <AnchorLink 
                  to="/ibd/why-ibd#can-slim-system" 
                  className="anchortag" 
                  title="Investors Business Daily - Pricing"
                >
                  <p>{pageContent[14]}</p>
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
                    <h3>IBD 50</h3>
                    <p>Our flagship stock list of the top 50 growth stocks with top-notch fundamental strength</p>
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
                    <h3>IPO Sector Leaders</h3>
                    <p>Only the strongest stocks from the best-performing sectors</p>
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
                    <h3>IPO Leaders</h3>
                    <p>The strongest new IPOs poised for big gains</p>
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
                    <h3>Long-Term Leaders</h3>
                    <p>Load up your portfolio with these stable perennial market leaders</p>
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
                    <h3>Big Cap 20</h3>
                    <p>The top large cap stocks with superior fundamentals</p>
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
                    <h3>Stocks Near A Buy Zone</h3>
                    <p>Highlights a handful or our top stock picks nearing a buy point</p>
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
              <h2>{pageContent[27]}</h2>
              <p>{pageContent[28]}</p>
              <p>{pageContent[29]}</p>
            </div>
          </div>
        </section>


        {/* ==== SECTION 5 : Here’s how to ... ==== */}
        <section className="section-5">
          <div className="section-inner-container">
            <h2>{pageContent[30]}</h2>

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
                  <h3>{pageContent[31]}</h3>
                  <p>{pageContent[32]}</p>
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
                  <h3>{pageContent[33]}</h3>
                  <p>{pageContent[34]}</p>
                </div>
              </div>
            </div>            
          </div>
        </section>


        {/* ==== SECTION 6 : Market trend analysis... ==== */}
        <section className="section-6">
          <div className="section-inner-container">
            <h2>{pageContent[35]}</h2>


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
                <p>{pageContent[36]}</p>
                <p>{pageContent[37]}</p>
                <ul>
                  <li className="list-item">
                    <p>{pageContent[38]}</p>
                  </li>
                  <li className="list-item">
                    <p>{pageContent[39]}</p>
                  </li>
                  <li className="list-item">
                    <p>{pageContent[40]}</p>
                  </li>
                </ul>
                <p>{pageContent[41]}</p>


                <div className="button-container">
                  {/* GET INSTANT ACCESS : 2 Months for $20 */}
                  <button
                    onClick={() => { campaignShopPage('ica_n_20intro') }}
                    // data-product="302102" 
                    data-title="IBD Digital 2 weeks for $20" 
                    aria-label="Get Instant Access"
                  >
                    <p>{pageContent[42]}</p>
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
                <h2>{pageContent[43]}</h2>
                <p>{pageContent[44]}</p>
                <p>{pageContent[45]}</p>
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
              <h2>{pageContent[46]}</h2>

              <div className="button-container">
                {/* 2 MONTHS FOR $20 : 2 Months for $20 */}
                <button
                  onClick={() => { campaignShopPage('ica_n_20intro') }}
                  // data-product="302102" 
                  data-title="IBD Digital 2 weeks for $20" 
                  aria-label="2 Months for $20"
                >
                  <p dangerouslySetInnerHTML={{__html: pageContent[47]}}></p>
                  {/*<FontAwesomeIcon icon={faChevronRight} className="faChevronRight" />*/}
                </button>
              </div>
              <p className="no-obligation">{ pageContent[48] }</p>
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