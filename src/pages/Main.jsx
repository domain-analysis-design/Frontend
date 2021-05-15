import React,{useEffect} from "react";
import styled from 'styled-components';
import Header from "../components/common/Header";
import { FaUserAlt } from "react-icons/fa";
import { createBoard, createUser } from "../libs/util/dummyCreator";
import { BoardItem , CreateBoard } from "../components/common/Board";
import { useDispatch,useSelector } from "react-redux";
import { loadUserPostRequestAction } from "../reducers/post";
import Board from "../components/common/Board";
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

const Main = () => {

  const dispatch = useDispatch()

  const {userPost} = useSelector(state => state.post)
  
  useEffect(()=>{
    dispatch(loadUserPostRequestAction())
  },[])

  if(!userPost) return(
    <div>11</div>
  )
  return (
    <>
      <Header/>
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <MainBlock>
          <div style={{width:"100%",height:"20%"}} />
          <UserTitle>
            <FaUserAlt style = {{width:"4vh", height:"4vh", color : "rgb(2,106,167)", paddingRight: "5vh"}}/>
            <div>{userPost.name}'s Board</div>
          </UserTitle>
          <Board lists = {userPost.boardList}/>
        </MainBlock>

      </div>
    </>
  )
};

export default Main;
