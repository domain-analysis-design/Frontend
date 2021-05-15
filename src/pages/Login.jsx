import React,{useState} from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import { FaUserAlt,FaKey } from "react-icons/fa";
import Button from "../components/common/Button";
import {Link} from "react-router-dom";

const BodyBlock = styled.div`
  display:flex;
  height:90vh;
  justify-content:center;
  align-items:center;
`;

const LoginBlock = styled.form`
  width:28%;
`;

const Icon = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:9vh;
  height:9vh;
  background:rgb(2, 106, 167);
  `;

const ButtonGroup = styled.div`
  display:flex;
  width:100%;
  justify-content:space-between;
`;

const Login = () => {
  const [user,setUser] = useState({
    userID : "",
    password : ""
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); 
  };

  const onReset = () => {
    setUser({ userID: "", password: "" });
  };

  return (
    <>
      <Header/>

      <BodyBlock>
        <LoginBlock>

          <div style = {{display : "flex", marginBottom : "20px"}}>
            <Icon>
              <FaUserAlt style = {{width:"5vh", height:"5vh", color : "white"}}/>
            </Icon>
            <Input feature = "login" placeholder = "  UserID" type = "text" name = "userID" value = {user.userID} onChange = {onChangeInput}/>
          </div>
          
          <div style = {{display : "flex", marginBottom : "30px"}}>
            <Icon>
              <FaKey style = {{width:"5vh", height:"5vh", color : "white"}} />
            </Icon>
            <Input feature = "login" placeholder = "  password" type = "text" name = "password" value = {user.password} onChange = {onChangeInput}/>
          </div >

          <ButtonGroup>
            <Button feature = "login" type = "submit" onClick = {onReset}>Login</Button>
            <Link to = "/register" style = {{textDecoration : 'none'}}>
              <Button feature = "login">Register</Button>
            </Link>
          </ButtonGroup>
        </LoginBlock>
      </BodyBlock>
    </>
  )
};

export default Login;
