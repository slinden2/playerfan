import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";

import { createSchema } from "../../lib/utils/createSchema";
import { createContext } from "../../lib/context/createContext";

let apolloServerHandler: (req: any, res: any) => Promise<void>;

const getApolloServerHandler = async () => {
  if (!apolloServerHandler) {
    const schema = await createSchema();
    apolloServerHandler = new ApolloServer({
      schema,
      context: createContext,
    }).createHandler({
      path: "/api/graphql",
    });
  }
  return apolloServerHandler;
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const apolloServerHandler = await getApolloServerHandler();
  return apolloServerHandler(req, res);
};

export const config = { api: { bodyParser: false } };
