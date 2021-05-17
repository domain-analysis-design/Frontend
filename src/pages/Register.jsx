import React from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import useInput from "../hooks/useInput";

const BodyBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const RegisterBlock = styled.form`
  width: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const InputTitle = styled.div`
  width: 25%;
  font-size: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Register = ({ history }) => {
  const [id, setId, onChangeId] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");
  const [
    passwordConfirm,
    setPasswordConfirm,
    onChangePasswordConfirm,
  ] = useInput("");
  const [name, setName, onChangeName] = useInput("");
  const [email, setEmail, onChangeEmail] = useInput("");

  const onSubmit = () => {
    history.push("/login");
  };

  return (
    <>
      <Header />

      <BodyBlock>
        <div style={{ fontSize: "48px", padding: "25px" }}>회원가입</div>
        <RegisterBlock>
          <InputBox>
            <InputTitle>아이디</InputTitle>
            <Input
              feature="register"
              placeholder="  UserID"
              type="text"
              name="userID"
              onChange={onChangeId}
            />
          </InputBox>
          <InputBox>
            <InputTitle>비밀번호</InputTitle>
            <Input
              feature="register"
              placeholder="  Password"
              type="text"
              name="password"
              onChange={onChangePassword}
            />
          </InputBox>
          <InputBox>
            <InputTitle>비밀번호 확인</InputTitle>
            <Input
              feature="register"
              placeholder="  Check password"
              type="text"
              name="checkPassword"
              onChange={onChangePasswordConfirm}
            />
          </InputBox>
          <InputBox>
            <InputTitle>이름</InputTitle>
            <Input
              feature="register"
              placeholder="  Name"
              type="text"
              name="name"
              onChange={onChangeName}
            />
          </InputBox>
          <InputBox>
            <InputTitle>이메일</InputTitle>
            <Input
              feature="register"
              placeholder="  E-mail"
              type="text"
              name="email"
              onChange={onChangeEmail}
            />
          </InputBox>
          <Button
            style={{ marginTop: "20px" }}
            feature="register"
            type="submit"
            onClick={onSubmit}
          >
            Register
          </Button>
        </RegisterBlock>
      </BodyBlock>
    </>
  );
};

export default Register;
