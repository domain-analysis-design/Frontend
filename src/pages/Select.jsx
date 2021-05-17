import React from "react";
import styled from 'styled-components';
import List from "../components/common/List";
import BoardHeader from "../components/BoardHeader";
import {createBoard} from "../libs/util/dummyCreator";
// import LeftSide from "../components/LeftSide";
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
  overflow : auto;
`;
const ButtonBox = styled.div`
  display : flex;
  justify-content:center;
  padding-bottom : 1vh;
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

  const AcceptCard = ({card}) =>{
    console.log(card)
  }

  const DenyCard = ({card}) =>{
    console.log(card)
  }
  return (
    <>
      <BoardHeader />
      <Body>
        <LeftSide>
          {board.waitingCard.map(card =>
          <div style = {{borderBottom : "1px solid black"}}>
            <Card card = {card} feature = "send"/>
            <ButtonBox>
              <Button feature = "accept" onClick = {() => AcceptCard({card})} >승인</Button>
              <Button feature = "deny" onClick = {() => DenyCard({card})} style= {{marginLeft:"20px"}}>거절</Button>  
            </ButtonBox>
          </div>
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
    