import React from 'react';
import styled from 'styled-components';
import { AiFillHome } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";

const IconBox = styled.div`
    display:flex;
    width:12vh;
    height:8vh;
    align-items:center;
    justify-content:center;
`;


const HeaderBlock = styled.div`
    height:8vh;
    background-color: rgb(2, 106, 167);
    display:flex;
    align-items:center;
    justify-content : space-between;
`;


function BoardHeader(){
    return (
        <HeaderBlock>
            <IconBox>
                <AiFillHome style = {{width : "7vh", height : "7vh", color:"white", cursor : "pointer"}}/>
            </IconBox>
            <div style = {{fontSize: "32px", color : "white", cursor:"pointer"}}>김박이조하</div>
            <IconBox>
                <BsBellFill style = {{width : "7vh", height : "7vh", color:"white", cursor : "pointer"}} />
            </IconBox>
        </HeaderBlock>
    )
}

export default BoardHeader;