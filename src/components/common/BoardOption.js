import React from 'react';
import styled from 'styled-components';
import {AiOutlineClose} from "react-icons/ai";

const Box = styled.div`
    width:30vh;
    height:20vh;
    background : #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
    box-sizing: border-box;
    resize: none;
`;

const BoardTitle = styled.div`
    color : black;
    font-size:20px;
    padding:10px;
    &:after{
        margin-top : 1.5vh;
        content: "";
        display: block;
        width: 27vh;
        border-bottom: 1px solid black;
    }
`;

const Block = styled.div`
    color : black;
    padding: 1vh ;
    padding-bottom : 2vh;
    cursor : pointer;
`;

function BoardOption({board,method}){
    const DeleteBoard = () => {
        console.log("보드를 삭제하시겠습니까?")
    }

    const DeleteMember = () => {
        console.log("멤버를 지우시겠습니까?")
    }

    console.log(board)
    return(
        <Box style = {{position : "absolute", top:"4vh",left:"25vh",zIndex:"1"}}>
            <AiOutlineClose onClick = {method} style = {{color :"black", position :"absolute",top:"1vh",left:"25vh",width:"3vh",height:"3vh"}}/>
            <BoardTitle>{board.boardName} Board</BoardTitle>
            <Block onClick = {DeleteBoard}>보드 삭제</Block>
            <Block onClick = {DeleteMember}>팀원 추방</Block>
        </Box>
    )
}

export default BoardOption;