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


const IBD_Overview = (props) => {
  console.log('IBD_Overview props', props)

  const transformedData = documentToReactComponents(JSON.parse(props.data.allContentfulIbddContentType.edges[0].node.pageContent.raw))
  console.log('IBD_Overview transformedData', transformedData)

  return (
    <div className="ibd-index">

      <h1 style={{marginTop:'200px'}}>IBD_Overview</h1>

      {
        documentToReactComponents(JSON.parse(props.data.allContentfulIbddContentType.edges[0].node.pageContent.raw))
      }

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

    allContentfulIbddContentType(filter: {isHomepage: {eq: "Yes"}}) {
      edges {
        node {
          pageTitle
          description
          slug
          pageContent {
            raw
          }
          pageImages {
            gatsbyImageData
          }
        }
      }
    }

  }
`
export default IBD_Overview;