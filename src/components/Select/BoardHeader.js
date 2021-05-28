import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiFillHome } from "react-icons/ai";
import { BsBellFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import {GrGroup} from "react-icons/gr";
import { Link } from 'react-router-dom';
import Input from '../common/Input';
import useToggle from '../../hooks/useToggle';
import SearchUser from '../common/SearchUser';
import { useDispatch, useSelector } from "react-redux";
import { getUsersRequestAction } from '../../reducers/totalData';

const LeftGroup = styled.div`
    width:33.5%;
    height:8vh;
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

const MemberBox = styled.div`
    border-radius : 4px;
    border: 1px solid rgb(204, 204, 204);
    box-shadow: rgb(0 0 0 / 31%) 3px 3px 10px 0px;
    background-color: rgb(255, 255, 255);
    box-sizing : border-box;
    width:30vh;
    height:15vh;
    overflow : auto;
    position : absolute;
    top : 2vh;
    left:27vh;
`;

const Member = styled.div`
    width:80%;
    height:5vh;
    margin: 3px auto 0;
    padding : 1px;
    border-bottom:1px solid black;
    text-align : center;
    font-size : 20px;
    cursor : pointer;
    display : flex;
    justify-content:space-between;
`;


const HeaderBlock = styled.div`
    height:8vh;
    background-color: rgb(148, 189, 212);
    display:flex;
    align-items:center;
    justify-content : space-between;
`;

const SearchBox = styled.div`
    position:absolute;
    top:7vh;
    left:32vh;
    width:28vh;
`;

const InputBox = styled.div`
    display:flex;
    align-items:center;
`;
function BoardHeader({users}){
    const [toggle,setToggle] = useToggle();
    const [memberToggle,setMemberToggle] = useToggle();
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getUsersRequestAction());
    },[])
    
    const { TotalUsers } = useSelector((state)=>state.totalData)

    // localStorage에 users와 boards 넣어서
    // select Page인 boardHeader와 RightSide에서
    // 검색할떄 다른 user들과 boards 들을 saga를 이용하여
    // localStorage에 접근하여 내용을 가져온다. 

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
                    <MemberBox>
                        {users.map(user => 
                            <Member>
                                <BiUserCircle style = {{color : "gray",width:"4vh",height :"4vh"}}/>
                                {user.memberID}
                            </Member>)}
                    </MemberBox>
                    }
                </UserBox>
                <InputBox>
                    <Input onClick = {setToggle} feature = "findUser" placeholder = "  Search User ..." />
                    {toggle && 
                    <SearchBox>
                        <SearchUser users = {TotalUsers} text = "invite"></SearchUser>
                    </SearchBox>}
                </InputBox>
            </LeftGroup>
            <RightGroup>
                <IconBox>
                    <BsBellFill style = {{width : "7vh", height : "7vh", color:"white", cursor : "pointer"}} />
                </IconBox>
            </RightGroup>
        </HeaderBlock>
    )
}

export default BoardHeader;