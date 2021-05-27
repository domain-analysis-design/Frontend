import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {
  AiOutlinePlus,
  AiOutlineEllipsis,
  AiOutlineClose,
} from "react-icons/ai";
import BoardOption from "../common/BoardOption";
import useToggle from "../../hooks/useToggle";
import { Modal } from "./Modal";
import Input from "./Input";
import Button from "./Button";
import useInput from "../../hooks/useInput";
import { useDispatch } from "react-redux";
import { addBoardRequestAction } from "../../reducers/board";
import { createBoard } from "../../libs/util/dummyCreator";
import { Redirect } from "react-router-dom";

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

export const CreateBoard = ({ name }) => {
  const [createToggle, setCreateToggle] = useToggle();
  const [boardName, setBoardName, handleBoardName] = useInput("");

  const dispatch = useDispatch();

  const onCreateBoard = () => {
    dispatch(addBoardRequestAction(createBoard()));

    //dispatch(deleteBoardReqeustAction(boardId))
  };

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
      {createToggle && (
        <>
          <div
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.298039)",
            }}
          />
          <Modal feature="create">
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <AiOutlineClose
                style={{ color: "black", width: "5vh", height: "5vh" }}
                onClick={setCreateToggle}
              />
            </div>
            <Input
              feature="create"
              placeholder="  Add Board Title"
              onChange={handleBoardName}
            />
            <div
              style={{
                color: "black",
                fontSize: "20px",
                height: "18vh",
                display: "flex",
                alignItems: "center",
              }}
            >
              {name.name}'s WorkSpace
            </div>
          </Modal>
          <Button
            feature="create"
            onClick={() => {
              onCreateBoard();
            }}
          >
            Create Board
          </Button>
        </>
      )}
    </>
  );
};
const BoardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Board({ boards }) {
  const [currBoard, setCurrBoard] = useState(null);

  const { boardList } = boards;
  let num = boardList.length;

  let initShow = new Array();

  const [showOption, setShowOption] = useState([...initShow]);

  for (var i = 0; i < num; i++) {
    initShow[i] = false;
  }

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

  const tempLocalStorage = (boardInfo) => {
    if (localStorage.getItem("currentBoard")) {
      localStorage.removeItem("currentBoard");
    }
    localStorage.setItem("currentBoard", JSON.stringify(boardInfo));
  };

  if (currBoard) return <Redirect to={`/main/${currBoard}`}></Redirect>;

  return (
    <BoardBox>
      {boardList.map((board) => (
        <div
          // href={`/main/${board.id}`}
          onClick={() => {
            console.log(board);
            console.log("a 태그 눌렀음");
            tempLocalStorage(board);
            setCurrBoard(board.id);
          }}
        >
          <BoardItem
            onClick={() => {
              console.log(board.id);
            }}
          >
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
                console.log(e);
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
      <CreateBoard name={boards} />
    </BoardBox>
  );
}

export default Board;
