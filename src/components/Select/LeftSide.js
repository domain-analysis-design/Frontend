import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { deleteWaitCardRequestAction, updateWaitCardRequestAction } from "../../reducers/board";
import Button from "../common/Button";
import Card from "./Card";

const Block = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
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

const Box = styled.div`
  border-bottom: 1px solid black;
`;

function LeftSide({ Board }) {
  const dispatch = useDispatch();
  const AcceptCard = ({ card }) => {
    console.log(card);
    console.log(card.accept)
    console.log(card.id)
    dispatch(updateWaitCardRequestAction(card.id));
  };

  const DenyCard = ({ card }) => {
    dispatch(deleteWaitCardRequestAction(card.id));
  };

  return (
    <Block>
      {Board.waitingCard.map((card) => (
        <Box>
          <Card card={card} feature={card.accept} />
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
        </Box>
      ))}
    </Block>
  );
}

export default LeftSide;
