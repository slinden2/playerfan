import { arg, extendType, nonNull, objectType } from "nexus";

import { NexusGenObjects } from "../../../generated/nexus-typegen";
import { bestSkaterSQLQuery } from "../../sql";
import { CardInput } from "./CardInput";

export const BestSkater = objectType({
  name: "BestSkater",
  isTypeOf() {
    return true;
  },
  definition(t) {
    t.implements("BestPlayer");
    t.nonNull.int("points");
    t.nonNull.int("goals");
    t.nonNull.int("assists");
    t.nonNull.int("plusMinus");
    t.nonNull.int("penaltyMinutes");
    t.nonNull.int("powerPlayGoals");
    t.nonNull.int("powerPlayPoints");
    t.nonNull.int("shortHandedGoals");
    t.nonNull.int("shortHandedPoints");
    t.nonNull.float("timeOnIcePerGame");
    t.nonNull.int("faceOffsTaken");
    t.float("faceOffPct");
    t.nonNull.int("shots");
    t.nonNull.int("hits");
    t.nonNull.int("takeaways");
    t.nonNull.int("giveaways");
    t.nonNull.int("blocked");
    t.nonNull.list.nonNull.field("gamePks", {
      type: "String",
      resolve: (parent) => {
        return parent.gamePks.split(", ");
      },
    });
  },
});

export const BestSkaterQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("bestSkaters", {
      type: "BestSkater",
      args: {
        input: arg({ type: nonNull(CardInput) }),
      },
      async resolve(_, args, ctx) {
        const result = (await ctx.prisma.$queryRaw(
          bestSkaterSQLQuery(args.input)
        )) as NexusGenObjects["BestSkater"][];
        return result;
      },
    });
  },
});
