import { gql } from "@apollo/client";

export const WorldData = gql`
  {
    latest {
      confirmed
      deceased
      recovered
      lastUpdated
    }
  }
`;

export const CountryList = gql`
  {
    countries(count: 195, filter: { hasCases: true }) {
      results {
        name
        code
      }
    }
  }
`;
