import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const MyGradient = () => {
  const [counter, setCounter] = useState(0);
  const textColor = useRef();
  const textColor1 = useRef();
  const textColor2 = useRef();

  const myColor = [
    "linear-gradient(#008BEC, #00CDDC)",
    "linear-gradient(black, black)",
    "linear-gradient(black, black)",
  ];
  const myColor1 = [
    "linear-gradient(black, black)",
    "linear-gradient(#8026C6, #DD0A92)",
    "linear-gradient(black, black)",
  ];
  const myColor2 = [
    "linear-gradient(black, black)",
    "linear-gradient(black, black)",
    "linear-gradient(#FE5E4B, #FAB431)",
  ];

  useEffect(() => {
    textColor.current.style.backgroundImage = myColor[counter % myColor.length];
    textColor.current.style.transition = "all 350ms";

    textColor1.current.style.backgroundImage =
      myColor1[counter % myColor.length];
    textColor1.current.style.transition = "all 350ms";

    textColor2.current.style.backgroundImage =
      myColor2[counter % myColor.length];
    textColor2.current.style.transition = "all 350ms";
  }, [counter]);

  useEffect(() => {
    setInterval(() => {
      setCounter((el) => el + 1);
    }, 3000);
  }, []);
  return (
    <Container>
      <Wrapper>
        <Text1 ref={textColor}>Develop.</Text1>
        <Text2 ref={textColor1}>Preview.</Text2>
        <Text3 ref={textColor2}>Ship.</Text3>

        <ButtonHolder>
          <First>Start Deploying</First>
          <Second>Get a Demo</Second>
        </ButtonHolder>
        <Text>
          Vercel combines the best developer experience with an obsessive focus
          <br />
          on end-user performance. Our platform enables frontend teams to do
          their best <br />
          work.
        </Text>

        <Develop>
          <Tex1>EXPLORE THE VERCEL WAY</Tex1>
          <Line />
          <Round>
            <span>1</span>
          </Round>
          <Tex2>Develop</Tex2>
        </Develop>
        <Tex3>Start with the developer</Tex3>
        <Text4>
          <Left>
            Developers love Next.js, the open source React framework Vercel
            built together with Google and Facebook. Next.js powers the biggest
            websites like Twilio, for use cases in e-commerce, travel, news, and
            marketing.
          </Left>

          <Right>
            Vercel is the best place to deploy any frontend app. Start by
            deploying with zero configuration to our global edge network. Scale
            dynamically to millions of pages without breaking a sweat.
          </Right>
        </Text4>
        <Pro>
          <Img>
            <img src="/images/vercel.png" />
          </Img>
          <Des>
            <Head>Fast Refresh</Head>
            <Body>
              Reliable live-editing experience for your UI components.
            </Body>
            <Head>Flexible Data Fetching</Head>
            <Body>
              Connect your pages to any data source, headless CMS, or API and
              make it work in everyone’s dev environment.
            </Body>
            <Head>Edge on Localhost</Head>
            <Body>
              From caching to Serverless Functions, all our cloud primitives
              work perfectly on localhost.
            </Body>
          </Des>
        </Pro>

        <Fm>WORKS WITH 30+ JAMSTACK FRAMEWORKS</Fm>
        <img src="/images/vercel-suo.png" />

        <SecondLine>
          <Line2 />
          <Round2>
            <span>2</span>
          </Round2>
          <Head2>Preview</Head2>

          <T2>Accelerate with your team</T2>

          <Mid>
            Frontend development is not meant to be a solo activity. The Vercel
            platform makes it a collaborative experience with deploy previews
            for every code change, by seamlessly integrating with GitHub,
            GitLab, and Bitbucket.
          </Mid>
        </SecondLine>
        <Push>
          <Imag>
            <img src="/images/vercell.png" />
            <img src="/images/vercel2.png" />
            <img src="/images/vercelchart.png" />
          </Imag>
          <Dash>
            <Str />
            <Rd />
            <Brk />
            <Rd />
            <Brk />
            <Rd />
            <Str />
          </Dash>
          <Words>6</Words>
        </Push>
      </Wrapper>
    </Container>
  );
};

