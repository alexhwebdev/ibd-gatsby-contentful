import * as React from "react"
import { useState, useEffect } from "react"
import './styles/airpods.scss'


const IndexPage = () => {
  // const [count, setCount] = useState(1);
  const [scrolled, setScrolled] = useState(0);
  
  // useEffect(() => {
  //   if(count < 146) {
  //     setTimeout(() => {
  //       setCount(count + 1)
  //     }, 50)
  //   } else {
  //     setCount(1)
  //   }
  // }, [count]);

  useEffect(() => {
    window.addEventListener("scroll", scrollProgress);

    return () => window.addEventListener("scroll", scrollProgress);
  });

  const scrollProgress = () => {
    const scrollpx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scollLen = Math.ceil(scrollpx / winHeightPx * 100 / 0.68); // 100/146

    setScrolled(scollLen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img 
          alt=""
          src={`https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${scrolled.toString().padStart(4, '0')}.jpg`} 
        />
      </header>

      {/*<Link to="/page-2">page-2</Link>*/}
    </div>
  )

}

export default IndexPage



/* -------------------- NOTES

padStart() :

  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart











*/
