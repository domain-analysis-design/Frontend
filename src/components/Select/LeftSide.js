import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { SaveBoardInLocal } from "../../libs/util/function";
import {
  deleteWaitCardRequestAction,
  updateWaitCardRequestAction,
} from "../../reducers/board";
import Button from "../common/Button";
import Card from "./Card";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../libs/util/dnd";

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

function LeftSide({ Board, handleMoveMyCard }) {
  const { board } = useSelector((state) => state.board);

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
  const [{ isOver, canDrop }, dropRef] = useDrop({
    accept: ItemTypes.CARD,
    drop: (task) => {
      console.log("task : ", task);
      const from = {
        task: task.item,
        fromColumnIndex: 0,
        fromItemIndex: task.item.cardIndex,
      };
      const to = {
        // toColumnIndex: columnIndex,
        // toItemIndex: list.cards.length,
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

  // const [, dragRef, preview] = useDrag({
  //   // (*)
  //   type: ItemTypes.CARD,
  //   item2: {
  //     fuck: 1,
  //   },
  //   item: {
  //     type: ItemTypes.CARD,
  //     fromColumnIndex: 0,
  //     // fromItemIndex: index,
  //     // item: card,
  //     //toItemIndex: card.cardIndex,
  //   },
  //   collect: (monitor) => ({
  //     isDragging: monitor.isDragging(),
  //   }),
  //   // end: (item) => {
  //   //   console.log(`${index} should move to ${JSON.stringify(item)}`);
  //   // },
  // });

  return (
    <Block ref={dropRef}>
      {Board.lists[0].cards.map((card, i) => (
        <Box>
          <Card card={card} feature={card.accept} index={i} columnIndex={0} />
          {!card.accept ? (
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
          ) : (
            <div></div>
          )}
        </Box>
      ))}
    </Block>
  );
}

export default LeftSide;
