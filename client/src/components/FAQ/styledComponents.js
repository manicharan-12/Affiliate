import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 90%;
`;

export const AccordionDetails = styled.details`
  font-size: 1rem;
  margin: 0 auto;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #e4e4e7;
  transition: all 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &[open] svg {
    transform: rotate(180deg);
  }
`;

export const AccordionSummary = styled.summary`
  user-select: none;
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  padding: 1rem 0;

  &:hover {
    text-decoration: underline;
  }

  &:hover .accordion-title {
    opacity: 1;
  }

  &:hover .accordion-icon {
    opacity: 1;
  }

  &::-webkit-details-marker {
    display: none;
  }
`;

export const AccordionTitle = styled.span`
  color: #151518;
  width: 90%;
  font-weight: 500;
  transition: all 250ms ease-in-out;
`;

export const AccordionIcon = styled.span`
  opacity: 0.5;
  pointer-events: none;
  position: absolute;
  right: 1rem;
  transition: all 150ms ease-out;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

export const AccordionContent = styled.div`
  color: #3c3e47;
  padding: 0.2rem 0rem 1rem;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.65;
`;