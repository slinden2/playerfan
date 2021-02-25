import { useMemo } from "react";
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";
import merge from "deepmerge";
import isEqual from "lodash/isEqual";

export interface PageProps {
  props?: Record<string, any>;
}

export const APOLLO_STATE_PROP_NAME = "__APOLLO_STATE__";

let apolloClient: ApolloClient<NormalizedCacheObject>;

const isBrowser: boolean = process.browser;

const createIsomorphicLink = () => {
  if (typeof window === "undefined") {
    // server
    const { SchemaLink } = require("@apollo/client/link/schema");
    const { schema } = require("./schema");
    // API routes are not triggered on build time so we need a context
    // with PrismaClient in it here.
    const { createContext } = require("graphql/context");
    return new SchemaLink({ schema, context: createContext });
  } else {
    // client
    const { HttpLink } = require("@apollo/client/link/http");
    return new HttpLink({
      uri: "http://localhost:3000/api/graphql",
      credentials: "include",
    });
  }
};

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphicLink(),
    cache: new InMemoryCache(),
    connectToDevTools: isBrowser,
  });
};

export function initializeApollo(initialState: any = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // _apolloClient.cache.restore(initialState);
    const existingCache = _apolloClient.extract();

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    });

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function addApolloState(
  client: typeof apolloClient,
  pageProps: PageProps
) {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
}

export function useApollo(pageProps: PageProps) {
  const state = pageProps.props?.[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);

  return store;
}
