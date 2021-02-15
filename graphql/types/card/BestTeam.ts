import { arg, extendType, nonNull, objectType } from "nexus";
import { NexusGenObjects } from "../../../generated/nexus-typegen";
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
        >(`
        SELECT
        "Team"."id",
        "Team"."teamName",
        "Team"."locationName",
        "Team"."abbreviation",
        "Team"."siteLink",
        "TeamStats"."wins",
        "TeamStats"."winsAway",
        "TeamStats"."winsHome",
        "TeamStats"."losses",
        "TeamStats"."lossesAway",
        "TeamStats"."lossesHome",
        "TeamStats"."otLosses",
        "TeamStats"."otLossesAway",
        "TeamStats"."otLossesHome",
        "TeamStats"."goalsFor",
        "TeamStats"."goalsAgainst",
        "TeamStats"."powerPlayGoals",
        "TeamStats"."powerPlayPct",
        "TeamStats"."shortHandedTimes",
        "TeamStats"."penaltyKillPct",
        "TeamStats"."shotsForPerGame",
        "TeamStats"."shotsAgainstPerGame",
        "TeamStats"."takeaways",
        "TeamStats"."giveaways",
        "TeamStats"."hitsForPerGame",
        "TeamStats"."hitsAgainstPerGame",
        "TeamStats"."gamePks"
    FROM
        (
            SELECT
                "Team"."id",
                STRING_AGG(
                    "Stats"."gamePk" :: TEXT,
                    ', '
                    ORDER BY
                        "Stats"."gamePk"
                ) as "gamePks",
                COUNT(CASE WHEN "Stats"."win" THEN 1 END) AS "wins",
                COUNT(CASE WHEN "Stats"."isHomeGame" IS FALSE AND "Stats"."win" THEN 1 END) AS "winsAway",
                COUNT(CASE WHEN "Stats"."isHomeGame" AND "Stats"."win" THEN 1 END) AS "winsHome",
                COUNT(CASE WHEN "Stats"."loss" THEN 1 END) AS "losses",
                COUNT(CASE WHEN "Stats"."isHomeGame" IS FALSE AND "Stats"."loss" THEN 1 END) AS "lossesAway",
                COUNT(CASE WHEN "Stats"."isHomeGame" AND "Stats"."loss" THEN 1 END) AS "lossesHome",
                COUNT(CASE WHEN "Stats"."ot" THEN 1 END) AS "otLosses",
                COUNT(CASE WHEN "Stats"."isHomeGame" IS FALSE AND "Stats"."ot" THEN 1 END) AS "otLossesAway",
                COUNT(CASE WHEN "Stats"."isHomeGame" AND "Stats"."ot" THEN 1 END) AS "otLossesHome",
                SUM("Stats"."goalsFor") AS "goalsFor",
                SUM("Stats"."goalsAgainst") AS "goalsAgainst",
                SUM("Stats"."powerPlayGoals") AS "powerPlayGoals",
                AVG(CASE WHEN "Stats"."powerPlayOpportunities" > 0 THEN "Stats"."powerPlayGoals" :: FLOAT / "Stats"."powerPlayOpportunities" :: FLOAT * 100 END) AS "powerPlayPct",
                SUM("Stats"."powerPlayOpportunitiesAllowed") AS "shortHandedTimes",
                AVG(CASE WHEN "Stats"."powerPlayOpportunitiesAllowed" > 0 THEN 100 - ("Stats"."powerPlayGoalsAllowed" :: FLOAT / "Stats"."powerPlayOpportunitiesAllowed" :: FLOAT * 100) END) AS "penaltyKillPct",
                AVG("Stats"."shotsFor") AS "shotsForPerGame",
                AVG("Stats"."shotsAgainst") AS "shotsAgainstPerGame",
                SUM("Stats"."takeaways") AS "takeaways",
                SUM("Stats"."giveaways") AS "giveaways",
                AVG("Stats"."hitsFor") AS "hitsForPerGame",
                AVG("Stats"."hitsAgainst") AS "hitsAgainstPerGame"
            FROM
                "Team"
                INNER JOIN (
                    SELECT
                        "Linescore"."teamId" AS "teamId",
                        "Linescore"."gamePk" AS "gamePk",
                        "Linescore"."win" AS "win",
                        "Linescore"."loss" AS "loss",
                        "Linescore"."ot" AS "ot",
                        "Linescore"."isHomeGame" AS "isHomeGame",
                        "Linescore"."goalsFor" AS "goalsFor",
                        "Linescore"."goalsAgainst" AS "goalsAgainst",
                        "Linescore"."powerPlayGoals" AS "powerPlayGoals",
                        "Linescore"."powerPlayOpportunities" AS "powerPlayOpportunities",
                        "Linescore"."powerPlayGoalsAllowed" AS "powerPlayGoalsAllowed",
                        "Linescore"."powerPlayOpportunitiesAllowed" AS "powerPlayOpportunitiesAllowed",
                        "Linescore"."shotsFor" AS "shotsFor",
                        "Linescore"."shotsAgainst" AS "shotsAgainst",
                        "Linescore"."takeaways" AS "takeaways",
                        "Linescore"."giveaways" AS "giveaways",
                        "Linescore"."hitsFor" AS "hitsFor",
                        "Linescore"."hitsAgainst" AS "hitsAgainst",
                        ROW_NUMBER() OVER (
                            PARTITION BY "Linescore"."teamId"
                            ORDER BY
                                "Game"."gameDate" DESC
                        ) AS "seqnum"
                    FROM
                        "Game"
                        JOIN "Linescore" ON (
                            "Game"."id" = "Linescore"."gameId"
                        )
                    WHERE
                        "Game"."gamePk" :: TEXT LIKE '${process.env.SEASON}%'
                ) "Stats" ON (
                    "Team"."id" = "Stats"."teamId"
                )
            WHERE
                "Stats"."seqnum" <= ${args.input.numOfGames}
            GROUP BY
                "Team"."id"
        ) AS "TeamStats"
        JOIN "Team" ON "TeamStats"."id" = "Team"."id"
    ORDER BY
        "TeamStats"."${args.input.sortBy}" DESC NULLS LAST,
        "TeamStats"."wins",
        "Team"."locationName"
    LIMIT
        ${args.input.take}
    `);
        return result;
      },
    });
  },
});
