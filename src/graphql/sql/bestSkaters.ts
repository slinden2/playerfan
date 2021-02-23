import { NexusGenInputs } from "../../generated/nexus-typegen";
import { playerMetaFields } from "./playerMetaFields";

export const bestSkaterSQLQuery = (input: NexusGenInputs["CardInput"]) => `
SELECT
    ${playerMetaFields},
    "PlayerStats"."points",
    "PlayerStats"."goals",
    "PlayerStats"."assists",
    "PlayerStats"."plusMinus",
    "PlayerStats"."penaltyMinutes",
    "PlayerStats"."powerPlayGoals",
    "PlayerStats"."powerPlayPoints",
    "PlayerStats"."shortHandedGoals",
    "PlayerStats"."shortHandedPoints",
    "PlayerStats"."timeOnIcePerGame",
    "PlayerStats"."faceOffsTaken",
    "PlayerStats"."faceOffPct",
    "PlayerStats"."shots",
    "PlayerStats"."hits",
    "PlayerStats"."takeaways",
    "PlayerStats"."giveaways",
    "PlayerStats"."blocked",
    "PlayerStats"."gamePks"
FROM
    (
        SELECT
            "Player"."id",
            SUM("Stats"."points") AS "points",
            SUM("Stats"."goals") AS "goals",
            SUM("Stats"."assists") AS "assists",
            SUM("Stats"."plusMinus") AS "plusMinus",
            SUM("Stats"."penaltyMinutes") AS "penaltyMinutes",
            SUM("Stats"."powerPlayGoals") AS "powerPlayGoals",
            SUM(
                "Stats"."powerPlayAssists" + "Stats"."powerPlayGoals"
            ) AS "powerPlayPoints",
            SUM("Stats"."shortHandedGoals") AS "shortHandedGoals",
            SUM(
                "Stats"."shortHandedAssists" + "Stats"."shortHandedGoals"
            ) AS "shortHandedPoints",
            AVG("Stats"."timeOnIce" :: FLOAT) AS "timeOnIcePerGame",
            SUM("Stats"."faceOffsTaken") AS "faceOffsTaken",
            AVG(
                CASE WHEN "Stats"."faceOffsTaken" > 0 THEN "Stats"."faceOffWins" / "Stats"."faceOffsTaken" * 100 END
            ) AS "faceOffPct",
            SUM("Stats"."shots") AS "shots",
            SUM("Stats"."hits") AS "hits",
            SUM("Stats"."takeaways") AS "takeaways",
            SUM("Stats"."giveaways") AS "giveaways",
            SUM("Stats"."blocked") AS "blocked",
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
                    "SkaterBoxscore"."playerId" AS "playerId",
                    "SkaterBoxscore"."gamePk" AS "gamePk",
                    "SkaterBoxscore"."goals" AS "goals",
                    "SkaterBoxscore"."assists" AS "assists",
                    "SkaterBoxscore"."points" AS "points",
                    "SkaterBoxscore"."shots" AS "shots",
                    "SkaterBoxscore"."hits" AS "hits",
                    "SkaterBoxscore"."powerPlayGoals" AS "powerPlayGoals",
                    "SkaterBoxscore"."powerPlayAssists" AS "powerPlayAssists",
                    "SkaterBoxscore"."penaltyMinutes" AS "penaltyMinutes",
                    "SkaterBoxscore"."faceOffsTaken" AS "faceOffsTaken",
                    "SkaterBoxscore"."faceOffWins" AS "faceOffWins",
                    "SkaterBoxscore"."takeaways" AS "takeaways",
                    "SkaterBoxscore"."giveaways" AS "giveaways",
                    "SkaterBoxscore"."shortHandedGoals" AS "shortHandedGoals",
                    "SkaterBoxscore"."shortHandedAssists" AS "shortHandedAssists",
                    "SkaterBoxscore"."blocked" AS "blocked",
                    "SkaterBoxscore"."plusMinus" AS "plusMinus",
                    "SkaterBoxscore"."timeOnIce" AS "timeOnIce",
                    "SkaterBoxscore"."evenTimeOnIce" AS "evenTimeOnIce",
                    "SkaterBoxscore"."powerPlayTimeOnIce" AS "powerPlayTimeOnIce",
                    "SkaterBoxscore"."shortHandedTimeOnIce" AS "shortHandedTimeOnIce",
                    ROW_NUMBER() OVER (
                        PARTITION BY "SkaterBoxscore"."playerId"
                        ORDER BY
                            "Game"."gameDate" DESC
                    ) AS "seqnum"
                FROM
                    "Game"
                    JOIN "SkaterBoxscore" ON (
                        "Game"."id" = "SkaterBoxscore"."gameId"
                    )
                WHERE
                    "Game"."gamePk" :: TEXT LIKE '${process.env.SEASON}%'
            ) "Stats" ON ("Player"."id" = "Stats"."playerId")
        WHERE
            "Stats"."seqnum" <= ${input.numOfGames}
        GROUP BY
            "Player"."id"
    ) AS "PlayerStats"
    JOIN "Player" ON "PlayerStats"."id" = "Player"."id"
    JOIN "PlayerTeam" ON "Player"."id" = "PlayerTeam"."playerId"
    JOIN "Team" ON "PlayerTeam"."teamId" = "Team"."id"
WHERE
    "PlayerTeam"."endDate" IS NULL
ORDER BY
    "PlayerStats"."${input.sortBy}" DESC NULLS LAST,
    "PlayerStats"."points" DESC,
    "PlayerStats"."goals" DESC
LIMIT
    ${input.take}`;
