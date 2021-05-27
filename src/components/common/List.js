import React from "react";
import styled from "styled-components";
import { AiOutlineEllipsis, AiOutlinePlus } from "react-icons/ai";
import Card from "./Card";

const ListBlock = styled.div`
  background-color: rgb(235, 236, 240);
  border-radius: 4px;
  margin: 0 1vh;
  border: 1px solid red;
  width: 250px;
`;

const ListHeader = styled.div`
  margin: 0 auto;
  width: 330px;
  /* height: 70px; */
  /* padding: 2vh; */
  /* padding-bottom: 5px; */
  padding-left: 1.8vh;
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
  &:hover {
    color: #112;
  }
`;

export const CreateList = () => {
  const createList = () => {
    console.log("createList");
  };
  return (
    <ListBlock style={{ border: "1px solid red", height: "70px" }}>
      <ListHeader style={{ cursor: "pointer" }} onClick={() => createList()}>
        <AiOutlinePlus style={{ width: "5vh", height: "5vh" }} />
        <div>Add another List</div>
      </ListHeader>
    </ListBlock>
  );
};

function List({ list }) {
  const createCard = () => {
    console.log("createCard");
  };
  return (
    <ListBlock>
      <ListHeader>
        <div style={{ fontSize: "1.15rem" }}>{list.listName}</div>
        <AiOutlineEllipsis
          style={{ cursor: "pointer", width: "4vh", height: "4vh" }}
        />
      </ListHeader>
      <div>
        {list.cards.map((card) => (
          <Card card={card}>card.cardName</Card>
        ))}
      </div>
      <ListFooter
        onClick={createCard}
        style={{ fontSize: "1.15rem", color: "#555" }}
      >
        <AiOutlinePlus />
        <div>Add another card</div>
      </ListFooter>
    </ListBlock>
  );
}

export default List;
