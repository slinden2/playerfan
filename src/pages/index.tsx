import { ApolloQueryResult } from "@apollo/client";
import { BestCardDocument, BestCardQuery } from "generated/graphql";
import React from "react";
import App from "../common/components/App";
import { addApolloState, initializeApollo } from "../graphql/apolloClient";

interface Props {
  bestCardsQuery: ApolloQueryResult<BestCardQuery>;
}

const IndexPage = ({ bestCardsQuery }: Props) => {
  console.log(bestCardsQuery);
  return <App></App>;
};

export const getStaticProps = async () => {
  const apolloClient = initializeApollo();

  const bestCardsQuery: ApolloQueryResult<BestCardQuery> = await apolloClient.query(
    {
      query: BestCardDocument,
    }
  );

  return addApolloState(apolloClient, {
    props: { bestCardsQuery },
  });
};

export default IndexPage;
