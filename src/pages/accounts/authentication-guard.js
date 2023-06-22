import * as React from "react"
import { withAuthenticationRequired } from '@auth0/auth0-react';


import { Link } from "gatsby";



import { Router } from "@reach/router"



const AuthenticationGuard = ({ component }) => {
  const Component = withAuthenticationRequired(component)

  return <Component />

  // return (
  //   <div style={{marginTop:'100px'}}>
  //     <Layout>
  //       <Link to="/">Home</Link>
  //       <br/><br/><br/><br/>
 
  //     </Layout>
  //   </div>
  // )
}
export default AuthenticationGuard;
// export default withAuthenticationRequired(AuthenticationGuard);