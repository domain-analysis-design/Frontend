import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus, AiOutlineEllipsis } from "react-icons/ai";
import BoardOption from "../common/BoardOption";

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

export const CreateBoard = () => {
  function createBoard() {
    console.log("생성");
  }
  return (
    <>
      <BoardItem style={{ position: "relative" }} onClick={createBoard}>
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
        <CreateBoard />
        </BoardBox>
    );
    }

export default Board;
