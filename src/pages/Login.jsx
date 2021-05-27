import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/common/Header";
import Input from "../components/common/Input";
import { FaUserAlt, FaKey } from "react-icons/fa";
import Button from "../components/common/Button";
import { Link } from "react-router-dom";
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

const LoginGroup = styled.form`
  width: 28%;
`;

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9vh;
  height: 9vh;
  background: rgb(2, 106, 167);

  .Icon{
    width: 5vh;
    height: 5vh;
    color: white;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-top:10px;
`;

const LoginBlock = styled.div`
  display: flex;
  margin-bottom: 20px;
`;


const Login = ({ history }) => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  const [id, setId, onChangeId] = useInput("");
  const [password, setPassword, onChangePassword] = useInput("");

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
      {/* <Header /> */}

      <BodyBlock>
        <LoginGroup>
          <LoginBlock>
            <IconBlock>
              <FaUserAlt
                className = "Icon"
              />
            </IconBlock>
            <Input
              feature="login"
              placeholder="  UserID"
              type="text"
              name="userID"
              // value={user.userID}
              onChange={onChangeId}
            />
          </LoginBlock>

          <LoginBlock>
            <IconBlock>
              <FaKey className = "Icon" />
            </IconBlock>
            <Input
              feature="login"
              placeholder="  password"
              type="text"
              name="password"
              // value={user.password}
              onChange={onChangePassword}
            />
          </LoginBlock>

          <ButtonGroup>
            <Button feature="login" type="submit" onClick={onSubmit}>
              Login
            </Button>
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button feature="login">Register</Button>
            </Link>
          </ButtonGroup>
        </LoginGroup>
      </BodyBlock>
    </>
  );
};

export default Login;
