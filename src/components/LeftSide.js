import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Card from "../components/common/Card";

const Block = styled.div`
  width: 15%;
  height: 100%;
  background-color: rgb(224, 224, 224);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1vh;
`;

function LeftSide({ Board }) {
  console.log(Board);
  const AcceptCard = ({ card }) => {
    console.log(card);
  };

  const DenyCard = ({ card }) => {
    console.log(card);
  };

  return (
    <Block>
      {Board.waitingCard.map((card) => (
        <div style={{ borderBottom: "1px solid black" }}>
          <Card card={card} feature="send" />
          <ButtonBox>
            <Button feature="accept" onClick={() => AcceptCard({ card })}>
              승인
            </Button>
            <Button
              feature="deny"
              onClick={() => DenyCard({ card })}
              style={{ marginLeft: "20px" }}
            >
              거절
            </Button>
          </ButtonBox>
        </div>
      ))}
    </Block>
  );
}

export default LeftSide;
