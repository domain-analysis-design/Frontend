import React, { useState } from "react";
import styled from "styled-components";
import { Checkbox, Input } from "antd";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import {
  checkItemAction,
  deleteItemAction,
  addItemAction,
  addCommentAction,
} from "../../reducers/board";

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
  display: flex;
  border: 1px solid #ddd;
  text-align: right;
  padding: 3px;
`;

const CardDetail = ({ card }) => {
  const dispatch = useDispatch();

  const [itemTitle, setItemTitle] = useState("");
  const onChangeItemTitle = (e) => {
    setItemTitle(e.target.value);
  };

  const [commentTitle, setCommentTitle] = useState("");
  const onChangeCommentTitle = (e) => {
    setCommentTitle(e.target.value);
  };

  const onCheck = (id, columnIndex, cardIndex) => {
    dispatch(checkItemAction({ id, columnIndex, cardIndex }));
  };

  const onDeleteItem = (id, columnIndex, cardIndex) => {
    dispatch(deleteItemAction({ id, columnIndex, cardIndex }));
  };

  const onAddItem = (columnIndex, cardIndex, itemTitle) => {
    dispatch(addItemAction({ columnIndex, cardIndex, itemTitle }));
    setItemTitle("");
  };

  const onAddComment = (columnIndex, cardIndex, commentTitle) => {
    dispatch(addCommentAction({ columnIndex, cardIndex, commentTitle }));
    setCommentTitle("");
  };

  return (
    <CardDetailWrapper>
      <CardHeader>{card.cardName}</CardHeader>
      {card.items.map((v, i) => {
        return (
          <CardItem key={i}>
            <Checkbox
              defaultChecked={v.checked && v.checked}
              onClick={() => {
                onCheck(v.id, card.columnIndex, card.cardIndex);
              }}
            ></Checkbox>
            {v.checked ? (
              <div style={{ flex: "1", textDecoration: "line-through" }}>
                {v.desc}
              </div>
            ) : (
              <div style={{ flex: "1" }}>{v.desc}</div>
            )}

            <div
              style={{ padding: "0 7px", cursor: "pointer" }}
              onClick={() => {
                onDeleteItem(v.id, card.columnIndex, card.cardIndex);
              }}
            >
              x
            </div>
          </CardItem>
        );
      })}
      <Input
        placeholder="Add item..."
        style={{ width: "98.5%", marginTop: "30px" }}
        onChange={onChangeItemTitle}
        value={itemTitle}
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
            background: "#059be5",
            color: "#fff",
          }}
          onClick={() => {
            onAddItem(card.columnIndex, card.cardIndex, itemTitle);
          }}
        />
      </div>
      <CommentWrapper>
        <div>Comments</div>
        {card.comments.map((v, i) => {
          return (
            <CommentItem key={i}>
              <div style={{ flex: "1", fontWeight: "bold" }}>{v.desc}</div>
              <div
                style={{ padding: "0 5px" }}
              >{`${new Date().getFullYear()}.${new Date().getMonth()}.${new Date().getDay()}`}</div>
            </CommentItem>
          );
        })}
      </CommentWrapper>
      <Input
        placeholder="Add Comment..."
        style={{ width: "98.5%", marginTop: "30px" }}
        onChange={onChangeCommentTitle}
        value={commentTitle}
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
            background: "#059be5",
            color: "#fff",
          }}
          onClick={() => {
            onAddComment(card.columnIndex, card.cardIndex, commentTitle);
          }}
        />
      </div>
    </CardDetailWrapper>
  );
};

export default CardDetail;
