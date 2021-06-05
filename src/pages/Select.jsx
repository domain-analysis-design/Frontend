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
  updateList,
} from "../reducers/board";
import { useCallback } from "react";

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
  const { board } = useSelector((state) => state.board);

  const dispatch = useDispatch();

  const handleMoveMyCard = useCallback(
    (from, to) => {
      const { task, fromColumnIndex, fromItemIndex } = from;
      const { toColumnIndex, toItemIndex } = to;

      const myLists = [...board.lists];
      // remove card
      myLists[fromColumnIndex].cards.splice(fromItemIndex, 1);
      // move card
      myLists[toColumnIndex].cards.splice(toItemIndex, 0, task);

      dispatch(
        updateList({
          from: {
            fromCards: myLists[fromColumnIndex].cards,
            fromColumnIndex,
          },
          to: {
            toCards: myLists[toColumnIndex].cards,
            toColumnIndex,
          },
        }),
      );
    },
    [board],
  );

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

  if (!board) return null;

  return (
    <>
      <BoardHeader users={board.member} />
      <Body>
        <LeftSide Board={board} />
        <MainBox>
          {board.lists.map((list, i) => (
            <List
              list={list}
              handleMoveMyCard={handleMoveMyCard}
              columnIndex={i}
            ></List>
          ))}
          <CreateList />
        </MainBox>
        <RightSide />
      </Body>
    </>
  );
};

export default Select;
