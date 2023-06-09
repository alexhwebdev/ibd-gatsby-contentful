// Lession : 11. IMPORTANT! Fixing "TypeError: Cannot read property 'page' of undefined"  --
// export default function(){return null};


import React, { useEffect } from "react";
import {
  // graphql, 
  // StaticQuery, 
  Link
} from 'gatsby';

import Layout from "../components/Layout";
// import Image from "../components/image";
// import Seo from "../components/seo";



// function isClient() {
//   return typeof window === 'object';
// }


// export default function EmptyPage({ pageContext }) {
//   useEffect(() => {
//     if (isClient() && pageContext?.redirectTo) {
//       window.location.href = pageContext.redirectTo;
//     }
//   }, []);

//   return <div>SSSSSubdirectory</div>;
// }


import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import ContactForm from "../components/contact-form";


const IndexPage = () => (
  <Layout>
    {/*    
    <Seo 
      title="index.js Home"
      // description="Why IBD - custom desc"
    ></Seo>
    */}

    <div style={{marginTop:'100px'}}>
      <div>
        pages/index.js<br/><br/>
        Subdirectory home page
      </div><br/><br/>

      {/* Using LoginButton Component instead
      <Link to="/account">Sign In</Link> 
      */}
      {/*<LoginButton />*/}
      {/*<LogoutButton />*/}

      <br/><br/><br/><br/>
      <ContactForm />

    </div>

  </Layout>
)

export default IndexPage






