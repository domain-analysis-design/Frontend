import React from 'react';
import styled,{css} from 'styled-components';

const CardBox = styled.div`
    width:300px;
    height:100px;
    background : white;
    padding: 2vh;
    box-sizing : border-box;
    margin:2vh 0;
    font-size:20px;
    cursor : pointer;

    ${props=>props.feature === "send" &&
    css`
        width:300px;
        height:80px;
        text-align : center;

    `}
`;


function Card({card,feature}){
    return (
        <CardBox feature={feature}>{card.cardName}</CardBox>        
    )
}

export default Card;