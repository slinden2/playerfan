import { createConnection as createConnectionORM, Connection } from "typeorm";

import config from "../utils/config";

declare global {
  var __DB_CONNECTION__: Connection;
}

let databaseConnection: Connection;

export const createConnection = async (): Promise<Connection> => {
  if (global.__DB_CONNECTION__) {
    return global.__DB_CONNECTION__;
  }

  try {
    databaseConnection = await createConnectionORM(config.connParams as any);
    global.__DB_CONNECTION__ = databaseConnection;
  } catch (e) {
    console.error(
      "Could not create a connection with the database, check settings!",
      e
    );
    throw e;
  }
  if (!databaseConnection) {
    throw new Error("database connection still does not exist!");
  }
  return databaseConnection;
};
