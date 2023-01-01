import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';



const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

const SEO = ({ 
  title, 
  description,
  lang, 
  meta, 
  // keywords,
  schemaMarkup
}) => {
  const { site } = useStaticQuery(query);
  const metaDescription = description || site.siteMetadata.description;
  // console.log('seo.js - metaDescription', metaDescription)


  return (
    <Helmet 
      htmlAttributes={{ lang: "en" }}
      title={`${site.siteMetadata.title}  |  ${title}`}
      meta={
        [{
          name:`description`,
          content: metaDescription
        }]
      }
    > 
      {/* ========== GatsbyJS: How to Implement Schema Markup on Your Gatsby Site ========== */}
      {/* https://www.youtube.com/watch?v=BIQGBKXc6AI */}
      { 
        schemaMarkup &&
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      }


      {/* ========== FONTAWESOME ========== */}
      {/*
      <link crossorigin="anonymous" rel="stylesheet" 
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
      />
      */}


      {/* ========== GOOGLE FONT ==========
          - 2nd best method to bring in Fonts in seo.js.
          - 1st best method is through 'package.json' (ex. @fontsource/poppins) and serve fonts ourselves
          - 3rd best is through '_variables.scss' by using '@import url'
          GOOGLE FONT : Faster when brought in from '_variabels.scss' as '@import url()' 
          ARTICLE : https://pagespeedchecklist.com/asynchronous-google-fonts
      
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>

        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" 
          media="print" onload="this.onload=null;this.removeAttribute('media');"
        />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" 
          media="print" onload="this.onload=null;this.removeAttribute('media');"
        />
        <link rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap" 
          media="print" onload="this.onload=null;this.removeAttribute('media');"
        />
      */}


      {/* @fortawesome - Was in 'package.json'
          "@fortawesome/fontawesome-svg-core": "^1.2.36",
          "@fortawesome/free-brands-svg-icons": "^5.15.4",
          "@fortawesome/free-solid-svg-icons": "^5.15.4",
          "@fortawesome/react-fontawesome": "^0.1.15",
      */}

      {/* REVIEWS.io
        <div id="badge-160" ></div>
        <script>
          reviewsBadgeModern('badge-160', {
          store: 'investors-business-daily',
          primaryClr: '#0438BD',
          starsClr: '#0438BD'
          });
        </script>
        <script src="https://widget.reviews.io/badge-modern/dist.js"></script>
      */}

    </Helmet>
  )
};
export default SEO;



// const SEO = ({ title, description }) => {
//   const { site } = useStaticQuery(graphql`
//     {
//       site {
//         siteMetadata {
//           title
//           description
//         }
//       }
//     }
//   `);

//   const seo = {
//     title: title
//       ? `${title} - ${site.siteMetadata.title}`
//       : site.siteMetadata.title,
//     description: description || site.siteMetadata.description,

//   };

//   return (
//     <Helmet 
//       htmlAttributes={{ lang: "en" }}
//       title={seo.title}
//     >
//       <meta name="description" content={seo.description} />
//     </Helmet>
//   );
// };
// export default SEO;


