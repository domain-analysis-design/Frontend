import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Board, { CreateBoard } from "../components/common/Board";
import { loadBoardListRequestAction } from "../reducers/board";

const MainBlock = styled.div`
  width: 55%;
  height: 90vh;
`;

const UserTitle = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 2vh;
  padding-bottom: 8%;
`;

const Main = () => {
  const dispatch = useDispatch();

  const { boardList } = useSelector((state) => state.board);

  useEffect(() => {
    dispatch(loadBoardListRequestAction());
  }, []);

  if (!boardList) return null;
  return (
    <>
      <Header />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <MainBlock>
          <div style={{ width: "100%", height: "20%" }} />
          <UserTitle>
            <FaUserAlt
              style={{
                width: "4vh",
                height: "4vh",
                color: "rgb(2,106,167)",
                paddingRight: "5vh",
              }}
            />
            <div>{boardList.name}'s Board</div>
          </UserTitle>
          <Board boards={boardList.boardList} />
          <CreateBoard name = {boardList}/>
        </MainBlock >
      </div>
    </>
  );
};

export default Main;
