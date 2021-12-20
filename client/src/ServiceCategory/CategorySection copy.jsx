import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import CategoryItems from "./CategoryItems";
import "../components/Services/Services.css";
import Services from "../components/Services/Services";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const SearchSection = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  width: 80%;
  padding: 5px;
  align-items: center;
  justify-content: space-between;
`;
const Search = styled.input`
  padding: 5px;
  width: 50%;
  font-size: 18px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 97%;
  margin: 20px;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;
const ContainerCat = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ContainerService = styled.div`
  display: flex;
`;
const CategorySection = () => {
  const [data, setData] = useState([]);
  const [rows, setRows] = useState([]);
  const [query, setQuery] = useState([]);

  useEffect(() => {
    function init() {
      axios
        .get("http://localhost:5000/categories/index")
        .then((categorylist) => {
          setData(categorylist.data);
        });
      axios.get("http://localhost:5000/services/index").then((res) => {
        setRows(res.data);
      });
    }
    init();
  }, []);
  function search(rows) {
    return rows.filter((row) => row.name.toLowerCase().indexOf(query) > -1);
  }

  return (
    <Container>
      <SearchSection>
        <h3>OUR POPULAR CATEGORIES </h3>
        <Search
          type="text"
          placeholder="Search by category, service or location"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </SearchSection>

      <Wrapper>
        {data.map((item) => (
          <ContainerCat>
            <CategoryItems item={item} />
          </ContainerCat>
        ))}
      </Wrapper>

      <ContainerService>
        <h3 class="services-title"> Our Services </h3>
        {search(rows).map((item) => {
          return <Services item={item} />;
        })}
      </ContainerService>
    </Container>
  );
};

export default CategorySection;
