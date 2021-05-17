import React from "react";
import styled from 'styled-components';
import List from "../components/common/List";
import BoardHeader from "../components/BoardHeader";
import {createBoard} from "../libs/util/dummyCreator";
import Card from "../components/common/Card";
import Button from "../components/common/Button";

const Body = styled.div`
  display:flex;
  height:90vh;
`;

const LeftSide = styled.div`
  width:20%;
  height:100%;
  background-color: rgb(224, 224, 224);
  display: flex;
  flex-direction : column;
  align-items:center;
`;
const ButtonBox = styled.div`
  display : flex;
  
`;

const MainBox = styled.div`
  width:60%;
  height : 100%;
  display:flex;
  overflow: auto;
`;

const RightSide = styled.div`
  width:20%;
  height:100%;
  background-color: rgb(224, 224, 224);
`;

const Select = () => {
  const board = createBoard();
  console.log(board)
  return (
    <>
      <BoardHeader />
      <Body>
        <LeftSide>
          {board.waitingCard.map(card =>
          <>
            <Card card = {card} feature = "send"/>
            <Button feature = "accept" >승인</Button>
            <Button feature = "deny" >거절</Button>  
          </>
          )}
        </LeftSide>
        <MainBox>
          {board.lists.map(list =>
            <List list = {list}></List>
          )}
        </MainBox>
        <RightSide></RightSide>
      </Body>
    </>
  )
};

export default Select;
    