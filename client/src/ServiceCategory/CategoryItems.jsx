import styled from "styled-components";
import mechanic1 from "../images/sewing.jpg";

const Container = styled.div`
  flex: 1;
  margin: 10px;
  height: 40vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoCon = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background: yellow; */
  color: white;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  margin: 20px;
`;
const Button = styled.button`
  font-size: 15px;
  color: gray;
  background: white;
  padding: 5px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 600;

  &:hover {
    background: #fafafa;
    color: #fff;
  }
`;
const IconWrapper = styled.div`
  display: flex;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 10px;
  background: white;
  color: gray;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease;
  &:hover {
    background: gray;
    color: #fff;
  }
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={mechanic1} alt="Mech" />
      <InfoCon>
        <Title>{item.name}</Title>
        <h4>{item.description}</h4>
        <Button>HIRE ME</Button>
        <IconWrapper>
          <Icon>Cart</Icon>
          <Icon>Like</Icon>
          <Icon>Share</Icon>
        </IconWrapper>
      </InfoCon>
    </Container>
  );
};

export default CategoryItems;
