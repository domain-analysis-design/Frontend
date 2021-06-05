import React from "react";
import styled from "styled-components";
import {
  AiOutlineEllipsis,
  AiOutlinePlus,
  AiOutlineClose,
} from "react-icons/ai";
import Card, { CardBox } from "./Card";
import useToggle from "../../hooks/useToggle";
import Input from "../common/Input";
import Button from "../common/Button";
import update from "immutability-helper";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../libs/util/dnd";

const ListBlock = styled.div`
  background-color: rgb(235, 236, 240);
  border-radius: 4px;
  margin: 0 1vh;
  border: 1px solid red;
  width: 250px;
`;

const ListHeader = styled.div`
  margin: 0 auto;
  width: 250px;
  /* height: 70px; */
  /* padding: 2vh; */
  /* padding-bottom: 5px; */
  padding-left: 1.8vh;
  padding-right: 1.8vh;
  box-sizing: border-box;
  /* font-size: 28px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid blue;
`;

const ListFooter = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 80px;
  font-size: 2.8vh;
  line-height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 1.15rem;
  color: #555;
  &:hover {
    color: #112;
  }
`;

export const CreateList = () => {
  const [create, setCreate] = useToggle();

  const createList = () => {
    setCreate();
    console.log("진짜 list 생성");
  };
  return (
    <>
      {!create ? (
        <ListBlock style={{ border: "1px solid red", height: "70px" }}>
          <ListHeader style={{ cursor: "pointer" }} onClick={() => setCreate()}>
            <AiOutlinePlus style={{ width: "5vh", height: "5vh" }} />
            <div>Add another List</div>
          </ListHeader>
        </ListBlock>
      ) : (
        <ListBlock style={{ border: "1px solid red", height: "100px" }}>
          <div
            style={{
              width: "280px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Input feature="createList" placeholder="Enter List title..." />
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "1px",
              marginLeft: "3px",
              width: "130px",
              height: "50px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Button feature="createList" onClick={createList}>
              Add List
            </Button>
            <AiOutlineClose
              style={{ width: "20px", height: "20px" }}
              onClick={setCreate}
            />
          </div>
        </ListBlock>
      )}
    </>
  );
};

function List({ list, handleMoveMyCard, columnIndex }) {
  const [create, setCreate] = useToggle();

  const createCard = () => {
    setCreate();
    console.log("진짜 card 생성");
  };

  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (task) => {
      const from = {
        task: task.item,
        fromColumnIndex: task.fromColumnIndex,
        fromItemIndex: task.fromItemIndex,
      };
      const to = {
        toColumnIndex: columnIndex,
        toItemIndex: list.cards.length,
      };
      handleMoveMyCard(from, to);
    },
    //canDrop: (item) => item.columnIndex !== columnIndex,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <div ref={dropRef}>
      <ListBlock>
        <ListHeader>
          <div style={{ fontSize: "1.15rem" }}>{list.listName}</div>
          <AiOutlineEllipsis
            style={{ cursor: "pointer", width: "4vh", height: "4vh" }}
          />
        </ListHeader>
        <div>
          {list.cards.map((card, i) => (
            <Card card={card} index={i} columnIndex={list.columnIndex}>
              card.cardName
            </Card>
          ))}
        </div>
        {!create ? (
          <ListFooter onClick={createCard}>
            <AiOutlinePlus />
            <div>Add another card</div>
          </ListFooter>
        ) : (
          <CardBox>
            <Input feature="createCard" placeholder="Enter Card Title..." />
            <div
              style={{
                display: "flex",
                marginTop: "3px",
                marginLeft: "3px",
                width: "130px",
                height: "45px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button feature="createList" onClick={createCard}>
                Add Card
              </Button>
              <AiOutlineClose
                style={{ width: "20px", height: "20px" }}
                onClick={setCreate}
              />
            </div>
          </CardBox>
        )}
      </ListBlock>
    </div>
  );
}

export default List;
