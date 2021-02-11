import { gql } from "@apollo/client";
import App from "../components/App";
import { initializeApollo } from "../graphql/apolloClient";

const IndexPage = (props: any) => {
  console.log(props);
  return <App>I am just a page</App>;
};

const TestQuery = gql`
  query {
    bestSkaters {
      firstName
      lastName
      teamAbbreviation
      goals
      assists
      points
    }
  }
`;

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: TestQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default IndexPage;
