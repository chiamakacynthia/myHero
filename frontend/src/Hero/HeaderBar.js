import React from "react";

import styled from "styled-components";

const HeaderBar = () => {
  return (
    <Header>
      <Logo>
        <img src="/images/logo.png" />
      </Logo>
      <Wrap>
        <a>
          <img src="/images/home-icon.svg" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" />
          <span>Series</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" />
          <span>WatchList</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" />
          <span>Movies</span>
        </a>
      </Wrap>

      <a>
        <Log>
          <img src="/images/3.jpg" />
          <span>LogOut</span>
        </Log>
      </a>
    </Header>
  );
};

export default HeaderBar;

const Header = styled.div`
  width: 100vw;
  height: 70px;
  background-color: #040714;
  display: flex;
  
  @media screen and (max-width: 768px){
    display:flex
`;

const Logo = styled.div`
  margin-top: 2px;
  object-fit: contain;
`;
const Wrap = styled.div`
display: flex;
width:50px;
flex: 1;
color: white;

a{
    display:flex;
height:100%;
width:100%
align-items:center;
font-size: 12px;
font-weight:bold;
margin-top: 25px;
margin-left: 35px;


img{
    width:20px;
    height:20px;
    object-fit: cover;
}

span{
    font-Weight: bold;
    font-size:15px;
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
    
   color: lightblue;
   
    &:after{
     opacity:1;
  
    }
     
}
}
}
`;
const Log = styled.div`
  margin-right: 20px;
  cursor: pointer;
  display: flex;
  margin-top: 20px;
  justify-content: center;
  color: white;

  img {
    width: 20px;
    height: 20px;
    border-radius: 10px;
    object-fit: cover;
    margin-right: 10px;
    margin-top: 2px;
  }
`;
