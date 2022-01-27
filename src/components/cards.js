import React from "react";
import { WorldData } from "../gql/queries";
import { useQuery } from "@apollo/client";
import { Card, Container } from "./styles/cards.style";

export default function Cards() {
  const { data, loading } = useQuery(WorldData);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <Container>
      {data && (
        <>
          <Card>
            <p>
              <u style={{ color: "#A3423C" }}>
                <em style={{ color: "#A3423C" }}>Infected</em>
              </u>
            </p>
            <br />
            <p>
              No. of people infected from Covid in the country:
              <strong>{data.latest.confirmed}</strong>
            </p>
            <p>
              Last Updated On:
              <strong>
                {new Date(data.latest.lastUpdated).toDateString()}
              </strong>
            </p>
          </Card>
          <Card>
            <p>
              <u style={{ color: "#17B978" }}>
                <em style={{ color: "#17B978" }}>Recovered</em>
              </u>
            </p>
            <br />
            <p>
              No. of people recovered from Covid in the country:
              <strong>{data.latest.recovered}</strong>
            </p>
            <p>
              Last Updated On:
              <strong>
                {new Date(data.latest.lastUpdated).toDateString()}
              </strong>
            </p>
          </Card>
          <Card>
            <p>
              <u style={{ color: "#D72323" }}>
                <em style={{ color: "#D72323" }}>Deaths</em>
              </u>
            </p>
            <br />
            <p>
              No. of people who died because of Covid in the country:
              <strong>{data.latest.deceased}</strong>
            </p>
            <p>
              Last Updated On:
              <strong>
                {new Date(data.latest.lastUpdated).toDateString()}
              </strong>
            </p>
          </Card>
        </>
      )}
    </Container>
  );
}
