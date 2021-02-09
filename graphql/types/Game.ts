import { enumType, objectType } from "nexus";

export const GameType = enumType({
  name: "GameType",
  members: ["R", "P"],
});

export const Game = objectType({
  name: "Game",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("gamePk");
    t.nonNull.int("statusCode");
    t.nonNull.string("liveLink");
    t.nonNull.string("contentLink");
    t.nonNull.field("gameDate", { type: "DateTime" });
    t.nonNull.field("apiDate", { type: "DateTime" });
    t.nonNull.field("gameType", { type: "GameType" });
    t.nonNull.int("awayScore");
    t.nonNull.int("homeScore");
    t.nonNull.boolean("boxscoresFetched");
    t.nonNull.boolean("linescoresFetched");
    t.nonNull.boolean("highlightsFetched");
    t.nonNull.boolean("highlightMetaFetched");
    t.nonNull.boolean("playbacksFetched");
    t.nonNull.field("awayTeam", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.game
          .findUnique({
            where: { id: parent.id },
          })
          .awayTeam();

        if (!team) {
          throw new Error(`missing awayTeam relation: Game ${parent.id}`);
        }

        return team;
      },
    });
    t.nonNull.field("homeTeam", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.game
          .findUnique({
            where: { id: parent.id },
          })
          .homeTeam();

        if (!team) {
          throw new Error(`missing homeTeam relation: Game ${parent.id}`);
        }

        return team;
      },
    });
    t.nonNull.list.field("linescores", {
      type: "Linescore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.game
          .findUnique({
            where: { id: parent.id },
          })
          .linescores();
      },
    });
    t.nonNull.list.field("skaterBoxscores", {
      type: "SkaterBoxscore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.game
          .findUnique({
            where: { id: parent.id },
          })
          .skaterBoxscores();
      },
    });
    t.nonNull.list.field("goalieBoxscores", {
      type: "GoalieBoxscore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.game
          .findUnique({
            where: { id: parent.id },
          })
          .goalieBoxscores();
      },
    });
    t.nonNull.list.field("highlights", {
      type: "Highlight",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.game
          .findUnique({
            where: { id: parent.id },
          })
          .highlights();
      },
    });
  },
});
