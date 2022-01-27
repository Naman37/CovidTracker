import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import styled from "styled-components";
import Cards from "./components/cards";
import CountryPicker from "./components/country";
import Footer from "./components/footer";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://covid19-graphql.herokuapp.com/",
});

const Background = styled.div`
  background-image: url(covid4.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  return (
    <ApolloProvider client={client}>
      <Background>
        <CountryPicker />
        <Cards />
        <Footer />
      </Background>
    </ApolloProvider>
  );
}
export default App;
