import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";
import Input from "./common/Input";
import Button from "./common/Button";
import useToggle from "../hooks/useToggle";
import Search from "./common/Search";

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

function RightSide() {
  const initSendCard = [];
  const [toggle, setToggle] = useToggle();
  const [sendToggle, setSendToggle] = useToggle();
  const [sendCard, setSendCard] = useState(initSendCard);

  // console.log(sendCard === [])
  // console.log(sendCard === Array(0))
  // console.log(sendCard === null)
  // console.log(sendCard == [""])
  // console.log(sendCard === [''])
  // console.log(sendCard == initSendCard)

  const SendCardListStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <Block>
      {!sendToggle && (
        <SendCardList style={SendCardListStyle}>
          <AiOutlinePlus style={{ width: "5vh", height: "5vh" }} />
        </SendCardList>
      )}
      {sendToggle && (
        <SendCardList>
          {sendCard.map((card) => {
            <div
              style={{
                width: "100%",
                height: "6vh",
                borderBottom: "1px solid black",
              }}
            >
              1{/* <SendCard>{card.cardName}</SendCard> */}
            </div>;
          })}
        </SendCardList>
      )}
      <Input
        feature="findGroup"
        onClick={setToggle}
        placeholder="  Search Board ..."
      />
      {!toggle && <div style={{ background: "red", height: "20vh" }} />}
      {toggle && <Search feature="board" text="choice" />}
      <Button feature="sendingCard">Send</Button>
    </Block>
  );
}

export default RightSide;
