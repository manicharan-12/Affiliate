import styled from "styled-components";


export const GetStartedContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
margin-top: 2rem;
`

export const ContainerBox=styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
margin-top: 50px;
`

export const CardContainer=styled.div`
display: flex;
flex-direction: column;
text-align: left;
    width: 264px;
    padding: 0 12px;

@media (max-width: 1150px){
    width: 156px;
}
`

export const Image=styled.img`
    width: 74px;
    height: 74px;
`