import styled from "styled-components";

export const Header = styled.div`
  margin: auto;
  label {
    color: #323232;
    font-weight: bolder;
    font-size: larger;
    font-style: italic;
    padding-top: 10px;
  }
  input {
    background-color: white;
    color: black;
    margin-top: 4px;
    height: 2em;
    vertical-align: middle;
  }
  span {
    border-left: 10px;
    position: fixed;
    font-size: 45px;
    color: #064663;
    text-decoration: underline solid #064663;
  }
`;

export const Country = styled.select`
  position: relative;
  display: inline-block;
  width: 15em;
  height: 2em;
  line-height: 3;
  overflow: hidden;
  border-radius: 0.25em;
  padding-bottom: 10px;
  margin: auto;
  font-size: large;
`;
