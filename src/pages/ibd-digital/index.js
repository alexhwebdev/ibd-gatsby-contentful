/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React, {
  // useEffect
} from "react";
import { graphql } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from 'gatsby';
// import styled from 'styled-components';
// import { globalHistory } from '@reach/router'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";



/* ==========  COMPONENTS  ========== */
import Seo from '../../components/seo';
import ReviewBadge from './components/review-badge';
import IBDFooter from './components/ibd-footer';
// import { campaignShopPage } from './components/campaignShopPage';


/* ==========  UTILS  ========== */
import { parseSiteMetadata } from '../../utils/parseSiteMetadata';
import { parsePageContent } from '../../utils/parsePageContent';
import { sortedGatsbyImgData } from '../../utils/sortedGatsbyImgData';
import { campaignShopPage } from '../../utils/campaignShopPage';
import Video from '../../utils/Video';


/* ==========  FONT | FONT-AWESOME | STYLES  ========== */
// import "@fontsource/manrope/500.css";
// import "@fontsource/manrope/800.css";


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../../utils/font-awesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import './styles/index-overview.scss';
import './styles/review-badge.scss';
import './styles/ibd-footer.scss';


// ==========  STYLES  ==========
// const Main = styled.div``




// https://www.gatsbyjs.com/docs/how-to/images-and-media/working-with-video/
import DogVideo from "../../images/test-video.mp4"


// ========== 3rd Party - VIDEO ==========
const IBDVideo = "https://cdn.jwplayer.com/players/uZNcmMG4-z32DQ8pX.html";





