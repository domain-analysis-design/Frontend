import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import Button from "./Button";
import { Modal } from "./Modal";
import { useDispatch } from "react-redux";
import { deleteBoardRequestAction } from "../../reducers/board";

const Box = styled.div`
  width: 30vh;
  height: 20vh;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-sizing: border-box;
  resize: none;
`;

const BoardTitle = styled.div`
  color: black;
  font-size: 20px;
  padding: 10px;
  &:after {
    margin-top: 1.5vh;
    content: "";
    display: block;
    width: 27vh;
    border-bottom: 1px solid black;
  }
`;

const Block = styled.div`
  color: black;
  padding: 1vh;
  padding-bottom: 2vh;
  cursor: pointer;
`;

const MemberBox = styled.div`
  display: flex;
  width: 90%;
  height: 20%;
  color: black;
  margin: 2px auto;
  border-bottom: 1px solid gray;
  cursor: pointer;
`;

function BoardOption({ board, method }) {
  const dispatch = useDispatch();
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [deportToggle, setDeportToggle] = useState(false);

  const onClickDelete = () => {
    setDeportToggle(false);
    setDeleteToggle(!deleteToggle);
  };
  const onClickDeport = () => {
    setDeleteToggle(false);
    setDeportToggle(!deportToggle);
  };
  const DeleteBoard = () => {
    dispatch(deleteBoardRequestAction(board.boardName));
    console.log("보드진짜 지워줘");
  };

  const DeleteMember = () => {
    console.log("멤버를 지우시겠습니까?");
  };

  const closeStyle = {
    width: "5vh",
    height: "5vh",
    color: "black",
  };

  const deleteTextStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "25px",
    width: "100%",
    height: "10vh",
    color: "black",
    marginLeft: "1vh",
  };

  var num = board.member.length;

  let initShow = new Array();

  for (var i = 0; i < num; i++) {
    initShow[i] = false;
  }
  const [showOption, setShowOption] = useState([...initShow]);

  const searchMember = (member) => {
    showOption[board.member.indexOf(member)] = !showOption[
      board.member.indexOf(member)
    ];
    setShowOption([...showOption]);
  };

  return (
    <Box
      style={{ position: "absolute", top: "4vh", left: "25vh", zIndex: "1" }}
    >
      <AiOutlineClose
        onClick={method}
        style={{
          color: "black",
          position: "absolute",
          top: "1vh",
          left: "25vh",
          width: "3vh",
          height: "3vh",
        }}
      />
      <BoardTitle>{board.boardName} Board</BoardTitle>
      <Block onClick={onClickDelete}>보드 삭제</Block>
      {deleteToggle && (
        <Modal>
          <div
            className="aiOutline"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              height: "5vh",
            }}
          >
            <AiOutlineClose style={closeStyle} onClick={onClickDelete} />
          </div>
          <div style={deleteTextStyle}>board를 지우시겠습니까?</div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "2vh",
            }}
          >
            <Button feature="board" onClick={DeleteBoard}>
              예
            </Button>
            <Button feature="board" onClick={onClickDelete}>
              아니오
            </Button>
          </div>
        </Modal>
      )}
      <Block onClick={onClickDeport}>팀원 추방</Block>
      {deportToggle && (
        <Modal feature="deport">
          {board.member.map((member) => (
            <MemberBox onClick={() => searchMember(member)}>
              {showOption[board.member.indexOf(member)] === false && (
                <div style={{ width: "20%" }}>
                  <GrCheckbox style={{ width: "5vh", height: "5vh" }} />
                </div>
              )}
              {showOption[board.member.indexOf(member)] === true && (
                <div style={{ width: "20%" }}>
                  <GrCheckboxSelected style={{ width: "5vh", height: "5vh" }} />
                </div>
              )}
              <div
                style={{
                  width: "60%",
                  textAlign: "center",
                  fontSize: "16px",
                  margin: "auto 0",
                }}
              >
                {" "}
                {member.memberID}{" "}
              </div>
              <div style={{ width: "20%" }}>
                <BiUserCircle
                  style={{ color: "gray", width: "5vh", height: "5vh" }}
                />
              </div>
            </MemberBox>
          ))}
          <Button feature="board" style={{ margin: "2vh auto 0px" }}>
            추방하기
          </Button>
        </Modal>
      )}
    </Box>
  );
}

export default BoardOption;
