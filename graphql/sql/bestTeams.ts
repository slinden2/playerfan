import { NexusGenInputs } from "../../generated/nexus-typegen";

export const bestTeamsSQLQuery = (input: NexusGenInputs["CardInput"]) => `
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
            COUNT(
                CASE WHEN "Stats"."isHomeGame" IS FALSE
                AND "Stats"."win" THEN 1 END
            ) AS "winsAway",
            COUNT(
                CASE WHEN "Stats"."isHomeGame"
                AND "Stats"."win" THEN 1 END
            ) AS "winsHome",
            COUNT(CASE WHEN "Stats"."loss" THEN 1 END) AS "losses",
            COUNT(
                CASE WHEN "Stats"."isHomeGame" IS FALSE
                AND "Stats"."loss" THEN 1 END
            ) AS "lossesAway",
            COUNT(
                CASE WHEN "Stats"."isHomeGame"
                AND "Stats"."loss" THEN 1 END
            ) AS "lossesHome",
            COUNT(CASE WHEN "Stats"."ot" THEN 1 END) AS "otLosses",
            COUNT(
                CASE WHEN "Stats"."isHomeGame" IS FALSE
                AND "Stats"."ot" THEN 1 END
            ) AS "otLossesAway",
            COUNT(
                CASE WHEN "Stats"."isHomeGame"
                AND "Stats"."ot" THEN 1 END
            ) AS "otLossesHome",
            SUM("Stats"."goalsFor") AS "goalsFor",
            SUM("Stats"."goalsAgainst") AS "goalsAgainst",
            SUM("Stats"."powerPlayGoals") AS "powerPlayGoals",
            AVG(
                CASE WHEN "Stats"."powerPlayOpportunities" > 0 THEN "Stats"."powerPlayGoals" :: FLOAT / "Stats"."powerPlayOpportunities" :: FLOAT * 100 END
            ) AS "powerPlayPct",
            SUM("Stats"."powerPlayOpportunitiesAllowed") AS "shortHandedTimes",
            AVG(
                CASE WHEN "Stats"."powerPlayOpportunitiesAllowed" > 0 THEN 100 - (
                    "Stats"."powerPlayGoalsAllowed" :: FLOAT / "Stats"."powerPlayOpportunitiesAllowed" :: FLOAT * 100
                ) END
            ) AS "penaltyKillPct",
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
            "Stats"."seqnum" <= ${input.numOfGames}
        GROUP BY
            "Team"."id"
    ) AS "TeamStats"
    JOIN "Team" ON "TeamStats"."id" = "Team"."id"
ORDER BY
    "TeamStats"."${input.sortBy}" DESC NULLS LAST,
    "TeamStats"."wins",
    "Team"."locationName"
LIMIT
    ${input.take}

`;
