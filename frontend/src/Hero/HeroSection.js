import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <Container>
      <Hero
        src="/videos/pexels.mp4"
        type="video/mp4"
        autoPlay={true}
        loop={true}
        muted
      />
      <Wrapper>
        <Info>we are at your service</Info>
        <Info1>Make transactions from the comfort of your home</Info1>
        <ButtonContainer>
          <Button1>Sign-Up</Button1>
          <Button2>Know More</Button2>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default HeroSection;

const Container = styled.div`
  width: 99.9vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: column;
`;
const Hero = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const Wrapper = styled.div`
  position: absolute;
`;

const Info = styled.div`
  font-size: 45px;
  font-weight: bold;

  // text-transform: uppercase;
`;

const Info1 = styled.div`
  font-size: 20px;
  letter-spacing: 1.2;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Button1 = styled.button`
  width: 200px;
  height: 40px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  font-weight: bold;

  &:hover {
    background-color: lightblue;
    transform: scale (1.03);
  }
`;
const Button2 = styled.button`
width: 200px;
height: 40px;
background-color: blue;
color: white;
border: none;
border-radius: 5px;
font-size: 15px;
font-weight: bold;

&:hover{
    background-color: lightblue;
    Transform : scale(1.02);
}
`
