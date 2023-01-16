import React from "react"
import { useState, useEffect, useRef } from "react"

// import TestImages from '../images/test-images/0001.jpg'
import './styles/airpods.scss'

// console.log('TestImages ', TestImages)
// 'https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/0080.jpg'





let context;

const Airpods = () => {
  const canvasRef = useRef(null);
  // console.log('canvasRef ', canvasRef)



  useEffect(() => {


    const frameCount = 148;
    const currentFrame = index => (
      // `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`

      `https://ibdgatsbycontentfulmain.gatsbyjs.io//static/${index.toString().padStart(4, '0')}.jpg`
    )
    console.log('currentFrame ', currentFrame)



    const preloadImages = () => {
      for (let i = 1; i < frameCount; i++) {
        const img = document.createElement("img");
        img.src = currentFrame(i);
        // console.log('currentFrame(i) ', currentFrame(i))
      }
    };

    // const img = new Image()
    const img = document.createElement("img");
    console.log('img ', img)

    img.src = currentFrame(1);

    // The onload event occurs when an object has been loaded.
    img.onload = () => {
      // The drawImage() method draws an image, canvas, or video onto the canvas.
      // The drawImage() method can also draw parts of an image, and/or increase/reduce the image size.
      // SYNTAX : context.drawImage(img,x,y,width,height);
      context.drawImage(img, 0, 0);
    }

    const updateImage = index => {
      img.src = currentFrame(index);
      context.drawImage(img, 0, 0);
    }


    window.addEventListener('scroll', () => {  
      const scrollTop = document.documentElement.scrollTop;
      // console.log('scrollTop ', scrollTop)

      const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
      // console.log('maxScrollTop ', maxScrollTop)

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
    console.log('canvas ', canvas)

    context = canvas.current.getContext('2d');
    console.log('context ', context)

    canvas.current.width = 1158;
    canvas.current.height = 770;
  }
  useEffect(() => {
    asyncCanvas(canvasRef);
  }, []);



  return (
    <div className="page-2" style={{ height: '200vh'}}>
      <canvas 
        id="hero-lightpass" 
        ref={canvasRef} 
        // width={500}
        // height={500}
      />
    </div>
  )
}



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
