import React from 'react';
import styled,{css} from 'styled-components';

const CardBox = styled.div`
    width:300px;
    height:100px;
    background : white;
    padding: 2vh;
    box-sizing : border-box;
    margin:2vh auto;
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
    const OpenCard = ({card,feature}) => {
        if (feature !== "send"){

            console.log(card)
        }
    }
    return (
        <CardBox feature={feature} onClick = {() => OpenCard({card,feature})}>{card.cardName}</CardBox>        
    )
}

export default Card;