import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";
import image from "../../images/fatherhood.svg";
import React, { useState } from "react";
import { Link } from "react-router-dom";
const Container = styled.div`
  width: 98%;
  height: 60vh;
  display: flex;
  position: relative;
  overflow: hidden;
  margin: 15px auto 5px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const Arrow = styled.div`
  widows: 50px;
  height: 50px;
  background-color: #eee8e8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "15px"};
  right: ${(props) => props.direction === "right" && "15px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.8;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
`;
const Img = styled.img`
  height: 80%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  padding: 50px;
  flex: 1;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.h4`
  margin: 25px 0;
  font-weight: 500;
  letter-spacing: 3px;
  font-size: 20px;
  padding-right: 20px;

  text-align: left;
`;
const ButtonLink = styled(Link)`
  padding: 10px;
  font-size: 20px;
  /* outline: none;
  border: none; */
  background: transparent;
  /* color: white; */
  border-radius: 5px;
  text-decoration: none;
  border: 1px solid #33c;
  cursor: pointer;
`;
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        <Slide bg="fff">
          <ImgContainer>
            <Img src={image} alt="IMG" />
          </ImgContainer>
          <InfoContainer>
            <Title>ARTISAN 2 FIX</Title>
            <Desc>
              Our Business is to provide goods and services in the area of
              information, communication and technology to our dear customers.
            </Desc>
            <ButtonLink to="/signup">JOIN NOW</ButtonLink>
          </InfoContainer>
        </Slide>
        <Slide bg="3f3">
          <ImgContainer>
            <Img src={image} alt="IMG" />
          </ImgContainer>
          <InfoContainer>
            <Title>ARTISAN 2 FIX</Title>
            <Desc>
              Our Business is to provide goods and services in the area of
              information, communication and technology to our dear customers.
            </Desc>
            <ButtonLink to="/signup">JOIN NOW</ButtonLink>
          </InfoContainer>
        </Slide>
        <Slide bg="676s6d">
          <ImgContainer>
            <Img src={image} alt="IMG" />
          </ImgContainer>
          <InfoContainer>
            <Title>ARTISAN 2 FIX</Title>
            <Desc>
              Our Business is to provide goods and services in the area of
              information, communication and technology to our dear customers.
            </Desc>
            <ButtonLink to="/signup">JOIN NOW</ButtonLink>
          </InfoContainer>
        </Slide>
      </Wrapper>

      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
