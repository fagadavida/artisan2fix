import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import { ButtonLink } from "./Services.elements";

const Container = styled.div`
  display: flex;
  margin: 20px auto;
  width: 60%;
  justify-items: center;
  justify-content: space-around;
`;
const ImgContainer = styled.div`
  flex: 1;
  width: 200px;
  background: blue;
  height: 350px;
  margin-right: 20px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Details = styled.div`
  flex: 1;
`;
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 400px;
`;
const Title = styled.h3`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const PaymentMethods = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceDetails = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/services/details/${id}`).then((res) => {
      setData(res.data);
      localStorage.setItem("order", res.data);
    });
  });

  return (
    <Container>
      <ImgContainer>
        <Image
          src={`http://localhost:5000/${data.imageurl}`}
          alt="Image"
          height="100"
        />
      </ImgContainer>
      <Details>
        <InfoContainer>
          <Title>
            <span>Name:</span>
            <span>{data.name}</span>
          </Title>
          <Title>
            <span>Details:</span>
            <span>{data.description}</span>
          </Title>
          <Title>
            <span>Amount:</span>
            <span>{data.amount}</span>
          </Title>
          <Title>
            <span>Location:</span>
            <span>{data.name}</span>
          </Title>
          <hr style={{ margin: "20px 0" }} />
          <PaymentMethods>
            <p4>Payment Channels</p4>
            <spa>Banks:</spa>
            <ul>
              <li>Union Bank: 9999999339</li>
            </ul>
          </PaymentMethods>
          <ButtonLink
            style={{ marginTop: "20px", textAlign: "center" }}
            to="/signup"
          >
            Pay Online
          </ButtonLink>
        </InfoContainer>
      </Details>
    </Container>
  );
};
export default ServiceDetails;
