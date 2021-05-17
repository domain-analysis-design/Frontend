import React from 'react';
import styled from 'styled-components';
import {AiOutlineEllipsis,AiOutlinePlus} from 'react-icons/ai';
import Card from './Card';

const ListBlock = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    
    background-color: rgb(235, 236, 240);
    border-radius : 4px;
    
    margin-left : 3vh;

`;

const ListHeader = styled.div`
    width:330px;
    height:70px;
    padding:2vh;
    box-sizing:border-box;
    font-size : 28px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;


const ListFooter = styled.div`
    width:90%;
    height:80px;
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
        <ListBlock>
            <ListHeader>
                <div>{list.listName}</div>
                <AiOutlineEllipsis style = {{cursor:"pointer",width:"4vh",height:"4vh"}}/>
            </ListHeader>
            <div>
                {list.cards.map(card => 
                    <Card card = {card}>
                        card.cardName
                    </Card>    
                )}
            </div>
            <ListFooter onClick = {createCard}>
                <AiOutlinePlus style = {{width:"5vh",height:"5vh"}}/>
                <div>Add another card</div>
            </ListFooter>
        </ListBlock>
    )
}

export default List;