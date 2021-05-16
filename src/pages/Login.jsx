import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import { FaUserAlt, FaKey } from "react-icons/fa";
import Button from "../components/common/Button";
import { Link, Router } from "react-router-dom";
import useInput from "../hooks/useInput";
import { useDispatch } from "react-redux";
import { loginRequestAction } from "../reducers/user";
import { useSelector } from "react-redux";

const BodyBlock = styled.div`
  display: flex;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const LoginBlock = styled.form`
  width: 28%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9vh;
  height: 9vh;
  background: rgb(2, 106, 167);
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const [id, setId, onChangeId] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");

  // useEffect(() => {
  //   console.log(id, password);
  // }, [id, password]);

  const onSubmit = () => {
    dispatch(loginRequestAction());
  };

  useEffect(() => {
    if (user) {
      history.push("/main");
    }
  }, [user]);

  return (
    <>
      <Header />

      <BodyBlock>
        <LoginBlock>
          <div style={{ display: "flex", marginBottom: "20px" }}>
            <Icon>
              <FaUserAlt
                style={{ width: "5vh", height: "5vh", color: "white" }}
              />
            </Icon>
            <Input
              feature="login"
              placeholder="  UserID"
              type="text"
              name="userID"
              // value={user.userID}
              onChange={onChangeId}
            />
          </div>

          <div style={{ display: "flex", marginBottom: "30px" }}>
            <Icon>
              <FaKey style={{ width: "5vh", height: "5vh", color: "white" }} />
            </Icon>
            <Input
              feature="login"
              placeholder="  password"
              type="text"
              name="password"
              // value={user.password}
              onChange={onChangePassword}
            />
          </div>

          <ButtonGroup>
            <Button feature="login" type="submit" onClick={onSubmit}>
              Login
            </Button>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button feature="login">Register</Button>
            </Link>
          </ButtonGroup>
        </LoginBlock>
      </BodyBlock>
    </>
  );
};

export default Login;
