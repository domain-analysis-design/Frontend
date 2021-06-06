import React, { useState } from "react";
import styled from "styled-components";
import { createOtherBoard } from "../../libs/util/dummyCreator";
import { GrCheckbox, GrCheckboxSelected } from "react-icons/gr";
import Button from "./Button";
import { Function1 } from "../../libs/util/function";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #999;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const Box = styled.div`
  width: 100%;
  height: 17vh;
  overflow: auto;
  /* margin-bottom: 3vh; */
  border-radius: 4px;
  border: 1px solid rgb(204, 204, 204);
  box-shadow: rgb(0 0 0 / 31%) 3px 3px 10px 0px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  position: relative;
`;

const BoardItem = styled.div`
  font-size: 0.9rem;
  width: 90%;
  height: 5vh;
  margin: 3px auto 0;
  padding: 1px;
  border-bottom: 1px solid black;
  text-align: center;

  cursor: pointer;
`;

const BoardBox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function Search({ boards, text, setToggle, setCurrentBoard }) {
  const boardList = boards.TotalBoards.boardList;

  let initShow = Function1(boardList);

  const [showOption, setShowOption] = useState([...initShow]);

  const searchBoard = (board) => {
    showOption[boardList.indexOf(board)] = !showOption[
      boardList.indexOf(board)
    ];
    setShowOption([...showOption]);
  };
  const action = (e) => {
    setShowOption(
      showOption.map((v, i) => {
        if (v) {
          setCurrentBoard(boardList[i]);
          setToggle(false);

          return !v;
        }
        return v;
      }),
    );

    // showOption.forEach((v, i) => {
    //   if (v) {
    //     console.log(boardList[i]);
    //   }
    // });
  };
  return (
    <Wrapper>
      <Box>
        {boardList.map((board) => (
          <BoardBox key={board} onClick={() => searchBoard(board)}>
            {showOption[boardList.indexOf(board)] === false && (
              <GrCheckbox
                style={{ width: "3vh", height: "3vh", marginLeft: "3px" }}
              />
            )}
            {showOption[boardList.indexOf(board)] === true && (
              <GrCheckboxSelected
                style={{ width: "3vh", height: "3vh", marginLeft: "3px" }}
              />
            )}
            <BoardItem>{board.boardName}</BoardItem>
          </BoardBox>
        ))}
      </Box>
      <Button
        feature="choiceBoard"
        onClick={action}
        className="choice-btn"
        style={{
          fontSize: "1rem",
          background: "#ddd",
          border: "1px solid #999",
          color: "#111",
          height: "30px",
        }}
      >
        {text}
      </Button>
    </Wrapper>
  );
}

export default Search;
