import { arg, extendType, nonNull, objectType } from "nexus";
import { PlayerCardInput } from "./BestPlayer";
import { NexusGenObjects } from "../../../generated/nexus-typegen";
import { playerMetaQueryFields } from "./queryStrings";

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
    t.nonNull.string("gamePks");
  },
});

export const BestGoalieQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("bestGoalies", {
      type: "BestGoalie",
      args: {
        input: arg({ type: nonNull(PlayerCardInput) }),
      },
      async resolve(_, args, ctx) {
        const result = await ctx.prisma.$queryRaw<
          NexusGenObjects["BestGoalie"][]
        >(`
          SELECT
            ${playerMetaQueryFields},
            "PlayerStats"."wins",
            "PlayerStats"."losses",
            "PlayerStats"."shutouts",
            "PlayerStats"."savePct",
            "PlayerStats"."goalsAgainstAverage",
            "PlayerStats"."powerPlaySavePct",
            "PlayerStats"."shortHandedSavePct",
            "PlayerStats"."powerPlayShotsAgainst",
            "PlayerStats"."shortHandedShotsAgainst",
            "PlayerStats"."savesPerGame",
            "PlayerStats"."shotsAgainstPerGame",
            "PlayerStats"."winPct",
            "PlayerStats"."penaltyMinutes",
            "PlayerStats"."goals",
            "PlayerStats"."assists",
            "PlayerStats"."gamePks"
          FROM
            (
              SELECT
                "Player"."id",
                --COUNT(*) FILTER (WHERE "Stats"."decision" = 'W') AS "wins",
                COUNT(CASE WHEN "Stats"."decision" = 'W' THEN 1 END) AS "wins",
                COUNT(CASE WHEN "Stats"."decision" = 'L' THEN 1 END) AS "losses",
                COUNT(
                  CASE WHEN "Stats"."shotsAgainst" = "Stats"."saves" THEN 1 END
                ) AS "shutouts",
                AVG(
                  CASE WHEN "Stats"."shotsAgainst" > 0 THEN "Stats"."saves" :: FLOAT /"Stats"."shotsAgainst" :: FLOAT * 100 END
                ) AS "savePct",
                AVG("Stats"."shotsAgainst" - "Stats"."saves") AS "goalsAgainstAverage",
                AVG(
                  CASE WHEN "Stats"."powerPlayShotsAgainst" > 0 THEN "Stats"."powerPlaySaves" :: FLOAT /"Stats"."powerPlayShotsAgainst" :: FLOAT * 100 END
                ) AS "powerPlaySavePct",
                AVG(
                  CASE WHEN "Stats"."shortHandedShotsAgainst" > 0 THEN "Stats"."shortHandedSaves" :: FLOAT /"Stats"."shortHandedShotsAgainst" :: FLOAT * 100 END
                ) AS "shortHandedSavePct",
                SUM("Stats"."powerPlayShotsAgainst") as "powerPlayShotsAgainst",
                SUM("Stats"."shortHandedShotsAgainst") as "shortHandedShotsAgainst",
                AVG("Stats"."saves" :: FLOAT) AS "savesPerGame",
                AVG("Stats"."shotsAgainst" :: FLOAT) AS "shotsAgainstPerGame",
                AVG(CASE WHEN "Stats"."decision" = 'W' THEN 100 ELSE 0 END) AS "winPct",
                SUM("Stats"."penaltyMinutes") AS "penaltyMinutes",
                SUM("Stats"."goals") AS "goals",
                SUM("Stats"."assists") AS "assists",
                STRING_AGG(
                  "Stats"."gamePk" :: TEXT,
                  ', '
                  ORDER BY
                    "Stats"."gamePk"
                ) as "gamePks"
              FROM
                "Player"
                INNER JOIN (
                  SELECT
                    "GoalieBoxscore"."playerId" AS "playerId",
                    "GoalieBoxscore"."gamePk" AS "gamePk",
                    "GoalieBoxscore"."decision" AS "decision",
                    "GoalieBoxscore"."timeOnIce" AS "timeOnIce",
                    "GoalieBoxscore"."assists" AS "assists",
                    "GoalieBoxscore"."goals" AS "goals",
                    "GoalieBoxscore"."saves" AS "saves",
                    "GoalieBoxscore"."powerPlaySaves" AS "powerPlaySaves",
                    "GoalieBoxscore"."shortHandedSaves" AS "shortHandedSaves",
                    "GoalieBoxscore"."shotsAgainst" AS "shotsAgainst",
                    "GoalieBoxscore"."powerPlayShotsAgainst" AS "powerPlayShotsAgainst",
                    "GoalieBoxscore"."shortHandedShotsAgainst" AS "shortHandedShotsAgainst",
                    "GoalieBoxscore"."penaltyMinutes" AS "penaltyMinutes",
                    ROW_NUMBER() OVER (
                      PARTITION BY "GoalieBoxscore"."playerId"
                      ORDER BY
                        "Game"."gameDate" DESC
                    ) AS "seqnum"
                  FROM
                    "Game"
                    JOIN "GoalieBoxscore" ON (
                      "Game"."id" = "GoalieBoxscore"."gameId"
                    )
                  WHERE "Game"."gamePk" :: TEXT LIKE '${process.env.SEASON}%'
                ) "Stats" ON (
                  "Player"."id" = "Stats"."playerId"
                )
              WHERE
                "Stats"."seqnum" <= ${args.input.numOfGames}
              GROUP BY
                "Player"."id"
            ) AS "PlayerStats"
            JOIN "Player" ON "PlayerStats"."id" = "Player"."id"
            JOIN "PlayerTeam" ON "Player"."id" = "PlayerTeam"."playerId"
            JOIN "Team" ON "PlayerTeam"."teamId" = "Team"."id"
          WHERE
            "PlayerTeam"."endDate" IS NULL
          ORDER BY
            "PlayerStats"."${args.input.sortBy}" DESC,
            "PlayerStats"."wins" DESC,
            "Player"."lastName"
          LIMIT ${args.input.take}`);
        return result;
      },
    });
  },
});
