import React, { useRef, useCallback } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { moveCardRequestAction } from "../../reducers/board";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../libs/util/dnd";
import { useDragLayer } from "react-dnd";

export const CardBox = styled.div`
  border: 1px solid red;
  width: 95%;
  border-radius: 3px;
  /* height: 40px; */
  background: white;
  padding: 1vh 0.5vh;
  box-sizing: border-box;
  margin: 0.5vh auto;
  font-size: 20px;
  color: #666;
  &:hover {
    background: #eee;
  }

  cursor: pointer;
  /* line-height: 40px; */
  ${(props) =>
    props.feature === false &&
    css`
      width: 220px;
      /* height: 80px; */
      text-align: center;
      /* line-height: 80px; */
      margin: 0.5vh auto;
    `}

  ${(props) => props.feature === true && css``}
`;

function Card({ card, feature, index, columnIndex }) {
  const dispatch = useDispatch();
  const ref = useRef(null); // (*)

  console.log(feature);
  const OpenCard = ({ card }) => {
    if (card.accept !== false) {
      console.log("카드창 보여주기");
    }
  };

  // const moveCard = (dragIndex, hoverIndex) => {
  //   dispatch(moveCardRequestAction(dragIndex, hoverIndex));
  // };

  const [, drop] = useDrop({
    // (*)
    accept: ItemTypes.CARD,
    drop: (item2) => {
      console.log("card drop imte:", item2);
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.fromItemIndex;
      const hoverIndex = index;
      console.log(dragIndex, hoverIndex);

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      //moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [, dragRef, preview] = useDrag({
    // (*)
    type: ItemTypes.CARD,
    item2: {
      fuck: 1,
    },
    item: {
      type: ItemTypes.CARD,
      fromColumnIndex: columnIndex,
      fromItemIndex: index,
      item: card,
      //toItemIndex: card.cardIndex,
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    // end: (item) => {
    //   console.log(`${index} should move to ${JSON.stringify(item)}`);
    // },
  });

  return (
    <div ref={(node) => dragRef(drop(node))}>
      <CardBox
        feature={feature}

        // onClick={() => {
        //   moveCard({ dragIndex: 0, hoverIndex: index });
        //   OpenCard({ card });
        // }}
      >
        {card.cardName}
      </CardBox>
    </div>
  );
}

export default Card;
