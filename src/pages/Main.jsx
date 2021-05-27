import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Board from "../components/Main/Board";
import { loadBoardListRequestAction } from "../reducers/board";
import { loadBoardsRequestAction, loadUsersRequestAction } from "../reducers/totalData";

const MainBlock = styled.div`
  width: 55%;
  height: 90vh;
  margin: 0 auto;
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

  //여기 selector가 안됩니다 ㅜㅜ
  // const { users,boards} = useSelector((state) => state.totalData);
  // console.log(users);
  // console.log(boards);

  // localStorage에 users와 boards 넣어서
  // select Page인 boardHeader와 RightSide에서
  // 검색할떄 다른 user들과 boards 들을 saga를 이용하여
  // localStorage에 접근하여 내용을 가져온다. 

  if(localStorage.getItem("current")){
    localStorage.removeItem("current");
  }

  useEffect(() => {
    dispatch(loadBoardListRequestAction());
    dispatch(loadBoardsRequestAction());
    dispatch(loadUsersRequestAction());
  }, []);

  if (!boardList) return null;


  return (
    <>
      <Header />
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
        <Board boards={boardList} />
      </MainBlock >
    </>
  );
};

export default Main;
