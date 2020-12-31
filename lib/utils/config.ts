import envalid from "envalid";
import { User } from "../entities/User";

const env = envalid.cleanEnv(process.env, {
  PG_USERNAME: envalid.str(),
  PG_PASSWORD: envalid.str(),
  PG_NAME: envalid.str(),
  PG_PORT: envalid.port(),
});

const connParams = {
  type: "postgres",
  host: "localhost",
  port: env.PG_PORT,
  username: env.PG_USERNAME,
  password: env.PG_PASSWORD,
  database: env.PG_NAME,
  entities: [User],
  synchronize: true,
  logging: true,
};

export default { envVars: env, connParams };
