import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  text-align: center;
  margin: 10px auto;
  padding: 2px 16px;
  height: 575px;
  width: 1300px;
`;

export const Card = styled.div`
  display: block;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  border-radius: 5px;
  margin: auto;
  height: 250px;
  width: 240px;
  box-shadow: 10px 10px 10px 10px cyan;
  em {
    font-size: xx-large;
  }
  p {
    font-family: Georgia, "Times New Roman", Times, serif;
    color: #2d4263;
  }
  strong {
    font-size: x-large;
  }
`;
