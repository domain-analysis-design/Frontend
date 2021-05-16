import React,{useState} from 'react';
import styled,{css} from 'styled-components';
import {AiOutlinePlus,AiOutlineEllipsis} from "react-icons/ai";
import useToggle from '../../hooks/useToggle';
import BoardOption from "../common/BoardOption";

export const BoardItem = styled.div`
    width:30vh;
    height:15vh;
    cursor:pointer;
    background : rgb(2,106,167);
    margin-bottom:3vh;
    font-size:24px;
    color : white;
    position:relative;
`;

export const CreateBoard = () => {
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
const BoardBox = styled.div`
  display: flex;
  flex-wrap : wrap;
  justify-content:space-between;
`;

function Board({lists}){
    let num = lists.length;
    let initShow = new Array();
    
    for(var i = 0; i < num; i++){
        initShow[i] = false;
    }
    const [showOption,setShowOption] = useState(initShow)
    
    const optionOpen = (list)=>{
        let index = lists.indexOf(list)
        
        initShow[index] = !initShow[index]
        
        setShowOption(initShow)
    }
    return (
        <BoardBox>
            {{lists}.lists.map(list => 
            <BoardItem >
                <div style = {{position:'absolute',top:"1.5vh",left:"2vh"}}>{list.boardName} Board</div>
                <AiOutlineEllipsis style = {{position:"absolute", top:"0",right:"1vh",width:"4vh",height:"4vh"}} 
                onClick = {() => optionOpen(list)}/>
                {showOption[{lists}.lists.indexOf(list)] === true &&  <BoardOption list = {list} method = {()=>optionOpen(list)} />}
            </BoardItem>)}
            <CreateBoard/>
        </BoardBox>
    )
}

export default Board;