const IBD_Overview = (props) => {
  console.log('IBD_Overview props', props)

  // const metaData = parseSiteMetadata(props.data);
  // ---------- PAGE : META DATA ----------
  const metaData = props.data.allSite.nodes[0].siteMetadata;


  // // https://www.youtube.com/watch?v=BIQGBKXc6AI
  // const schema = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   "name": "Gatsby Wordpress IBD",
  //   "description": metaData[0].description,
  //   "url": metaData[0].siteUrl,
  //   "logo": ""
  // }
  // ---------- PAGE : SEO SCHEMA ----------
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gatsby Sanity IBD",
    "description": metaData.description,
    "url": metaData.siteUrl,
    "logo": ""
  }


  const contentfulEdgesNode = props.data.allContentfulIbddContentType.edges[0].node;
  const pageContent = parsePageContent( contentfulEdgesNode.pageTitle, contentfulEdgesNode.pageContent.raw);


  const orderOfImgs = [ 
    "bg-graphic-art.webp",
    "graphic-ibd-stock-rating.webp",
    "graphic-woman-laptop.webp",
  ];


  const gatsbyImgArray = sortedGatsbyImgData(contentfulEdgesNode.pageImages, orderOfImgs);
  console.log('IBD_Overview gatsbyImgArray', gatsbyImgArray)


  return (
    <div className="ibd-index">
      <Seo 
        // // title={metaData[0].title}
        // description={metaData[0].description}
        // schemaMarkup={schema}

        title={metaData.title}
        description={metaData.description}
        schemaMarkup={schema}
      />


      <div style={{height:'60px'}}></div>

      <div id="overview">
        {/* ==========  SECTION 0 : TESTING  ========== */}
        <section className="section-0">
          {/*
           <GatsbyImage 
            className="bg-graphic-art"
            image={gatsbyImgArray[0][1]} 
            alt=""
          />
          */}
          <div className="section-inner-container">

            <div className="copy-container">
              {/* Get an edge in the stock market. */}
              {/*<h1 dangerouslySetInnerHTML={{__html: pageContent[0]}}></h1>*/}
              <h1>TESTING TESTING TESTING ibd-gatsby-sanity</h1>



              <h1 dangerouslySetInnerHTML={{__html: pageContent[0]}}></h1>


              {/* With IBD® Digital ... Same as below */}
              <p>{pageContent[1]}</p>

              {/* 2 Months for $20 */}
              <button
                onClick={() => { campaignShopPage('ica_n_20intro') }}
                // data-product="302102" 
                data-title="IBD Digital 2 weeks for $20" 
              >
                {pageContent[2]}
              </button>

              <p className="disclaimer">{pageContent[3]}</p>
            </div>
            {/* Video for Large Screen */}
            {/*
            <iframe
              className="iframe-module"
              src={IBDVideo}
              // title={'IBD Video'}
              // src="https://cdn.jwplayer.com/players/uZNcmMG4-z32DQ8pX.html"
              // title="IBD Video"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              height="700"
            />
            */}
            <video controls style={{width: '100%'}}>
              <source src={DogVideo} type="video/mp4" />
            </video>

            {/*
            <div className="video-container">
              <Video 
                videoSrcURL={IBDVideo}
                videoTitle={'IBD Video'}
              />
            </div>
            */}
          </div>
        </section>


        {/*<div onClick={() => { handleClick() }}>
          Trigger
        </div>*/}



        {/* ==========  SECTION 1 : Get an edge ...  ========== */}
        <section className="section-1">
          <GatsbyImage 
            className="bg-graphic-art"
            image={gatsbyImgArray[0][1]}
            // src={gatsbyImgArray} 
            alt=""
          />

          <div className="section-inner-container">

            <div className="copy-container">
              {/* Get an edge in the stock market. */}
              <h1 dangerouslySetInnerHTML={{__html: pageContent[0]}}></h1>

              {/* With IBD® Digital ... Same as below */}
              <p>{pageContent[1]}</p>

              {/* 2 Months for $20 */}
              <button
                onClick={() => { campaignShopPage('ICA_SCHW_8') }}
                // data-product="300109" 
                data-title="8 weeks of IBD Digital for $8" 
              >
                {pageContent[2]}
              </button>
              <p className="disclaimer">{pageContent[3]}</p>
            </div>
            {/* Video for Large Screen */}
            <div className="video-container">
              {/*
              <Video 
                videoSrcURL={IBDVideo}
                videoTitle={'IBD Video'}
              />
              */}
              <video controls style={{width: '100%'}}>
                <source src={DogVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </section>


        {/* Video for Mobile */}
        <div className="video-768">
          {/*
          <Video 
            videoSrcURL={IBDVideo}
            videoTitle={'IBD Video'}
          />
          */}
          <video controls style={{width: '100%'}}>
            <source src={DogVideo} type="video/mp4" />
          </video>
        </div>


        {/* ==========  SECTION 2 : We help you ...  ========== */}
        <section className="section-2">
          <div className="intro-container">
            <h2>{pageContent[4]}</h2>
            <p>{pageContent[5]}</p>
          </div>

          <div 
            className="img-copy-container"
          >
            <div className="img-container"
              data-sal="slide-right"
              data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
              data-sal-delay="200" // adds delay to the animation (from 5 to 1000 ms)
              data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
            >
              <GatsbyImage className="graphic-ibd-stock-rating"
                image={gatsbyImgArray[1][1]}
                placeholder="graphic-ibd-stock-rating"
                alt="Image - IBD Stock Rating"
              />
            </div>
            <div className="copy-container">
              <div className="copy"
                data-sal="slide-left"
                data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
              >
                <h3>{pageContent[6]}</h3>
                <p>{pageContent[7]}</p>
              </div>

              <div className="copy"
                data-sal="slide-left"
                data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="400" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
              >
                <h3>{pageContent[8]}</h3>
                <p>{pageContent[9]}</p>
              </div>

              <div className="copy"
                data-sal="slide-left"
                data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="500" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
              >
                <h3>{pageContent[10]}</h3>
                <p>{pageContent[11]}</p>
              </div>

              <div className="copy"
                data-sal="slide-left"
                data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="600" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
              >
                <h3>{pageContent[12]}</h3>
                <p>{pageContent[13]}</p>
              </div>

              {/* See More Features */}
              <div className="button-container"
                data-sal="slide-left"
                data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="700" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
              >
                <button>
                  <Link 
                    to="/ibd/features/" 
                    className=""
                    // activeClassName="active" 
                    title="See More Features"
                  >
                    <p>{pageContent[14]}</p>
                  </Link>
                </button>
              </div>

            </div>
          </div>
        </section>


        {/* ==========  SECTION 3 : This is why ...  ========== */}
        <section className="section-3">
          <div className="intro-container">
            <h2>{pageContent[15]}</h2>
          </div>

          <div className="copy-img-container">
            <div className="copy-container">
              <div className="icon-copy"
                data-sal="slide-right"
                data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="100" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
              >
                <span></span>
                <div className="copy">
                  <h3>{pageContent[16]}</h3>
                  <p>{pageContent[17]}</p>                  
                </div>
              </div>

              <div className="icon-copy"
                data-sal="slide-right"
                data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="300" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
              >
                <span></span>
                <div className="copy">
                  <h3>{pageContent[18]}</h3>
                  <p>{pageContent[19]}</p>
                </div>
              </div>

              <div className="icon-copy"
                data-sal="slide-right"
                data-sal-duration="1500" // changes duration of the animation (from 200 to 2000 ms)
                data-sal-delay="500" // adds delay to the animation (from 5 to 1000 ms)
                data-sal-easing="ease" // sets easing for the animation (see easings.net for reference)
              >
                <span></span>
                <div className="copy">
                  <h3>{pageContent[20]}</h3>
                  <p>{pageContent[21]}</p>
                </div>
              </div>
            </div>
            <div className="img-quote-container">
              <GatsbyImage 
                className="graphic-woman-laptop"
                image={gatsbyImgArray[2][1]}
                alt=""
              />

              <div className="copy">
                {/*<h3>{pageContent[22]}</h3>*/}
                <p><i>"{pageContent[22]}"</i></p>
                <p>{pageContent[23]}</p>
              </div>
            </div>
          </div>
          <div className="button-container">
            {/* See Why We're Better */}
            <button>
              <Link 
                to="/ibd/why-ibd/" 
                className="button_cta"
                target="_blank"
                title="See Why We're Better"
              >
                <p>{pageContent[24]}</p>
              </Link>
            </button>
          </div>
        </section>



        {/* ========== SECTION 4 : SUBSCRIBE Choose your IBD ... ========== */}
        <section id="pricing" className="section-4">
          <div className="intro-container">
            <p>{pageContent[25]}</p>
            <h2>{pageContent[26]}</h2>
          </div>

          <div className="card-wrapper">
            {/* Trial */}
            <div className="card-container">
              <h3>{pageContent[27]}</h3>
              <p>{pageContent[28]}</p>
              <h3>{pageContent[29]}</h3>
              <p>{pageContent[30]}</p>
              
              {/* SELECT */}
              <button
                onClick={() => { campaignShopPage('ica_n_20intro') }}
                // data-product="302102" 
                data-title="IBD Digital 2 weeks for $20" 
              >
                {pageContent[31]}
              </button>

              <p>{pageContent[32]}</p>
            </div>

            {/* Monthly */}
            <div className="card-container">
              <h3>{pageContent[33]}</h3>
              <p>{pageContent[34]}</p>

              <div className="price-container">
                <h3>{pageContent[35]}</h3>
                <span>{pageContent[36]}</span>
              </div>
              {/* SELECT */}
              <button
                onClick={() => { campaignShopPage('ica_schw_30') }}
                // data-product="302102" 
                data-title="IBD Digital 2 weeks for $20" 
              >
                {pageContent[37]}
              </button>
            </div>

            {/* Annual */}
            <div className="card-container">
              <h3>{pageContent[38]}</h3>
              <p>{pageContent[39]}</p>

              <div className="price-container">
              <h3>{pageContent[40]}</h3>
              <span>{pageContent[41]}</span>
              </div>

              <p>{pageContent[42]}</p>
              
              {/* SELECT */}
              <button
                onClick={() => { campaignShopPage('ica-n') }}
                // data-product="302102" 
                data-title="IBD Digital 2 weeks for $20" 
              >
                {pageContent[43]}
              </button>
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

    allContentfulIbddContentType(filter: {pageTitle: {eq: "Overview"}}) {
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
export default IBD_Overview;