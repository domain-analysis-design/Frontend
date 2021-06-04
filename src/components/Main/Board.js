import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  AiOutlinePlus,
  AiOutlineEllipsis,
} from "react-icons/ai";
import BoardOption from "./BoardOption";
import useToggle from "../../hooks/useToggle";
import Button from "../common/Button";
import { Redirect } from "react-router-dom";
import {Function1} from "../../libs/util/function";
import CreateBoardModal from "./CreateBoardModal";
import { useSelector } from "react-redux";
import { updateBoardRequestAction } from "../../reducers/board";

const BoardItem = styled.div`
  width: 30vh;
  height: 15vh;
  cursor: pointer;
  background: rgb(2, 106, 167);
  margin-bottom: 3vh;
  font-size: 24px;
  color: white;
  position: relative;
`;

const BoardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Board({ boards }) {

  const [currBoard, setCurrBoard] = useState(null);

  const [createToggle, setCreateToggle] = useToggle();
  
  const { boardList } = boards;
  
  let initShow = Function1(boardList);
  
  const [showOption, setShowOption] = useState([]);
  
  const optionOpen = (board) => {
    let index = boardList.indexOf(board);
    
    if (showOption[index]) {
      showOption[index] = false;
      setShowOption([...showOption]);
    } else {
      const tempVisible = new Array();
      initShow.map((i) => tempVisible.push(i));
      tempVisible[index] = !tempVisible[index];
      setShowOption([...tempVisible]);
    }
  };

  const board = useSelector((state)=>state.board)
  useEffect(() => {
    return () => {
      if (localStorage.getItem("currentBoard")) {
        localStorage.removeItem("currentBoard");
      }
      localStorage.setItem("currentBoard", JSON.stringify(board));
    }
  }, [])
  
  if (currBoard) return <Redirect to={`/main/${currBoard}`}></Redirect>;

  return (
    <BoardBox>
      {boardList.map((board) => (
        <div
          onClick={() => {
            updateBoardRequestAction(board);
            setCurrBoard(board.id);
          }}
        >
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
              onClick={(e) => {
                e.stopPropagation();
                optionOpen(board);
              }}
            />
            {showOption[boardList.indexOf(board)] === true && (
              <BoardOption board={board} method={() => optionOpen(board)} />
            )}
          </BoardItem>
        </div>
      ))}

      <Button feature = "createBoard" onClick={setCreateToggle}>
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
      </Button>

      {createToggle && (
        <CreateBoardModal name = {boards.name}/>
      )}
    </BoardBox>
  );
}

export default Board;