export default MyGradient;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text1 = styled.div`
  font-size: 150px;
  font-weight: bold;
  font-family: poppins;
  letter-spacing: -8px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Text2 = styled.div`
  font-size: 150px;
  font-weight: bold;
  font-family: poppins;
  letter-spacing: -8px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
const Text3 = styled.div`
  font-size: 120px;
  font-weight: bold;
  font-family: poppins;
  letter-spacing: -8px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonHolder = styled.div`
  width: 30rem;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;
`;
const First = styled.button`
  width: 14rem;
  height: 50px;
  background-color: black;
  color: white;
  font-weight: bold;
  font-size: 15px;
  border-radius: 7px;
  border: solid black;
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Second = styled.button`
  width: 14rem;
  height: 50px;
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 15px;
  border-radius: 7px;
  border: 0.5px light gray;
  opacity: 0.5;

  &:hover {
    background-color: white;
    border: solid black;
  }
`;

const Text = styled.div`
  font-size: 15px;
  font-weight: light;
  text-align: center;
  color: gray;
  margin-top: 20px;
`;

// const Tex = styled.div``;

const Develop = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Tex1 = styled.div`
  font-size: 12px;
  font-family: poppins;
  font-weight: bold;
  letter-spacing: 1.8px;
`;
const Line = styled.div`
  height: 120px;
  width: 1px;
  background: linear-gradient(transparent, #00cfdc);
`;

const Round = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: linear-gradient(#0085ee, #00cfdc);

  span {
    font-weight: bold;
    font-size: 13px;
    color: black;
    display: flex;
    justify-items: center;
  }
`;

const Tex2 = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: white;
  display: flex;
  justify-content: center;
  background: linear-gradient(#0085ee, #00cfdc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 15px;
`;
const Tex3 = styled.div`
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 1px;
`;
const Text4 = styled.div`
  width: 1100px;
  display: flex;
  justify-items: space-between;
`;
const Left = styled.div`
  font-weight: light;
  font-size: 13px;
  letter-spacing: 0.3px;
  margin-left: 10px;
`;
const Right = styled.div`
  font-weight: light;
  font-size: 13px;
  letter-spacing: 0.3px;
`;

const Pro = styled.div`
  display: flex;
  justify-items: space-between;
`;
const Img = styled.div`
  width: 500px;
  // height: 350px;
  margin-top: 40px;
`;
const Des = styled.div`
  width: 500px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-left: 100px;
`;
const Head = styled.div`
  font-size: 25px;
  font-weight: bold;
`;
const Body = styled.div`
  font-size: 13px;
  font-weight: light;
  margin-top: 10px;
  margin-bottom: 30px;
`;

const Fm = styled.div`
  font-size: 12px;
  font-family: poppins;
  font-weight: bold;
  letter-spacing: 1.8px;
  margin-top: 25px;
  margin-bottom: 30px;
`;

const SecondLine = styled.div`
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
const Line2 = styled.div`
  height: 120px;
  width: 1px;
  background: linear-gradient(transparent, #ca119e);
`;
const Round2 = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: linear-gradient(#9c1db6, #cd0f9c);
  margin-bottom: 30px;

  span {
    font-weight: bold;
    font-size: 13px;
    color: black;
    display: flex;
    justify-items: center;
  }
`;
const Head2 = styled.div`
  font-weight: bold;
  font-size: 25px;
  color: white;
  display: flex;
  justify-content: center;
  background: linear-gradient(#9c1db6, #cd0f9c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 25px;
`;
const T2 = styled.div`
  font-weight: bold;
  font-size: 50px;
  letter-spacing: 1px;
  margin-top: 25px;
`;
const Mid = styled.div`
  font-weight: light;
  font-size: 13px;
  letter-spacing: 0.3px;
  margin-top: 25px;
  width: 650px;
  text-align: center;
`;

const Push = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const Imag = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Dash = styled.div`
  display: flex;
  flex-direction: column;
`;
const Str = styled.div`
  height: 100px;
  width: 1px;
  background: linear-gradient(transparent, #ca119e);
`;
const Brk = styled.div`
  height: 120px;
  width: 1px;
  border-left: dashed;
  opacity: 0.5;
  font-size: 10px;
`;
const Rd = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 4px;
  border: 2px blue;
`;
const Words = styled.div``;
