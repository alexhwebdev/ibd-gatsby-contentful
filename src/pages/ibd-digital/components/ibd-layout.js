// PAGE NOT IN USE
// PAGE NOT IN USE
// PAGE NOT IN USE


import React from "react"
import Transition from "./ibd-page-transition"


const IBDLayout = props => {
  console.log('ibd-layout.js - INSIDE props ', props)

  return (
    <>
      <Transition {...props}>
        <div key={"container-" + props.location.pathname}>
          <main className="TESTING-ibd-layout.js">{props.children}</main>
        </div>
      </Transition>
    </>
  )
}

export default IBDLayout
