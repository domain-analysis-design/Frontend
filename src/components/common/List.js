import React from 'react';
import styled from 'styled-components';
import {AiOutlineEllipsis,AiOutlinePlus} from 'react-icons/ai';
import Card from './Card';

const ListBlock = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width: 35vh;
    background-color: rgb(235, 236, 240);
`;

const ListHeader = styled.div`
    width:30vh;
    height:7vh;
    font-size : 28px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const CardGroup = styled.div`
    list-style : none;
`;

const ListFooter = styled.div`
    width:30vh;
    height:8vh;
    font-size:2.8vh;
    line-height:5vh;
    display: flex;
    cursor : pointer;
`;

function List({list}){
    const createCard = () => {
        console.log("createCard")
    }
    return (
        <>
            <ListBlock>
                <ListHeader>
                    <div>{list.listName}</div>
                    <AiOutlineEllipsis style = {{cursor:"pointer",width:"4vh",height:"4vh"}}/>
                </ListHeader>
                <CardGroup>
                    {list.cards.map(card => 
                        <Card card = {card}>
                            card.cardName
                        </Card>    
                    )}
                </CardGroup>
                <ListFooter onClick = {createCard}>
                    <AiOutlinePlus style = {{width:"5vh",height:"5vh"}}/>
                    <div>Add another card</div>
                </ListFooter>
            </ListBlock>
        </>
    )
}

export default List;