import React from "react";
import Button from "../components/common/Button";
import styled from "styled-components";
import {Link} from "react-router-dom";

const LandingBlock = styled.div`
  display:flex;
  width:100%;
  height:98vh;
  justify-content:center;
  align-items:center;
`;

const CenterBlock = styled.div`
  display : flex;
  justify-content: space-between;
  align-items:center;
  width: 45%;
  height:60%;
`;

const ButtonGroup = styled.div`
  display:flex;
  flex-direction : column;
  justify-content: space-between;
  height: 15.5vh;
`;

const Landing = () => {
  return (
    <LandingBlock>
      <CenterBlock>
        <div style = {{width:"50%"}}>
          김박이조하팀은 가성비팀이지만 열심히하려고합니다.<br/>김박이조하팀은 가성비팀이지만 열심히하려고합니다.<br/>김박이조하팀은 가성비팀이지만 열심히하려고합니다.<br/>김박이조하팀은 가성비팀이지만 열심히하려고합니다.
        </div>

        <ButtonGroup>
          <Link to = "/login" style = {{textDecoration : 'none'}}>
            <Button feature = "landing">Login</Button>
          </Link>

          <Link to = "/register" style = {{textDecoration : 'none'}}>
            <Button feature = "landing">Register</Button>
          </Link>
        </ButtonGroup>

      </CenterBlock>
    </LandingBlock>
  )
};

export default Landing;
