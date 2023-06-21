import * as React from "react"
import { Router } from "@reach/router"

import Layout from "../components/Layout";

import LogoutButton from "../components/LogoutButton";
import ComponentPrivatePage from "../components/ComponentPrivatePage";


const PrivatePage = () => (
  <Layout>
    <div style={{marginTop:'100px'}}>
      <Router basepath="/">
        {/*<Profile path="/profile" />*/}

        <ComponentPrivatePage path="/PrivatePage" />
      </Router>
    </div>


    <div style={{marginTop:'100px'}}>

      <LogoutButton />
    </div>
  </Layout>
);

export default PrivatePage
