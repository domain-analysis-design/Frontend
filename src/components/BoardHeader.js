import React from 'react';
import styled from 'styled-components';
import { AiFillHome } from "react-icons/ai";
import { BsBellFill,BsPeopleCircle } from "react-icons/bs";
import {GrGroup} from "react-icons/gr";
import { Link } from 'react-router-dom';
import Input from './common/Input';
import useToggle from '../hooks/useToggle';
import Search from './common/Search';

const LeftGroup = styled.div`
    width:33.5%;
    height:8vh;
    /* background : red; */
    display: flex;
`;

const RightGroup = styled.div`
    display:flex;
    justify-content:flex-end;
    width:33.5%;
    height:8vh;
`;

const IconBox = styled.div`
    display:flex;
    width:12vh;
    height:8vh;
    align-items:center;
    justify-content:center;
`;

const UserBox = styled.div`
    width: 20vh;
    height:8vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;

const HeaderBlock = styled.div`
    height:8vh;
    background-color: rgb(148, 189, 212);
    display:flex;
    align-items:center;
    justify-content : space-between;
`;

function BoardHeader({users}){
    const [toggle,setToggle] = useToggle();
    const [memberToggle,setMemberToggle] = useToggle();

    console.log(users)
    return (
        <HeaderBlock>
            <LeftGroup>
                <IconBox>
                    <Link to="/main" style = {{textDecoration : "none"}}>
                        <AiFillHome style = {{width : "7vh", height : "7vh", color:"white", cursor : "pointer"}}/>
                    </Link>
                </IconBox>
                <UserBox>
                    <GrGroup onClick = {setMemberToggle} style = {{cursor:"pointer",width:"4vh",height:"4vh"}}/>
                    {memberToggle &&
                    <div style = {{position : "absolute",top : "2vh", left:"27vh"}}>
                        123
                    </div>}
                </UserBox>
                <div style = {{display:"flex", alignItems:"center"}}>
                    <Input onClick = {setToggle} feature = "findUser" placeholder = "  User" />
                    {toggle && 
                    <div style = {{position:"absolute",top:"7vh",left:"32vh",width:"28vh"}}>
                        <Search feature = "user"></Search>
                    </div>}
                </div>
            </LeftGroup>
            {/* <div style = {{textAlign : "center",width: "33%",fontSize: "32px", color : "white", cursor:"pointer"}}>김박이조하</div> */}
            <RightGroup>
                <IconBox>
                    <BsBellFill style = {{width : "7vh", height : "7vh", color:"white", cursor : "pointer"}} />
                </IconBox>
            </RightGroup>
        </HeaderBlock>
    )
}

export default BoardHeader;