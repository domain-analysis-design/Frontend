import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { GrCheckboxSelected, GrCheckbox } from "react-icons/gr";
import Button from "../common/Button";
import { Modal } from "../common/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBoardMemberRequestAction,
  deleteBoardRequestAction,
} from "../../reducers/board";
import { Function1 } from "../../libs/util/function";

const Box = styled.div`
  width: 30vh;
  height: 20vh;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-sizing: border-box;
  resize: none;
  position: absolute;
  top: 4vh;
  left: 25vh;
  z-index: 1;

  .Icon {
    width: 5vh;
    height: 5vh;
  }
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

const ID = styled.div`
  width: 60%;
  text-align: center;
  font-size: 16px;
  margin: auto 0;
`;

function BoardOption({ board, method }) {
  const dispatch = useDispatch();
  const [deleteToggle, setDeleteToggle] = useState(false);
  const [deportToggle, setDeportToggle] = useState(false);

  const { boardList } = useSelector((state) => state.board);
  console.log(boardList)
  console.log(board)

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
    setDeportToggle(false);
    setDeleteToggle(false);
  };

  const DeleteMember = () => {
    let tmpDeletedMember = [];
    showOption.forEach((v, i) => {
      if (v) {
        tmpDeletedMember.push(i);
      }
    });

    dispatch(
      deleteBoardMemberRequestAction({
        tmpDeletedMember,
        boardName: board.boardName,
      }),
    );
  };

  const closeStyle = {
    width: "5vh",
    height: "5vh",
    color: "black",
  };

  let initShow = Function1(board.member);

  const [showOption, setShowOption] = useState([...initShow]);

  const searchMember = (member) => {
    showOption[board.member.indexOf(member)] =
      !showOption[board.member.indexOf(member)];
    setShowOption([...showOption]);
  };

  return (
    <Box>
      <AiOutlineClose
        onClick={(e) => {
          e.stopPropagation();
          method(e);
        }}
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
      <Block
        onClick={(e) => {
          e.stopPropagation();
          onClickDelete();
        }}
      >
        보드 삭제
      </Block>

      {deleteToggle && (
        <Modal>
          <div className="aiOutline">
            <AiOutlineClose
              style={closeStyle}
              onClick={(e) => {
                e.stopPropagation();
                onClickDelete();
              }}
            />
          </div>

          <div className="deleteStyle">board를 지우시겠습니까?</div>

          <div className="buttonBox">
            <Button
              feature="board"
              onClick={(e) => {
                e.stopPropagation();
                DeleteBoard();
              }}
            >
              예
            </Button>
            <Button
              feature="board"
              onClick={(e) => {
                e.stopPropagation();
                onClickDelete();
              }}
            >
              아니오
            </Button>
          </div>
        </Modal>
      )}
      <Block
        onClick={(e) => {
          e.stopPropagation();
          onClickDeport();
        }}
      >
        팀원 추방
      </Block>

      {deportToggle && (
        <Modal feature="deport">
          <AiOutlineClose onClick={(e) => {
          e.stopPropagation();
          onClickDeport();
        }}
        style={{
          color: "black",
          position: "absolute",
          top: "1vh",
          right: "1vh",
          width: "3vh",
          height: "3vh",
          boxSizing : "border-box",
          border : "1px solid black",
        }}/>
          {board.member.map((member) => (
            <MemberBox
              onClick={(e) => {
                e.stopPropagation();
                searchMember(member);
              }}
            >
              {showOption[board.member.indexOf(member)] === false && (
                <div style={{ width: "20%" }}>
                  <GrCheckbox className="Icon" />
                </div>
              )}
              {showOption[board.member.indexOf(member)] === true && (
                <div style={{ width: "20%" }}>
                  <GrCheckboxSelected className="Icon" />
                </div>
              )}
              <ID> {member.memberID} </ID>
              <div style={{ width: "20%" }}>
                <BiUserCircle className="Icon" />
              </div>
            </MemberBox>
          ))}
          <Button
            feature="board"
            style={{ margin: "2vh auto 0px" }}
            onClick={(e) => {
              e.stopPropagation();
              DeleteMember();
            }}
          >
            추방하기
          </Button>
        </Modal>
      )}
    </Box>
  );
}

export default BoardOption;
