import * as Types from "./graphql";

import * as Operations from "./graphql";
import { NextPage } from "next";
import { NextRouter, useRouter } from "next/router";
import { QueryHookOptions, useQuery } from "@apollo/client";
import * as Apollo from "@apollo/client";
import type React from "react";
import { getApolloClient } from "../graphql/apolloClient";
export async function getServerPageBestCard(
  options: Omit<Apollo.QueryOptions<Types.BestCardQueryVariables>, "query">,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.BestCardQuery>({
    ...options,
    query: Operations.BestCardDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageBestCardComp = React.FC<{
  data?: Types.BestCardQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageBestCard = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.BestCardQuery, Types.BestCardQueryVariables>
) => (WrappedComponent: PageBestCardComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.BestCardDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrBestCard = {
  getServerPage: getServerPageBestCard,
  withPage: withPageBestCard,
};
export async function getServerPageBestGoalie(
  options: Omit<Apollo.QueryOptions<Types.BestGoalieQueryVariables>, "query">,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.BestGoalieQuery>({
    ...options,
    query: Operations.BestGoalieDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageBestGoalieComp = React.FC<{
  data?: Types.BestGoalieQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageBestGoalie = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.BestGoalieQuery, Types.BestGoalieQueryVariables>
) => (WrappedComponent: PageBestGoalieComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.BestGoalieDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrBestGoalie = {
  getServerPage: getServerPageBestGoalie,
  withPage: withPageBestGoalie,
};
export async function getServerPageBestSkater(
  options: Omit<Apollo.QueryOptions<Types.BestSkaterQueryVariables>, "query">,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.BestSkaterQuery>({
    ...options,
    query: Operations.BestSkaterDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageBestSkaterComp = React.FC<{
  data?: Types.BestSkaterQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageBestSkater = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.BestSkaterQuery, Types.BestSkaterQueryVariables>
) => (WrappedComponent: PageBestSkaterComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.BestSkaterDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrBestSkater = {
  getServerPage: getServerPageBestSkater,
  withPage: withPageBestSkater,
};
export async function getServerPageBestTeam(
  options: Omit<Apollo.QueryOptions<Types.BestTeamQueryVariables>, "query">,
  ctx?: any
) {
  const apolloClient = getApolloClient(ctx);

  const data = await apolloClient.query<Types.BestTeamQuery>({
    ...options,
    query: Operations.BestTeamDocument,
  });

  const apolloState = apolloClient.cache.extract();

  return {
    props: {
      apolloState,
      data: data?.data,
      error: data?.error ?? data?.errors ?? null,
    },
  };
}
export type PageBestTeamComp = React.FC<{
  data?: Types.BestTeamQuery;
  error?: Apollo.ApolloError;
}>;
export const withPageBestTeam = (
  optionsFunc?: (
    router: NextRouter
  ) => QueryHookOptions<Types.BestTeamQuery, Types.BestTeamQueryVariables>
) => (WrappedComponent: PageBestTeamComp): NextPage => (props) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  const { data, error } = useQuery(Operations.BestTeamDocument, options);
  return <WrappedComponent {...props} data={data} error={error} />;
};
export const ssrBestTeam = {
  getServerPage: getServerPageBestTeam,
  withPage: withPageBestTeam,
};
