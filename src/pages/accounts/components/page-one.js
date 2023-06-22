import * as React from "react"
import { StaticQuery, graphql, Link } from "gatsby";
import LogoutButton from "../../../components/LogoutButton";


const PageOne = (props) => {
  console.log('PageOne props', props)


  return (
    <StaticQuery
      query={graphql`
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
          allContentfulIbddContentType(filter: {pageTitle: {eq: "Secure Page"}}) {
            edges {
              node {
                pageTitle
                description
                slug
                pageContent {
                  raw
                }
              }
            }
          }
        }
      `}

      render={ data => (
        console.log('PageOne data', data),

        <div>
          Secure PageOne
          <br/><br/>

          graphql data :<br/>
          {data.allContentfulIbddContentType.edges[0].node.pageTitle}
          <br/><br/>

          <LogoutButton />
        </div>
      )}
    />
  )
};


export default PageOne;



