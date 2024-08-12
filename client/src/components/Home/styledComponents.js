import styled from 'styled-components'
import mask1 from '../../assets/Mask 1.png'
import mask2 from '../../assets/Mask 2.png'

export const HomeContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
background: url(${mask1}) no-repeat bottom 0 left 0, url(${mask2}) no-repeat right 0, linear-gradient(90.02deg, #0d165d -1.1%, #390d5d 99.97%) no-repeat;
color: #fff;

@media (max-width:768px){
    background: url(${mask1}) no-repeat bottom 0 left 0, url(${mask2}) no-repeat right 0, linear-gradient(90.02deg, #0d165d -1.1%, #390d5d 99.97%) no-repeat;
}

`

export const TextContainer=styled.div`
text-align: center;
`

export const ButtonContainer=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

button{
    background: linear-gradient(92.12deg, #f6430f .78%, #ee9f15 99.43%);
    color: #fff;
    box-sizing: border-box;
    position: relative;
    text-transform: uppercase;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    outline: none;
    border: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    overflow: visible;
    margin: 0;
    min-width: 64px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 6px;
    transition-duration: .4s;
    transition-timing-function: cubic-bezier(.25,.8,.25,1);
    font-size: 14px;
    font-weight: 500;
}
`