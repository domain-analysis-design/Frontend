import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import styled from "styled-components";
import { SaveBoardInLocal } from "../../libs/util/function";
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
  const {board} = useSelector((state) => state.board);

  const dispatch = useDispatch();
  const AcceptCard = ({ card }) => {
    dispatch(updateWaitCardRequestAction(card.id));
    //unmount됐을때 바꿔주자
    //SaveBoardInLocal(board);
  };

  const DenyCard = ({ card }) => {
    dispatch(deleteWaitCardRequestAction(card.id));
    //unmount됐을때 바꿔주자
    //SaveBoardInLocal(board);
  };

  

  return (
    <Block>
      {Board.waitingCard.map((card) => (
        <Box>
          <Card card={card} feature={card.accept} />
          {!card.accept ? 
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
          :
          <div></div>
        }
        </Box>
      ))}
    </Block>
  );
}

export default LeftSide;
