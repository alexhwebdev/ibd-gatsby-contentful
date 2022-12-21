import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { GatsbyImage } from "gatsby-plugin-image";


// class FeaturesS3Carousel extends Component {
const FeaturesS3Carousel = (props) => {
  // render() {
    {
      console.log('props ', props)
    }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      // autoplaySpeed: 2000
    };
    return (
      <div>
        <h2>Single Item</h2>
        <Slider {...settings}>
          <div>
{/*   This method does not work here. 
            <GatsbyImage 
              className="graphic-IBD-50"
              image={props.data[2][1]}
              placeholder="graphic-IBD-50"
              alt="Image - IBD Digital Device"
            />
*/}
            <h3>IBD 50</h3>
            <p>Only the strongest stocks from the best-performing sectors</p>
          </div>
        </Slider>
      </div>
    );
  // }
}
export default FeaturesS3Carousel;




/*  ========== NOTES ==========


'StackOverflow' :
  https://stackoverflow.com/questions/61645732/is-there-a-good-react-carousel-components-that-will-work-with-gatsby-image

'React Slick' : 
  https://react-slick.neostack.com/

https://react-slick.neostack.com/docs/get-started :
  Note: But be aware slick-carousel has a peer-dependancy on jQuery which you, or your colleagues may not like to see in your console output, so you can always grab the CSS from there and convert it into any CSS in JS solution that you might be using.



*/
