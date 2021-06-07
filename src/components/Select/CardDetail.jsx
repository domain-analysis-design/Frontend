import React from "react";
import styled from "styled-components";
import { Checkbox, Input } from "antd";
import Button from "../common/Button";

const CardDetailWrapper = styled.div``;

const CardHeader = styled.div`
  padding: 10px;
  font-size: 1.75rem;
`;

const CardItemWrapper = styled.div``;

const CardItem = styled.div`
  display: flex;
  border: 1px solid #ddd;
  padding: 5px 0;
  margin: 3px 0;
`;

const CommentWrapper = styled.div``;

const CommentItem = styled.div`
  border: 1px solid #ddd;
  text-align: right;
  padding: 3px;
`;

const CardDetail = ({ card }) => {
  console.log(card);
  return (
    <CardDetailWrapper>
      <CardHeader>{card.cardName}</CardHeader>
      {card.items.map((v, i) => {
        return (
          <CardItem key={i}>
            <Checkbox defaultChecked={v.checked}></Checkbox>
            <div style={{ flex: "1" }}>{v.desc}</div>
            <div style={{ padding: "0 7px", cursor: "pointer" }}>x</div>
          </CardItem>
        );
      })}
      <Input
        placeholder="Add item..."
        style={{ width: "98.5%", marginTop: "30px" }}
      ></Input>
      <div style={{ textAlign: "right" }}>
        <input
          type="button"
          value="Add Item"
          style={{
            width: "140px",
            height: "30px",
            border: "none",
            cursor: "pointer",
            marginTop: "2px",
          }}
        />
      </div>
      <CommentWrapper>
        <div>Comments</div>
        {card.comments.map((v, i) => {
          return <CommentItem>{v.desc}</CommentItem>;
        })}
      </CommentWrapper>
      <Input
        placeholder="Add Comment..."
        style={{ width: "98.5%", marginTop: "30px" }}
      ></Input>
      <div style={{ textAlign: "right" }}>
        <input
          type="button"
          value="Add Comment"
          style={{
            width: "140px",
            height: "30px",
            border: "none",
            cursor: "pointer",
            marginTop: "2px",
          }}
        />
      </div>
    </CardDetailWrapper>
  );
};

export default CardDetail;
