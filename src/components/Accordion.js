import React, { useState } from 'react';
// import styled from 'styled-components';

import '../pages/ibd-digital/styles/faqs.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../utils/font-awesome';
// import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

// ==========  STYLES  ==========
// const AnswerContainer = styled.div`
// 	display: flex;
//   transition: 0.3s;
//   overflow: hidden;

// 	&.show-answer {
// 		max-height: 500px;
// 		padding-bottom: 25px;
// 		transition: 0.3s;
// 	}
// 	&.hide-answer {
// 		max-height: 0px;
// 		overflow: hidden;
// 		padding-bottom: 0px;
// 		transition: 0.3s;
// 	}
// `

const Accordion = ({ question, answer }) => {
  // console.log('question ', question)
  // console.log('answer ', answer)

  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div 
      	className="icon-question-container" 
      	onClick={() => setIsActive(!isActive)}
      >
        <div className="plus-minus-container">
          {
            isActive ? 
            <span className="faMinus"></span> :
            <span className="faPlus"></span>
          }
          {/*
            isActive ? 
            <FontAwesomeIcon className="faMinus" icon={faMinus}/>
            : 
            <FontAwesomeIcon className="faPlus" icon={faPlus}/>
          */}
        </div>

        <h4 className="question">{question}</h4>
      </div>
      {/*
      	// isActive && 
      	// <AnswerContainer className="answer-container">{answer}</AnswerContainer>
      	<AnswerContainer 
      		className={ 
      			isActive ? 
            "answer-container show-answer" : 
            "answer-container hide-answer"
      		}
      	>
          <p>{answer}</p>
      	</AnswerContainer>
      */}
      <div 
        className={ 
          isActive ? 
          "answer-container show-answer" : 
          "answer-container hide-answer"
        }
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordion;








/* -------------------------------------  N O T E S

Accordian :
TUTS : https://www.freecodecamp.org/news/build-accordion-menu-in-react-without-external-libraries/
CSS 	: https://github.com/myogeshchavan97/react-accordion-demo/blob/master/src/styles.css
DEMO : https://react-accordion-demo.netlify.app/

*/







