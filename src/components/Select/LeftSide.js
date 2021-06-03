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
  const {board} = useSelector(state => state.board)
  console.log(1)
  console.log(board)
  console.log(2)
  console.log(Board);
  const AcceptCard = ({ card }) => {
    console.log(card);
    console.log(card.accept)
    console.log(card.id)
    dispatch(updateWaitCardRequestAction(card.id));
    //리덕스만 수정?
    //saga 요청으로 수정?
    
    //카드 상태 변경 card.accept를 true로 바꿔주기
    //카드 상태 변경 후 drag and drop 이 끝나면
    //saga요청해서
    //board의 waitingCard를 지워줘야함

  };

  const DenyCard = ({ card }) => {
    console.log(card);
    console.log(card.accept)
    dispatch(deleteWaitCardRequestAction(card.id));
    //saga요청해서
    //board의 waitingCard를 지워줘야함

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
