import React from 'react';
import styled,{css} from 'styled-components';

const Input = styled.input`
    color: rgb(94, 94, 94);
    border-top-left-radius: 0px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 0px;
    border-width: 1px 1px 1px 0px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    box-sizing : border-box;
    font-size:18px;

    &:focus{
        outline : none;
        border : 2px solid;
        border-color : rgb(126, 201, 252);
    }

    ${props => props.feature === "login" &&
    css`
        width:48vh;
        height:9vh;
    `}

    ${props => props.feature === "register" &&
    css`
        width:300px;
        height:42px;
    `}

    ${props => props.feature === "findUser" &&
    css`
        width:165px;
        height:40px;
    `}

    ${props => props.feature === "findGroup" &&
    css`
        width:190px;
        height:40px;
    `}

    ${props => props.feature === "checkList" &&
    css`
        width:466px;
        height:68px;
    `}

    ${props => props.feature === "comment" &&
    css`
        width:435px;
        height:40px;
    `}
`;

export default Input;