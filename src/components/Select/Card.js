import React, { useRef, useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { moveCardRequestAction } from "../../reducers/board";
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "../../libs/util/dnd";
import { useDragLayer } from "react-dnd";
import { Modal } from "../common/Modal";
import CardDetail from "./CardDetail";
import { Modal as MD } from "antd";

export const CardBox = styled.div`
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
    background: #ccc;
  }

  cursor: pointer;
  /* line-height: 40px; */
  ${(props) =>
    props.feature === false &&
    css`
      width: 20vh;
      /* height: 80px; */
      text-align: center;
      /* line-height: 80px; */
      margin: 0.5vh auto;
    `}

  ${(props) =>
    props.feature === true &&
    css`
      width: 25vh;
      height: 8vh;
      /* height: 80px; */
      text-align: center;
      line-height: 5vh;
      margin: 0.5vh auto;
      background-color: rgb(52, 152, 219);
      color: white;
    `}
`;

function Card({ card, feature, index, columnIndex }) {
  const dispatch = useDispatch();
  const ref = useRef(null); // (*)

  const [cardModal, setCardModal] = useState(false);

  console.log(feature);
  const OpenCard = ({ card }) => {
    // if (card.accept !== false) {
    //   console.log("카드창 보여주기");
    // }
    console.log(card);
    setCardModal(!cardModal);
  };

  const handleOk = () => {
    setCardModal(false);
  };

  const handleCancel = () => {
    setCardModal(false);
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
        onClick={() => {
          OpenCard({ card });
        }}
      >
        {card.cardName}
      </CardBox>
      {cardModal && (
        <Modal card>
          <div
            style={{
              cursor: "pointer",
              textAlign: "right",
              fontSize: "1.5rem",
              marginLeft: "98%",
            }}
            onClick={handleCancel}
          >
            x
          </div>
          <CardDetail card={card} />
        </Modal>
      )}
      {/* <MD
        title="Basic Modal"
        visible={cardModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MD> */}
    </div>
  );
}

export default Card;
