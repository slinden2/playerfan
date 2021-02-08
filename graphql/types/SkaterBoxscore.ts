import { extendType, intArg, nonNull, objectType, stringArg } from "nexus";

export const SkaterBoxscore = objectType({
  name: "SkaterBoxscore",
  definition(t) {
    t.model.id();
    t.model.gamePk();
    t.model.assists();
    t.model.goals();
    t.model.points();
    t.model.shots();
    t.model.hits();
    t.model.powerPlayGoals();
    t.model.powerPlayAssists();
    t.model.penaltyMinutes();
    t.model.faceOffsTaken();
    t.model.faceOffWins();
    t.model.takeaways();
    t.model.giveaways();
    t.model.shortHandedGoals();
    t.model.shortHandedAssists();
    t.model.blocked();
    t.model.plusMinus();
    t.model.timeOnIce();
    t.model.evenTimeOnIce();
    t.model.powerPlayTimeOnIce();
    t.model.shortHandedTimeOnIce();
    t.model.player();
    t.model.playerId();
    t.model.game();
    t.model.gameId();
    t.model.team();
    t.model.teamId();
  },
});

export const BestPlayersQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("bestPlayers", {
      type: SkaterBoxscore,
      args: {
        numOfGames: nonNull(
          intArg({ default: 1, description: "Number of games considered" })
        ),
        sortBy: nonNull(
          stringArg({ default: "points", description: "Primary sort column" })
        ),
      },
      async resolve(_, args, ctx) {
        console.log(args);
        const result = await ctx.prisma.$queryRaw(`
          SELECT
            "Player"."id",
            "Player"."firstName",
            "Player"."lastName",
            "Player"."siteLink" AS "playerSiteLink",
            "Player"."primaryPosition",
            "Team"."abbreviation",
            "Team"."siteLink" AS "teamSiteLink",
            "PlayerStats"."points",
            "PlayerStats"."goals",
            "PlayerStats"."assists",
            "PlayerStats"."plusMinus",
            "PlayerStats"."penaltyMinutes",
            "PlayerStats"."powerPlayGoals",
            "PlayerStats"."powerPlayAssists",
            "PlayerStats"."shortHandedGoals",
            "PlayerStats"."shortHandedAssists",
            "PlayerStats"."timeOnIcePerGame",
            "PlayerStats"."faceOffsTaken",
            "PlayerStats"."faceOffWins",
            "PlayerStats"."shots",
            "PlayerStats"."hits",
            "PlayerStats"."takeaways",
            "PlayerStats"."giveaways",
            "PlayerStats"."blocked"
          FROM
            (
              SELECT
                "Player"."id",
                SUM("Stats"."goals") AS "goals",
                SUM("Stats"."assists") AS "assists",
                SUM("Stats"."points") AS "points",
                SUM("Stats"."shots") AS "shots",
                SUM("Stats"."hits") AS "hits",
                SUM("Stats"."powerPlayGoals") AS "powerPlayGoals",
                SUM("Stats"."powerPlayAssists") AS "powerPlayAssists",
                SUM("Stats"."penaltyMinutes") AS "penaltyMinutes",
                SUM("Stats"."faceOffsTaken") AS "faceOffsTaken",
                SUM("Stats"."faceOffWins") AS "faceOffWins",
                SUM("Stats"."takeaways") AS "takeaways",
                SUM("Stats"."giveaways") AS "giveaways",
                SUM("Stats"."shortHandedGoals") AS "shortHandedGoals",
                SUM("Stats"."shortHandedAssists") AS "shortHandedAssists",
                SUM("Stats"."blocked") AS "blocked",
                SUM("Stats"."plusMinus") AS "plusMinus",
                AVG("Stats"."timeOnIce") AS "timeOnIcePerGame",
                AVG("Stats"."evenTimeOnIce") AS "evenTimeOnIcePerGame",
                AVG("Stats"."powerPlayTimeOnIce") AS "powerPlayTimeOnIcePerGame",
                AVG("Stats"."shortHandedTimeOnIce") AS "shortHandedTimeOnIcePerGame"
              FROM
                "Player"
                INNER JOIN (
                  SELECT
                    "SkaterBoxscore"."playerId" AS "playerId",
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
                ) "Stats" ON (
                  "Player"."id" = "Stats"."playerId"
                )
              WHERE
                "Stats"."seqnum" <= ${args.numOfGames}
              GROUP BY
                "Player"."id"
            ) AS "PlayerStats"
            JOIN "Player" ON "PlayerStats"."id" = "Player"."id"
            JOIN "PlayerTeam" ON "Player"."id" = "PlayerTeam"."playerId"
            JOIN "Team" ON "PlayerTeam"."teamId" = "Team"."id"
          WHERE
            "PlayerTeam"."endDate" IS NULL
          ORDER BY 
            "PlayerStats"."points" DESC,
            "PlayerStats"."goals" DESC
          LIMIT 50`);
        console.log(result.slice(0, 1));
        return await ctx.prisma.skaterBoxscore.findMany();
      },
    });
  },
});
