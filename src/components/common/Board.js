import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineEllipsis,AiOutlineClose } from "react-icons/ai";
import BoardOption from "../common/BoardOption";
import useToggle from "../../hooks/useToggle";
import { Modal } from "./Modal";
import Input from "./Input";
import Button from "./Button";

export const BoardItem = styled.div`
  width: 30vh;
  height: 15vh;
  cursor: pointer;
  background: rgb(2, 106, 167);
  margin-bottom: 3vh;
  font-size: 24px;
  color: white;
  position: relative;
`;

export const CreateBoard = ({name}) => {
  const [createToggle,setCreateToggle] = useToggle();

  return (
    <>
      <BoardItem style={{ position: "relative" }} onClick={setCreateToggle}>
        <AiOutlinePlus
          style={{
            color: "white",
            width: "10vh",
            height: "10vh",
            position: "absolute",
            top: "3vh",
            left: "10vh",
          }}
        />
        </BoardItem>
        {createToggle &&
        <>
          <div style = {{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",background: "rgba(0, 0, 0, 0.298039)"}}/>
          <Modal feature = "create">
            <div style = {{display:"flex",justifyContent:"flex-end"}}>
              <AiOutlineClose style = {{color : "black",width:"5vh",height:"5vh"}} onClick = {setCreateToggle}/>
            </div>
            <Input feature = "create" placeholder = "  Add Board Title" />
            <div style = {{color : "black", 
                          fontSize:"20px",
                          height:"18vh",
                          display:"flex",
                          alignItems:"center"}}>
              {name.name}'s WorkSpace
            </div>
          </Modal>
          <Button feature = "create">Create Board</Button>
        </>
        }
    </>
  );
};
const BoardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Board({boards}){
    let num = boards.length;
    
    let initShow = new Array();

    const [showOption, setShowOption] = useState([...initShow]);

    for (var i = 0; i < num; i++) {
        initShow[i] = false;
    }

    const optionOpen = (board) => {
        let index = boards.indexOf(board)

        if(showOption[index]){
            showOption[index] = false
            setShowOption([...showOption])
        }else{
            const tempVisible = new Array();
            initShow.map(i => tempVisible.push(i))
            tempVisible[index] = !tempVisible[index]
            setShowOption([...tempVisible])
        }
    };
    return (
        <BoardBox>
        {{ boards }.boards.map((board) => (
            <BoardItem>
                <div style={{ position: "absolute", top: "1.5vh", left: "2vh" }}>
                    {board.boardName} Board
                </div>
                <AiOutlineEllipsis
                    style={{
                    position: "absolute",
                    top: "0",
                    right: "1vh",
                    width: "4vh",
                    height: "4vh",
                    }}
                    onClick={() => optionOpen(board)}
                />
                {showOption[{boards}.boards.indexOf(board)] === true &&  <BoardOption board = {board} method = {()=>optionOpen(board)} />}
            </BoardItem>
        ))}
        </BoardBox>
    );
    }

export default Board;
