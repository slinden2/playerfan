import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { UserResolver } from "../modules/User";

export const createSchema = (): Promise<GraphQLSchema> =>
  buildSchema({
    resolvers: [UserResolver],
  });
