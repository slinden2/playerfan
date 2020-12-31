import { Connection } from "typeorm";

export interface ApolloContext {
  connection: Connection;
}
