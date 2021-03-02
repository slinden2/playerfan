import { ApolloProvider } from "@apollo/client";
import GlobalStyles from "common/components/GlobalStyles";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { useApollo } from "../graphql/apolloClient";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
