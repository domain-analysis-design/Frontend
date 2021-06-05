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
import { SaveBoardInLocal } from "../libs/util/function";

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
  const {board} = useSelector((state) => state.board);

  const dispatch = useDispatch();

  useEffect(() => {
    const BoardInfo = localStorage.getItem("currentBoard");

    const currBoard = JSON.parse(BoardInfo);
    
    dispatch(loadBoardRequestAction(currBoard))
    // SaveBoardInLocal(board)
    
  }, []);

  useEffect(() => {
    
    return () => {
      if(board){
        SaveBoardInLocal(board);
      }
      
    };
  }, [board])

  if(!board) return <div>123</div>
  return (
    <div>
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
    </div>
  );
};

export default Select;
