import { arg, extendType, nonNull, objectType } from "nexus";
import { NexusGenObjects } from "../../../generated/nexus-typegen";
import { bestGoaliesSQLQuery } from "../../sql";
import { CardInput } from "./CardInput";

export const BestGoalie = objectType({
  name: "BestGoalie",
  isTypeOf() {
    return true;
  },
  definition(t) {
    t.implements("BestPlayer");
    t.nonNull.int("wins");
    t.nonNull.int("losses");
    t.nonNull.int("shutouts");
    t.nonNull.float("savePct");
    t.nonNull.float("goalsAgainstAverage");
    t.float("powerPlaySavePct");
    t.float("shortHandedSavePct");
    t.int("powerPlayShotsAgainst");
    t.int("shortHandedShotsAgainst");
    t.nonNull.float("savesPerGame");
    t.nonNull.float("shotsAgainstPerGame");
    t.nonNull.float("winPct");
    t.nonNull.int("penaltyMinutes");
    t.nonNull.int("goals");
    t.nonNull.int("assists");
    t.nonNull.list.nonNull.field("gamePks", {
      type: "String",
      resolve: (parent) => {
        return parent.gamePks.split(", ");
      },
    });
  },
});

export const BestGoalieQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("bestGoalies", {
      type: "BestGoalie",
      args: {
        input: arg({ type: nonNull(CardInput) }),
      },
      async resolve(_, args, ctx) {
        const result = await ctx.prisma.$queryRaw<
          NexusGenObjects["BestGoalie"][]
        >(bestGoaliesSQLQuery(args.input));
        return result;
      },
    });
  },
});
