import styled from 'styled-components';
import mask3 from '../../assets/Mask 3.png';

export const BenefitsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: url(${mask3}) no-repeat top right 130px, linear-gradient(90.02deg, #7533b8 -1.1%, #56268c 99.97%);
    color: #ffffff;
    padding: 82px 20px;
    position: relative;
    z-index: 1;
    min-height: 50px;
    overflow-x: hidden;
    
    @media (max-width: 768px) {
        padding: 40px 16px;
        background: linear-gradient(90.02deg, #7533b8 -1.1%, #56268c 99.97%);
    }
`;

export const Section1 = styled.div`
    width: 100%;
    max-width: 364px;
    text-align: center;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Section2 = styled.div`
    width: 100%;
    max-width: 1040px;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    
    @media (max-width: 768px) {
        justify-content: flex-start;
    }
`;

export const Cards = styled.div`
    width: 100%;
    max-width: 340px;
    
    @media (max-width: 768px) {
        width: 156px;
    }
`;

export const Heading = styled.h3`
    font-size: 24px;
    margin-top: 16px;
    
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const Paragraph = styled.p`
    font-size: 16px;
    line-height: 24px;
    
    @media (max-width: 768px) {
        font-size: 12px;
        line-height: 14px;
    }
`;

export const FinalSection = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
    filter: blur(64px);
`;

export const CircuitSection = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    
    @media (max-width: 768px) {
        display: none;
    }
`;
