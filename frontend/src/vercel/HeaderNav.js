import React from "react";
import styled from "styled-components";

const HeaderNav = () => {
  return (
    <Header>
      <Wrap>
        <Logo>
          <img src="/images/vercel-logo.png" />
        </Logo>
        <Container>
          <a>
            <span>Template</span>
          </a>
          <a>
            <span>Integrations</span>
          </a>
          <a>
            <span>Analytics</span>
          </a>
          <a>
            <span>Customers</span>
          </a>
          <a>
            <span>Pricing</span>
          </a>
        </Container>
        <Edge>
          <a>
            <span>Contact</span>
          </a>
          <a>
            <span>Login</span>{" "}
          </a>
          <Button>Sign up</Button>
        </Edge>
      </Wrap>
    </Header>
  );
};

export default HeaderNav;

const Header = styled.div`
  width: 100vw;
  height: 70px;
  // position: fixed;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(2.5px);
  -webkit-backdrop-filter: blur(2.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

const Wrap = styled.div`
  width: 90vw;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 40px;
`;

const Logo = styled.div`
  object-fit: contain;
  width: 70px;
  height: 40px;
  margin: 30px;
  margin-left: 40px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Container = styled.div`
display: flex;
width:50px;
height: 40px;
flex: 1;
color: black;
justify-content: center;
align-items: center;
// margin-left: 20px;

a{
    display:flex;
height:100%;
width:100%
align-items:center;
font-size: 12px;
font-weight:light;
margin-top: 20px;
margin-left: 25px;

span{
    font-Weight: light;
    font-size:13px;
    position: relative;
    cursor:pointer;

&: after{
content: "";
height: 2px;
background-color:white;
position: absolute;
top:20px;
left: 0px;
 right: 0px;
 bottom: 0px;
opacity:0;
transition: width 2s;
}

&:hover{
border:2px;
    
   color: gray;
   
    &:after{
     opacity:1;
  
    }
     
}
}
}
`;

const Edge = styled.div`

display: flex;
width:200px;
// flex: 1;
color: black;

a{
    display:flex;
height:100%;
width:100%
align-items:center;
font-size: 12px;
font-weight:light;
margin-top: 12px;
margin-left: 20px;

span{
    font-Weight: light;
    font-size:12px;
    position: relative;
    cursor:pointer;

&: after{
content: "";
height: 2px;
background-color:white;
position: absolute;
top:20px;
left: 0px;
 right: 0px;
 bottom: 0px;
opacity:0;
transition: width 2s;
}

&:hover{
border:2px;
    
   color: gray;
   
    &:after{
     opacity:1;
  
    }
     
}
}
}
`;
const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 10px;
  width: 57px;
  height: 30px;
  font-weight: bold;
  border-radius: 4px;
  margin-left: 10px;
  margin-top: 10px;

  &:hover {
    background-color: white;
    border: solid black;
    color: black;
  }
`;
