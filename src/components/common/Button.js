import React from "react";
import styled, { css } from "styled-components";

const Button = styled.div`
  display: flex;
  font-size: 22px;
  color: rgb(255, 255, 255);
  justify-content: center;
  line-height: 4em;
  align-items: center;
  border-radius: 4px;
  background-color: rgb(52, 152, 219);
  cursor: pointer;

  ${(props) =>
    props.feature === "landing" &&
    css`
      width: 25vh;
      height: 6vh;
    `}

  ${(props) =>
    (props.feature === "login" || props.feature === "register") &&
    css`
      //mainpage  login  or register button
      width: 26vh;
      height: 7vh;
    `}

    ${(props) =>
    props.feature === "board" &&
    css`
      //board header button + board option team member delete button + board option board delete button
      width: 13vh;
      height: 5vh;
    `}

    ${(props) =>
    (props.feature === "accept" || props.feature === "deny") &&
    css`
      // card receive accept or deny
      width: 7vh;
      height: 3vh;
      font-size: 0.75rem;
    `}

    ${(props) =>
    props.feature === "create" &&
    css`
      position: fixed;
      top: 67%;
      left: 35%;
      background: #fff;
      width: 20vh;
      height: 6vh;
      color: black;
      text-align: center;
    `}
    
    ${(props) =>
    props.feature === "choiceBoard" &&
    css`
      // card sending choice board button
      width: 110px;
      height: 40px;
      margin: 2vh auto 0;
    `}

    ${(props) =>
    props.feature === "sendingCard" &&
    css`
      // card sending button
      width: 25vh;
      height: 4vh;
    `}

    ${(props) =>
    props.feature === "checkListDelete" &&
    css`
      // card checkList delete button
      width: 55px;
      height: 27px;
      font-size: 13px;
      color: rgb(0, 0, 0);
      background-color: rgb(224, 224, 224);
    `}

    ${(props) =>
    props.feature === "checkListAppend" &&
    css`
      // card checkList append Button
      width: 115px;
      height: 30px;
      font-size: 13px;
      color: rgb(0, 0, 0);
      background-color: rgb(224, 224, 224);
    `}

    ${(props) => props.feature === "createBoard" &&
    css`
      width: 30vh;
    height: 15vh;
    cursor: pointer;
    background: rgb(2, 106, 167);
    margin-bottom: 3vh;
    font-size: 24px;
    color: white;
    position: relative;
    `
    }

    ${props => props.feature ==="createList" &&
    css`
      width:100px;
      height:40px;
      font-size:16px;
      /* margin-top : 5px;
      margin-left : 10px; */
    `}
`;

export default Button;
