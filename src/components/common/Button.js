import React from 'react';
import styled,{css} from 'styled-components';

const Button = styled.div`
    display: flex;
    font-size: 22px;
    color: rgb(255, 255, 255);
    justify-content:center;
    line-height: 4em;
    align-items:center;
    border-radius: 4px;
    background-color: rgb(52, 152, 219);
    cursor : pointer;

    ${props => props.feature === "landing" &&
    css`
        width:25vh;
        height:6vh;
    `}

    ${props => (props.feature === "login" || props.feature === "register") &&
    css` //mainpage  login  or register button
        width:26vh;
        height:7vh;
    `}

    ${props => props.feature === "board" &&
    css` //board header button + board option team member delete button + board option board delete button
        width:100px;
        height:40px;
    `}

    ${props => (props.feature === "accept" || props.feature === "deny") &&
    css` // card receive accept or deny
        width:80px;
        height:40px;
    `}

    ${props => props.feature === "choiceBoard" &&
    css` // card sending choice board button
        width:110px;
        height:40px;
    `}

    ${props => props.feature === "sendingCard" &&
    css` // card sending button
        width:150px;
        height:30px;
    `}

    ${props => props.feature === "checkListDelete" &&
    css` // card checkList delete button
        width:55px;
        height:27px;
        font-size: 13px;
        color: rgb(0, 0, 0);
        background-color: rgb(224, 224, 224);
    `}

    ${props => props.feature === "checkListAppend" &&
    css` // card checkList append Button
        width:115px;
        height:30px;
        font-size: 13px;
        color: rgb(0, 0, 0);
        background-color: rgb(224, 224, 224);
    `}
`;

export default Button;