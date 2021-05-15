import React from "react";
import styled from 'styled-components';
import Header from "../components/common/Header";
import { FaUserAlt } from "react-icons/fa";
import { BoardItem, CreateBoard } from "../components/common/Board";

const MainBlock = styled.div`
  width:55%;
  height:90vh;
`;

const UserTitle = styled.div`
  display:inline-flex;
  align-items:center;
  font-size:2vh;
  padding-bottom : 8%;
`;

const BoardBoxTest = styled.div`
  display: flex;
  flex-wrap : wrap;
  justify-content:space-between;
`;

const Main = () => {
  return (
    <>
      <Header/>
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <MainBlock>
          <div style={{width:"100%",height:"20%"}} />
          <UserTitle>
            <FaUserAlt style = {{width:"4vh", height:"4vh", color : "rgb(2,106,167)", paddingRight: "5vh"}}/>
            <div>김영진's Board</div>
          </UserTitle>
          <BoardBoxTest>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <BoardItem/>
            <CreateBoard/>
          </BoardBoxTest>
        </MainBlock>

      </div>
    </>
  )
};

export default Main;
