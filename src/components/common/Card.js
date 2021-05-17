import React from 'react';
import styled from 'styled-components';

const CardBox = styled.div`
    width:30vh;
    height:10vh;
    background : white;
    padding: 2vh;
    box-sizing : border-box;
    margin:2vh 0;
    font-size:20px;
    cursor : pointer;
`;


function Card({card}){
    return (
        <CardBox>{card.cardName}</CardBox>        
    )
}

export default Card;