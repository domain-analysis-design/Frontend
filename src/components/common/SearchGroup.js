import React from 'react';
import styled from 'styled-components';
import { createOtherBoard } from '../../libs/util/dummyCreator';
import Button from './Button';

const Box = styled.div`
    width:90%;
    height:17vh;
    overflow : auto;
    margin-bottom : 3vh;
    border-radius : 4px;
    border: 1px solid rgb(204, 204, 204);
    box-shadow: rgb(0 0 0 / 31%) 3px 3px 10px 0px;
    background-color: rgb(255, 255, 255);
    box-sizing : border-box;
    position : relative;
`;

const BoardBox = styled.div`
    width:90%;
    height:5vh;
    margin: 3px auto 0;
    padding : 1px;
    border-bottom:1px solid black;
    text-align : center;
    font-size : 20px;
    cursor : pointer;
`;

function SearchGroup(){
    const board = createOtherBoard();
    const checkBoard = () => {
        console.log("이 보드를 선택하시겠습니까?")
    }
    return(
        <Box>
            {board.boardList.map(board=>
                <BoardBox onClick = {checkBoard}>{board.boardName}</BoardBox>    
            )}
            <Button feature = "choiceBoard">Choice</Button>
        </Box>
    )
}

export default SearchGroup;