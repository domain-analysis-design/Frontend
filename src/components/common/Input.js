import React from 'react';
import styled,{css} from 'styled-components';

const Input = styled.input`
    color: rgb(94, 94, 94);
    border-radius : 4px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(204, 204, 204);
    box-sizing : border-box;
    font-size:18px;

    &:focus{
        outline : none;
        border : 2px solid;
        border-color : rgb(126, 201, 252);
        &:focus::placeholder{
            color:transparent;
        }
    }

    ${props => props.feature === "login" &&
    css`
        width:48vh;
        height:9vh;
        border-top-left-radius: 0px;    
        border-bottom-left-radius: 0px;
        border-left-width: 0px;
    `}

    ${props => props.feature === "register" &&
    css`
        width:50vh;
        height:6vh;
    `}

    ${props => props.feature === "findUser" &&
    css`
        width:25vh;
        height:5vh;
    `}

    ${props => props.feature === "findGroup" &&
    css`
        width:37vh;
        height:7vh;
    `}

    ${props => props.feature === "create" &&
    css`
        margin-top : 15px;
        color: rgb(74, 190, 202);
        border-width: 0px 0px 2px;
        border-style: solid;
        box-shadow: none;
        border-color: rgb(51, 51, 51) rgb(51, 51, 51) rgb(74, 190, 202);
        border-radius: 0px;
        background-color: rgba(255, 255, 255, 0);
        width:50vh;
        height:4vh;
        ::placeholder{
            color: rgb(74, 190, 202);
        }
        &:focus{
            border-top:none;
            border-left:none;
            border-right:none;
        }
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

    ${props => props.feature ==="createList" &&
    css`
        width:270px;
        height:50px;
        margin-top:1px;
    `}
    ${props => props.feature ==="createCard" &&
    css`
        width:220px;
        height:50px;
        margin-top:1px;
    `}
`;

export default Input;