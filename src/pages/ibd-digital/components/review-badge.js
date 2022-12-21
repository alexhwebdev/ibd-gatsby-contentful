import React from "react";
// import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../../../utils/font-awesome';
// import { faStar } from '@fortawesome/free-solid-svg-icons'
import '../styles/review-badge.scss';


// ==========  STYLES  ==========
// const Main = styled.section`
//   // border: 5px solid orange;
// `



const Review_Badge = (props) => {
  return (
    <section id="review-badge">
      <div className="section-inner-container">
        <ul>
          <li>
            <div className="subscriber-stars-container">
              <p className="subscriber">Mike G.</p>
              <div className="stars-container">
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p>
              “Investor’s Business Daily delivers information you can’t get anywhere else.”
            </p>
          </li>

          <li>
            <div className="subscriber-stars-container">
              <p className="subscriber">Mike G.</p>
              <div className="stars-container">
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p>
              “Investor’s Business Daily delivers information you can’t get anywhere else.”
            </p>
          </li>

          <li>
            <div className="subscriber-stars-container">
              <p className="subscriber">Julie P.</p>
              <div className="stars-container">
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p>
              “The CAN SLIM System is the most comprehensive, accurate money-making tool that I've ever come across."
            </p>
          </li>

          <li>
            <div className="subscriber-stars-container">
              <p className="subscriber">Charlotte H.</p>
              <div className="stars-container">
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                {/*<FontAwesomeIcon icon={faStar} className="faStar" />*/}
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            <p>
              “I’ve been investing for 31 years and tried many different strategies. Nothing has beaten Investor’s Business Daily.”
            </p>
          </li>
        </ul>
      </div>      
    </section>

  )
}
export default Review_Badge;



/*
<section class="off-white-bg py-5 ">
  <div class="container">
    <div class="row ">

      <div class="col-12 col-md-3 ">
        <div id="badge-160" style="max-width:200px;" class="mx-auto d-block"></div>
      </div>
      
      <div class="col-12 col-md-3">
        <div class="d-flex justify-content-between">
          <p class="font-bold ">
            Mike G.
          </p>
          <p class=" text-right ">
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
          </p>
        </div>
           
        <p>
          <em>“Investor’s Business Daily delivers information you can’t get anywhere else.”</em>
        </p>
      </div>
    

      <div class="col-12 col-md-3">
        <div class="d-flex justify-content-between">
          <p class="font-bold"> 
            Julie P.
          </p>
          <p class=" text-right">
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
          </p>
        </div>
        <p>
          <em>“The CAN SLIM System is the most comprehensive, accurate money-making tool that I've ever come across." </em>
        </p>
      </div>


      <div class="col-12 col-md-3">
        <div class="d-flex justify-content-between">
          <p class="font-bold"> 
            Charlotte H
          </p>
          <p class=" text-right">
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
            <span class="fa fa-star fa-lg blue"></span>
          </p>
        </div>
        <p>
          <em>“I’ve been investing for 31 years and tried many different strategies. Nothing has beaten Investor’s Business Daily.” </em>
        </p>
      </div>

    </div>
  </div>
</section>


<script src="https://widget.reviews.io/badge-modern/dist.js"></script>

<script>
    reviewsBadgeModern('badge-160', {
    store: 'investors-business-daily',
    primaryClr: '#0438BD',
    starsClr: '#0438BD'
    });
</script>
*/






