import { Connection } from "typeorm";
import { createConnection } from "../db/db";
import { ApolloContext } from "../types";

let dbConnection: Connection;
(async () => {
  dbConnection = await createConnection();
})();

export const createContext = (): ApolloContext => {
  return { connection: dbConnection };
};
