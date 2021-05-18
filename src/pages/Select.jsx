import React from "react";
import styled from 'styled-components';
import List, { CreateList } from "../components/common/List";
import BoardHeader from "../components/BoardHeader";
import {createBoard} from "../libs/util/dummyCreator";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";

const Body = styled.div`
  display:flex;
  height:91.9vh;
`;

const MainBox = styled.div`
  width:60%;
  display:flex;
  overflow: auto;
  justify-content:space-between;
`;

const Select = () => {
  const board = createBoard();

  return (
    <>
      <BoardHeader />
      <Body>
        <LeftSide Board={board}/>
        
        <MainBox >
          {board.lists.map(list =>
            <List list = {list}></List>
          )}
          <CreateList/>
        </MainBox>
        <RightSide/>
      </Body>
    </>
  )
};

export default Select;
    