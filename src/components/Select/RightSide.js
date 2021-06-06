import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Input from "../common/Input";
import Button from "../common/Button";
import useToggle from "../../hooks/useToggle";
import Search from "../common/Search";
import { useDispatch, useSelector } from "react-redux";
import { getBoardsRequestAction } from "../../reducers/totalData";
import Card from "./Card";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../libs/util/dnd";
import shortid from "shortid";
import { sendCardAction } from "../../reducers/board";

const Block = styled.div`
  /* position: absolute;
  right: 0;
  top: 8vh; */
  width: 15%;
  height: 100%;
  background-color: rgb(224, 224, 224);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`;

const SendCardList = styled.div`
  margin: 1vh auto;
  width: 94%;
  height: 60%;
  overflow: auto;
  background: white;
  vertical-align: center;
`;

const SendCard = styled.div`
  width: 95%;
  height: 5vh;
  background: rgb(247, 245, 250);
`;

function RightSide({ Board, handleMoveMyCard, columnIndex }) {
  const initSendCard = [];
  const [toggle, setToggle] = useToggle();
  const [sendToggle, setSendToggle] = useToggle(false);
  const [sendCard, setSendCard] = useState(initSendCard);

  const [currentBoard, setCurrentBoard] = useState(null);

  const SendCardListStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (task) => {
      console.log("task : ", task);
      const from = {
        task: task.item,
        fromColumnIndex: task.item.columnIndex,
        fromItemIndex: task.item.cardIndex,
      };
      const to = {
        toColumnIndex: 5,
        toItemIndex: Board.lists[5].cards.length,
      };
      console.log("from, to", from, to);
      handleMoveMyCard(from, to);
    },
    //canDrop: (item) => item.columnIndex !== columnIndex,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBoardsRequestAction());
  }, []);

  useEffect(() => {
    console.log(currentBoard);
  }, [currentBoard]);

  const sendCardHhandler = () => {
    let sendConfirm = window.confirm("카드를 전송하시겠습니까?");
    if (sendConfirm) {
      dispatch(sendCardAction());
    }
  };

  const { TotalBoards } = useSelector((state) => state.totalData);
  return (
    <Block ref={dropRef}>
      <div
        style={{
          padding: "20px",
          background: "#059be5",
          border: "1px solid #ddd",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        ✈️Card List to Send
      </div>
      {Board.lists[5].cards.length === 0 && (
        <SendCardList style={SendCardListStyle}>
          <AiOutlinePlus style={{ width: "5vh", height: "5vh" }} />
        </SendCardList>
      )}
      <div
        style={{
          width: "100%",
          background: "#eee",
          padding: "5px 0",
          margin: "5px 0",
        }}
      >
        {Board.lists[5].cards.map((card, i) => (
          <div style={{ width: "100%" }}>
            <Card card={card} index={i} columnIndex={card.columnIndex}></Card>
          </div>
        ))}
      </div>
      {/* {!sendToggle && (
        <SendCardList style={SendCardListStyle}>
          <AiOutlinePlus style={{ width: "5vh", height: "5vh" }} />
        </SendCardList>
      )} */}
      {/* {sendToggle && (
        <SendCardList>
          {sendCard.map((card) => {
            <div
              style={{
                width: "100%",
                height: "6vh",
                borderBottom: "1px solid black",
              }}
            >
              
            </div>;
          })}
        </SendCardList>
      )} */}
      <div
        style={{
          padding: "20px",
          background: "#df5981",
          border: "1px solid #ddd",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        🚀Target Board
      </div>
      <Input
        style={{
          width: "95%",
          height: "40px",
          fontSize: "0.75rem",
          background: "#f2a797",
          color: "#fff",
          fontWeight: "bold",
          textAlign: "center",
        }}
        feature="findGroup"
        onClick={setToggle}
        placeholder={
          currentBoard ? currentBoard.boardName : "  Search Board ..."
        }
      />
      {!toggle && <div style={{ background: "red", height: "20vh" }} />}
      {toggle && (
        <Search
          boards={{ TotalBoards }}
          text="choice"
          setToggle={setToggle}
          setCurrentBoard={setCurrentBoard}
        />
      )}
      <Button
        feature="sendingCard"
        style={{ width: "100%" }}
        onClick={sendCardHhandler}
      >
        Send
      </Button>
    </Block>
  );
}

export default RightSide;
