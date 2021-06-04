import React, { useEffect } from "react";
import styled from "styled-components";
import List, { CreateList } from "../components/Select/List";
import BoardHeader from "../components/Select/BoardHeader";
import LeftSide from "../components/Select/LeftSide";
import RightSide from "../components/Select/RightSide";
import { useDispatch, useSelector } from "react-redux";
import {
  loadBoardRequestAction,
  initializeBoardRequestAction,
} from "../reducers/board";

const Body = styled.div`
  display: flex;
  height: 91.9vh;
`;

const MainBox = styled.div`
  padding: 10px 30px;
  width: 70%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  overflow: auto;
  justify-content: space-between;
`;

const Select = () => {
  //redux에 board가지고오기
  const {board} = useSelector((state)=>state.board);
  console.log(board)
  // const BoardInfo = localStorage.getItem("currentBoard");
  // const board = JSON.parse(BoardInfo);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (localStorage.getItem("currentBoard")) {
  //     localStorage.removeItem("currentBoard");
  //   }
  //   localStorage.setItem("currentBoard", JSON.stringify(board));
  // }, [])

  // useEffect(() => {
  //   // dispatch(loadBoardRequestAction());
  //   //loadBoardRequestAction : localStorage에 있는 currentBoard 갖고와서  redux저장
  //   return () => {
  //     dispatch(initializeBoardRequestAction());
  //     // 다 썻으면 초기화 시켜주기
  //   };
  // }, []);

  return (
    <>
      <BoardHeader users={board.member} />
      <Body>
        <LeftSide Board={board} />
        <MainBox>
          {board.lists.map((list) => (
            <List list={list}></List>
          ))}
          <CreateList />
        </MainBox>
        <RightSide />
      </Body>
    </>
  );
};

export default Select;
