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

  // const { TotalUsers, TotalBoards} = useSelector((state) => state.totalData);
  // console.log(TotalUsers)
  // console.log(3)
  // console.log(TotalBoards)

  // const tempBoardsLocalStorage = (TotalBoards) => {
  //   if (localStorage.getItem("currentTotalBoards")) {
  //     localStorage.removeItem("currentTotalBoards");
  //   }
  //   localStorage.setItem("currentTotalBoards", JSON.stringify(TotalBoards));
  // };

  // const tempUsersLocalStorage = (TotalUsers) => {
  //   if (localStorage.getItem("currentTotalUsers")) {
  //     localStorage.removeItem("currentTotalUsers");
  //   }
  //   localStorage.setItem("currentTotalUsers", JSON.stringify(TotalUsers));
  // };

  useEffect(() => {
    dispatch(loadBoardsRequestAction());
    dispatch(loadUsersRequestAction());
    dispatch(loadBoardListRequestAction());
    // dispatch(loadBoardsRequestAction());
    // dispatch(loadUsersRequestAction());
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
