import React, { useEffect } from "react";
import styled from "styled-components";
import List, { CreateList } from "../components/Select/List";
import BoardHeader from "../components/Select/BoardHeader";
import LeftSide from "../components/Select/LeftSide";
import RightSide from "../components/Select/RightSide";
import { useDispatch } from "react-redux";
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
  const BoardInfo = localStorage.getItem("currentBoard");
  const board = JSON.parse(BoardInfo);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBoardRequestAction());
    //loadBoardRequestAction : localStorage에 있는 currentBoard 갖고오기
    return () => {
      dispatch(initializeBoardRequestAction());
      // 다 썻으면 초기화 시켜주기
    };
  }, [BoardInfo]);

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
