// THIS FILE NOT USED



/* ==========  REACT  |  GATSBY  |  PLUGINS  ========== */
import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import styled, {createGlobalStyle} from 'styled-components';
import './layout.css'
import 'normalize.css'


/* ==========  COMPONENTS  ========== */
import IbdPageTransition from "../pages/ibd-digital/components/ibd-page-transition";
// import LBTransition from "../pages/leaderboard/components/lb-page-transition";
// import Footer from './Footer';




const Layout = (props) => {
  // console.log('main-layout.js props ', props)

  // EX : https://stackoverflow.com/questions/8519734/javascript-get-characters-between-slashes
  // const brand = props.location.pathname;
  // console.log('brand ', brand)
  // const getBrand = brand.split('/');
  // console.log('getBrand[1] ', getBrand[1])

  // SIMPLIFY THIS :
  /*
  if (getBrand[1] === 'ibd') {
    return (
      <IbdPageTransition {...props}>
        <div key={"container-" + props.location.pathname + 'test'}>
          <main>{props.children}</main>
        </div>
      </bdPageDTransition>
    )
  } 
  else if (getBrand[1] === 'leaderboard') {
    return (
      <LBTransition {...props}>
        <div key={"container-" + props.location.pathname + 'test'}>
          <main>{props.children}</main>
        </div>
      </LBTransition>
    )
  }
  else if (getBrand[1] === 'sandbox') {
    return (
      <IbdPageTransition {...props}>
        <div key={"container-" + props.location.pathname + 'test'}>
          <main>{props.children}</main>
        </div>
      </bdPageDTransition>
    )
  }
  */

  return (
    <div>
      <IbdPageTransition {...props}>
        <div 
          // key={"container-" + props.location.pathname}
          key={"container-" + props.path}
        >
          <main className="main-layout">
            {props.children}
          </main>
        </div>
      </IbdPageTransition>
    </div>
  )
}
export default Layout







// import React from 'react';
// import Header from './Header';
// import GlobalStyles from '../styles/GlobalStyles';
// import 'normalize.css/normalize.css';
// import Footer from './Footer';
// import Search from './search/SearchModal';
// import { SearchModalContextProvider } from '../contexts/searchModalContext';


// const GlobalStyles = createGlobalStyle`
//   body, html {
//     background: lightgray;
//     margin: 0 !important;
//     padding: 0 !important;
//   }
// `
// const LayoutWrapper = styled.div`
//   // border: 5px solid blue;
//   // max-width: 960px;
//   margin: 0 auto;
// `


// function Layout({ children }) {
//   return (
//     <main>{children}</main>

//     <SearchModalContextProvider>
    
//       <GlobalStyles />
//       <Search />
//       <Header />
//       <main>{children}</main>
//       <Footer />
    
//     </SearchModalContextProvider>

//   );
// }

// export default Layout;


