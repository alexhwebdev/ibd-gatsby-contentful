import React from "react";


const Footer = () => {
  return (
    <footer className="page-footer" style={{border:"5px solid black"}}>
      <p>
        {
          new Date().getFullYear()
        }
      </p>
    </footer>
  )
};
export default Footer





