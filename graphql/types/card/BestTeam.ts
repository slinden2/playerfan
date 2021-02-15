import { arg, extendType, nonNull, objectType } from "nexus";
import { NexusGenObjects } from "../../../generated/nexus-typegen";
import { bestTeamsSQLQuery } from "../../sql";
import { CardInput } from "./CardInput";

export const BestTeam = objectType({
  name: "BestTeam",
  isTypeOf() {
    return true;
  },
  definition(t) {
    t.nonNull.id("id");
    t.nonNull.string("teamName");
    t.nonNull.string("locationName");
    t.nonNull.string("abbreviation");
    t.nonNull.string("siteLink");
    t.nonNull.int("wins");
    t.nonNull.int("losses");
    t.nonNull.int("otLosses");
    t.nonNull.field("awayRecord", {
      type: "String",
      resolve: (parent) => {
        return `${parent.winsAway}-${parent.lossesAway}-${parent.otLossesAway}`;
      },
    });
    t.nonNull.field("homeRecord", {
      type: "String",
      resolve: (parent) => {
        return `${parent.winsHome}-${parent.lossesHome}-${parent.otLossesHome}`;
      },
    });
    t.nonNull.int("goalsFor");
    t.nonNull.int("goalsAgainst");
    t.nonNull.int("powerPlayGoals");
    t.nonNull.float("powerPlayPct");
    t.nonNull.int("shortHandedTimes");
    t.nonNull.float("penaltyKillPct");
    t.nonNull.float("shotsForPerGame");
    t.nonNull.float("shotsAgainstPerGame");
    t.nonNull.int("takeaways");
    t.nonNull.int("giveaways");
    t.nonNull.float("hitsForPerGame");
    t.nonNull.float("hitsAgainstPerGame");
    t.nonNull.list.nonNull.field("gamePks", {
      type: "String",
      resolve: (parent) => {
        return parent.gamePks.split(", ");
      },
    });
  },
});

export const BestTeamQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("bestTeams", {
      type: "BestTeam",
      args: {
        input: arg({ type: nonNull(CardInput) }),
      },
      async resolve(_parent, args, ctx) {
        const result = await ctx.prisma.$queryRaw<
          NexusGenObjects["BestTeam"][]
        >(bestTeamsSQLQuery(args.input));
        return result;
      },
    });
  },
});
