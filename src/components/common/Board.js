import React from 'react';
import styled,{css} from 'styled-components';
import {AiOutlinePlus} from "react-icons/ai";

export const BoardItem = styled.div`
    width:30vh;
    height:15vh;
    cursor:pointer;
    background : rgb(2,106,167);
    margin-bottom:3vh;
`;

export function CreateBoard(){
    function createBoard(){
        console.log("생성")
    }
    return(
        <>
            <BoardItem style = {{position : "relative"}} onClick = {createBoard}>
                <AiOutlinePlus style={{color : "white", width:"10vh",height:"10vh",position:"absolute", top:"3vh",left:"10vh"}}/>
            </BoardItem>
        </>
    )
}

function Board(){
    return <div>안녕</div>
}

export default Board;