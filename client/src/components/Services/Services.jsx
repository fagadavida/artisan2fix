import React from "react";
import {
  Description,
  ButtonLink,
  Card,
  ContainerService,
  Icon,
  IconWrapper,
  Img,
  InfoCon,
  ServiceLink,
  Title,
} from "./Services.elements";
const Services = ({ item }) => {
  return (
    <ContainerService>
      <Card>
        <ServiceLink to={`/details/${item._id}`}>
          <Img
            style={{ width: "80%" }}
            src={`http://localhost:5000/${item.imageurl}`}
            alt="Image"
          />
        </ServiceLink>

        <InfoCon>
          <Title>{item.name}</Title>
          <Description>{item.description}</Description>

          <IconWrapper>
            <Icon>Like</Icon>
            <Icon>Share</Icon>
            <ButtonLink to={`/details/${item._id}`}>HIRE ME</ButtonLink>
          </IconWrapper>
        </InfoCon>
      </Card>
    </ContainerService>
  );
};

export default Services;
