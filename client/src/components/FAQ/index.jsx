import React from 'react';
import {AccordionContainer,AccordionDetails, AccordionSummary,AccordionTitle,AccordionContent,AccordionIcon}from './styledComponents'
import { FiChevronDown } from 'react-icons/fi';  

// Styled-components for accordion

const accordionData = [
    {
      title: "What is the universe?",
      content:
        "The universe is the entirety of all objects and spaces that exist in time and space. It is the largest known system and is believed to be approximately 13.8 billion years old.",
    },
    {
      title: "What is dark matter?",
      content:
        "Dark matter is a form of matter that cannot be seen directly but can be inferred by its influence on galaxy formation and the speed of star rotation. It is believed to make up 27% of the total mass of the universe.",
    },
    {
      title: "What is the Big Bang?",
      content:
        "The Big Bang is the event that marked the beginning of the universe, approximately 13.8 billion years ago. It is believed to have been a moment when the entire universe rapidly expanded from an infinitely dense and hot point.",
    },
    {
      title: "What is dark energy?",
      content:
        "Dark energy is a form of energy that cannot be seen directly but can be inferred by its influence on the universe's expansion. It is believed to make up 68% of the total energy of the universe.",
    },
    {
      title: "What is the cosmic horizon?",
      content:
        "The cosmic horizon is the farthest limit that can be seen from Earth. It is the most distant point visible due to the universe's expansion and the speed of light. All stars and galaxies beyond this point are beyond human sight.",
    },
  ];
  



const Accordion = () => {
  return (
    <div style={{padding:"24px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
      <h1 style={{marginBottom: "20px", color: "#333", fontSize: "1.75rem"}}>Frequently Asked Questions</h1>
    <AccordionContainer>
      {accordionData.map((item, index) => (
        <AccordionDetails key={index}>
          <AccordionSummary>
            <AccordionTitle>{item.title}</AccordionTitle>
            <AccordionIcon>
              <FiChevronDown /> 
            </AccordionIcon>
          </AccordionSummary>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionDetails>
      ))}
    </AccordionContainer>
    </div>
  );
};

export default Accordion;
