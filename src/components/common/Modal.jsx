import React from "react";
import styled from "styled-components";

const ModalWrapper = styled.div`
  border: 1px solid red;
  width: 300px;
  height: 300px;
`;

const Modal = ({ list }) => {
  return <ModalWrapper>{list.boardName}</ModalWrapper>;
};

export default Modal;
