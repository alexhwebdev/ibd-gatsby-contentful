// Lession : 11. IMPORTANT! Fixing "TypeError: Cannot read property 'page' of undefined"  --
// export default function(){return null};


import React from "react";
import {
  // graphql, 
  // StaticQuery, 
  Link
} from 'gatsby';

import Layout from "../components/Layout";
// import Image from "../components/image";
// import Seo from "../components/seo";



const IndexPage = () => (
  <Layout>
{/*    <Seo 
      title="index.js Home"
      // description="Why IBD - custom desc"
    ></Seo>*/}

    <Link to="/page-2">Go to page 2</Link>
  </Layout>
)

export default IndexPage












// import React from 'react';
// import FeaturedBlogs from '../components/homePage/FeaturedBlogs';
// import HeroSection from '../components/homePage/HeroSection';
// import TopCategories from '../components/homePage/TopCategories';
// import SEO from '../components/seo';

// const IndexPage = () => (
//   <>
//     <SEO />
//     <HeroSection />
//     <div className="container">
//       <FeaturedBlogs />
//       <TopCategories />
//     </div>
//   </>
// );

// export default IndexPage;







// const IndexPage = () => (
//   <>
//     <h1>Welcome to "TechHub-Blog" Project</h1>
//     <h2>
//       - by{' '}
//       <a
//         href="https://youtube.com/webcifarOfficial"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Web Cifar
//       </a>
//     </h2>
//   </>
// );

// const IndexPage = () => null;

// export default IndexPage;
