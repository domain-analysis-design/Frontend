import React,{useState} from 'react';
import styled from 'styled-components';
import { createOtherBoard } from '../../libs/util/dummyCreator';
import {GrCheckbox,GrCheckboxSelected} from 'react-icons/gr';
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

function Search({feature,text}){
    
    const boards = createOtherBoard();
    
    let num = boards.boardList.length;
    
    let initShow = new Array();

    
    for ( var i = 0; i < num; i++){
        initShow[i] = false;
    }
    const [showOption,setShowOption] = useState([...initShow]);
    
    const searchBoard = (board) => {
        showOption[boards.boardList.indexOf(board)] = !showOption[boards.boardList.indexOf(board)]
        setShowOption([...showOption])
    }
    const action = (e) =>{
        console.log(e)
    }
    return(
        <Box>
            {boards.boardList.map(board=>
            <div onClick = {()=>searchBoard(board)} style = {{display:"flex",alignItems:"center",cursor:"pointer"}}>
                {showOption[boards.boardList.indexOf(board)] === false &&
                    <GrCheckbox style = {{width:"3vh",height : "3vh",marginLeft:"3px"}}/>
                }
                {showOption[boards.boardList.indexOf(board)] === true &&
                    <GrCheckboxSelected style = {{width:"3vh",height : "3vh",marginLeft:"3px"}}/>
                }
                <BoardBox >{board.boardName}</BoardBox>    
            </div>
            )}
            <Button feature = "choiceBoard" onClick = {action}>{text}</Button>
        </Box>
    )
}

export default Search;