import { makeSchema } from "nexus";
import path from "path";

import * as types from "./types";

export const schema = makeSchema({
  types,
  contextType: {
    module: path.join(process.cwd(), "graphql", "context.ts"),
    export: "Context",
  },
  outputs: {
    typegen: path.join(process.cwd(), "generated", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "generated", "schema.graphql"),
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
      {
        module: path.join(process.cwd(), "graphql", "sourceTypes", "index.ts"),
        alias: "custom",
      },
    ],
  },
  features: {
    abstractTypeStrategies: {
      resolveType: false,
      isTypeOf: true,
      __typename: false,
    },
  },
});
