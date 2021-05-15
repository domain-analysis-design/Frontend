import React,{useState} from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import Button from "../components/common/Button";

const BodyBlock = styled.div`
  display:flex;
  flex-direction : column;
  height:90vh;
  justify-content:center;
  align-items:center;
`;

const RegisterBlock = styled.form`
  width:35%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
`;

const InputBox = styled.div`
  width:100%;
  display: flex;
  justify-content:space-between;
  margin-bottom : 20px;
`;

const InputTitle = styled.div`
  width:25%;
  font-size:20px;
  display:flex;
  justify-content: flex-end;
  align-items:center;
`;


const Register = () => {
  const [user,setUser] = useState({
    userID : "",
    password : "",
    checkPassword: "",
    name : "",
    email: ""
  });

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value }); 
  };

  const onReset = () => {
    setUser({ userID: "", password: "", checkPassword : "", name : "", email : "" });
  };

  return (
    <>
      <Header/>

      <BodyBlock>
        <div style = {{fontSize:"48px",padding:"25px"}}>회원가입</div>
        <RegisterBlock>
          <InputBox>
            <InputTitle>아이디</InputTitle>
            <Input feature = "register" placeholder = "  UserID" type = "text" name = "userID" value = {user.userID} onChange = {onChangeInput}/>
          </InputBox>
          <InputBox>
            <InputTitle>비밀번호</InputTitle>
            <Input feature = "register" placeholder = "  Password" type = "text" name = "password" value = {user.password} onChange = {onChangeInput}/>
          </InputBox>
          <InputBox>
            <InputTitle>비밀번호 확인</InputTitle>
            <Input feature = "register" placeholder = "  Check password" type = "text" name = "checkPassword" value = {user.checkPassword} onChange = {onChangeInput}/>
          </InputBox>
          <InputBox>
            <InputTitle>이름</InputTitle>
            <Input feature = "register" placeholder = "  Name" type = "text" name = "name" value = {user.name} onChange = {onChangeInput}/>
          </InputBox>
          <InputBox>
            <InputTitle>이메일</InputTitle>
            <Input feature = "register" placeholder = "  E-mail" type = "text" name = "email" value = {user.email} onChange = {onChangeInput}/>
          </InputBox>
          <Button style = {{marginTop : "20px"}}feature = "register" type = "submit" onClick = {onReset}>Register</Button>
          
        </RegisterBlock>
      </BodyBlock>
    </>
  )
};

export default Register;
