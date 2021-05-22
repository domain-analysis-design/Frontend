import React from "react";
import styled,{css} from "styled-components";

export const Modal = styled.div`
  position:fixed;
  top: 35%;
  left: 40%;
  width: 40vh;
  height:25vh;
  
  padding: 6px 18px;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
  box-sizing: border-box;
  resize: none;
  font-size: 14px;

  ${props => props.feature === "deport" &&
  css`
    width:45vh;
    height:30vh;
    top : 30%;
    left : 35%;
    overflow : auto;
  `
  }

  ${props => props.feature === "create" &&
  css`
    left : 35%;
    width: 65vh;
    height: 30vh;
  `
  }
`;

