import React from "react";
import styled, { css } from "styled-components";

const CardBox = styled.div`
  border: 1px solid red;
  width: 220px;
  /* height: 40px; */
  background: white;
  /* padding: 2vh; */
  box-sizing: border-box;
  margin: 1vh auto;
  font-size: 20px;
  cursor: pointer;
  line-height: 40px;
  ${(props) =>
    props.feature === "send" &&
    css`
      width: 300px;
      height: 80px;
      text-align: center;
      line-height: 80px;
    `}
`;

function Card({ card, feature }) {
  const OpenCard = ({ card, feature }) => {
    if (feature !== "send") {
      console.log(card);
    }
  };
  return (
    <CardBox feature={feature} onClick={() => OpenCard({ card, feature })}>
      {card.cardName}
    </CardBox>
  );
}

export default Card;
