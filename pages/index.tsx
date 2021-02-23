import { ApolloQueryResult } from "@apollo/client";
import App from "../components/App";
import { BestCardDocument, BestCardQuery } from "../generated/graphql";
import { addApolloState, initializeApollo } from "../graphql/apolloClient";

interface Props {
  bestCardsQuery: ApolloQueryResult<BestCardQuery>;
}

const IndexPage = ({ bestCardsQuery }: Props) => {
  console.log(bestCardsQuery);
  return <App>I am just a page</App>;
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
