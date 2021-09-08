import React from "react";
import { Fragment } from "react";
import styled from "styled-components";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

let date = new Date().getFullYear();
console.log(date);

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Wrapper>
          <span>About Us</span>
          <Section>How it works</Section>
          <Section>Testimonials</Section>
          <Section>Careers</Section>
          <Section>Investor</Section>
          <Section>Terms of services</Section>
        </Wrapper>
        <Wrapper>
          <span>Contact Us</span>
          <Section>Head Office</Section>
          <Section>Home Address</Section>
          <Section>Management</Section>
          <Section>Investor</Section>
          <Section>Our Locations</Section>
        </Wrapper>
        <Wrapper>
          <span>Videos</span>
          <Section>Documentary</Section>
          <Section>Our Events</Section>
          <Section>Gallary</Section>
          <Section>Interviews</Section>
          <Section>Recreations</Section>
        </Wrapper>
        <Wrapper>
          <span>Social Media</span>
          <Section>Facebook</Section>
          <Section>Instagram</Section>
          <Section>LinkedIn</Section>
          <Section>YouTube</Section>
          <Section>WhatsApp</Section>
        </Wrapper>
      </Container>

      <FooterTab>
        <Tab>
          <Logo src="/images/viewers-marvel.png" />
          <Span>Developed by O.C.Chiamaka 😊| {date} All right reserved </Span>
          <SocialLink>
            <a>
              <FacebookOutlined />
            </a>
            <a>
              <YoutubeOutlined />
            </a>
            <a>
              <InstagramOutlined />
            </a>
          </SocialLink>
        </Tab>
      </FooterTab>
    </Fragment>
  );
};

export default Footer;

const Container = styled.div`
  background-color: #040714;
  width: 100%;
  height: 30vh;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  span {
    margin-bottom: 20px;
    text-transform: uppercase;
    &:hover {
      color: lightblue;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;
const Section = styled.div`
  margin-left: 20px;
  text-align: left;
  width: 100px;
  font-size: 13px;
  font-weight: normal;
  margin-top: 3px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
const FooterTab = styled.div`
  width: 100%;
  height: 50px;
  background-color: blue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Tab = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 0 30px;
  align-items: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 50px;
  object-fit: contain;
`;

const Span = styled.div`
  font-size: 12px;
  letter-spacing: 1.2;
  text-transform: uppercase;
  font-weight: bold;
`;
const SocialLink = styled.div`
  height: 100%;
  width: 170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
