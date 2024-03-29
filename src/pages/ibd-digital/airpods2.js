import React from "react"
import { 
  // useState, 
  useEffect, 
  useRef 
} from "react"
import { graphql } from 'gatsby';

// import TestImages from '../../images/frames/0002.jpg'
import './styles/airpods.scss'

// console.log('TestImages ', TestImages)
// 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0080.jpg'



let context;

const Airpods = (props) => {
  console.log('Airpods props ', props)

  const canvasRef = useRef(null);
  const pageImagesNode = props.data.allContentfulIbddContentType.edges[0].node.pageImages;

  const videoFrameImgsArray = [];
  pageImagesNode.map( eachPageImage => {
    if (eachPageImage.filename.slice(0, 2) === '00' ) {
      videoFrameImgsArray.push(eachPageImage);
    }
  });

  // Sort items in array by filename
  videoFrameImgsArray.sort( (a, b) => {
    return a.filename.slice(0, 4) - b.filename.slice(0, 4);
  });


  useEffect(() => {
    /* 💎💎💎 DATA COMING IN THRU CDN URL METHOD : 
    const frameCount = 148;
    const currentFrame = index => (
      `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`

      // `http://localhost:8000/static/${index.toString().padStart(4, '0')}.jpg`

      // `https://images.ctfassets.net/e28u0mhz7hn5/4ov0paUhxnunP5jgXTNJuv/30f232ee3dc0aec3f64c0532b400a73b/0001.jpg`
    );
    */


    /* 💎💎💎 DATA COMING IN FROM CONTENTFUL METHOD : */
    const frameCount = 40;

    const currentFrame = index => (
      videoFrameImgsArray[index - 1].url
        .slice(0, -8)
        .toString() + `${index.toString()
        .padStart(4, '0')}.jpg`
    );
    

    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        // const img = new Image()
        const img = document.createElement("img");
        
        // currentFrame(i) is each individual image URL
        img.src = currentFrame(i);
      }
    };


    // const img = new Image()
    const img = document.createElement("img");
    img.src = currentFrame(1);

    // The onload event occurs when an object has been loaded.
    img.onload = () => {
      // The drawImage() method draws an image, canvas, or video onto the canvas.
      // The drawImage() method can also draw parts of an image, and/or increase/reduce the image size.
      // SYNTAX : context.drawImage(img,x,y,width,height);
      context.drawImage(img, -75, 0);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, -75, 0);
    }


    window.addEventListener('scroll', () => {  
      const scrollTop = document.documentElement.scrollTop;
      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = scrollTop / maxScrollTop;
      const frameIndex = Math.min(
        frameCount - 1,
        Math.ceil(scrollFraction * frameCount)
      );
      
      requestAnimationFrame(() => updateImage(frameIndex + 1))
    });

    preloadImages()
  });


  const asyncCanvas = async (canvas) => {
    context = canvas.current.getContext('2d');
    // canvas.current.width = 1158;
    canvas.current.width = 1280;
    canvas.current.height = 770;
  }
  useEffect(() => {
    asyncCanvas(canvasRef);
  }, []);



  return (
    <div 
      className="airpods-page" 
      style={{ 
        // width: '100vw', 
        height: '500vh'
      }}
    >
      <canvas 
        id="hero-lightpass" 
        ref={canvasRef} 
        // width={500}
        // height={500}
      />
    </div>
  )
}


export const data = graphql`
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
    allContentfulIbddContentType(filter: {pageTitle: {eq: "Airpods"}}) {
      edges {
        node {
          pageTitle
          description
          slug
          pageContent {
            raw
          }
          pageImages {
            filename
            gatsbyImageData(quality: 100)
            url
          }
        }
      }
    }
  }
`


export default Airpods



/* -------------------- NOTES
Create Fancy Scrolling Animations Used on Apple Product Pages
https://www.youtube.com/watch?v=4OcAAj8aqS8
https://codepen.io/j-v-w/pen/ZEbGzyv


StackOverflow :
  This article somewhat help me understand the code above
  - https://stackoverflow.com/questions/68396087/html-canvas-getcontext-of-null-error-in-react



requestAnimationFrame() :
https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

  - The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.




*/
