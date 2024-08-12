import styled from "styled-components";

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f9f9fb;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const AccordionDetails = styled.details`
  margin: 0;
  border-bottom: 1px solid #e4e4e7;
  transition: all 0.3s ease-in-out;
  background-color: #fff;

  &:hover {
    background-color: #f1f1f3;
  }

  &[open] {
    background-color: #e8e8ea;
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
  padding: 1.2rem 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ececf1;
  }

  &::-webkit-details-marker {
    display: none;
  }
`;

export const AccordionTitle = styled.span`
  color: #151518;
  width: 100%;
  transition: color 250ms ease-in-out;
`;

export const AccordionIcon = styled.span`
  opacity: 0.8;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const AccordionContent = styled.div`
  color: #3c3e47;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.65;
  background-color: #fafafa;
  border-radius: 0 0 12px 12px;
  transition: max-height 0.3s ease-in-out;
`;