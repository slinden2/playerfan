import { objectType } from "nexus";

export const SkaterBoxscore = objectType({
  name: "SkaterBoxscore",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("gamePk");
    t.nonNull.int("assists");
    t.nonNull.int("goals");
    t.nonNull.int("points");
    t.nonNull.int("shots");
    t.nonNull.int("hits");
    t.nonNull.int("powerPlayGoals");
    t.nonNull.int("powerPlayAssists");
    t.nonNull.int("penaltyMinutes");
    t.nonNull.int("faceOffsTaken");
    t.nonNull.int("faceOffWins");
    t.nonNull.int("takeaways");
    t.nonNull.int("giveaways");
    t.nonNull.int("shortHandedGoals");
    t.nonNull.int("shortHandedAssists");
    t.nonNull.int("blocked");
    t.nonNull.int("plusMinus");
    t.nonNull.int("timeOnIce");
    t.nonNull.int("evenTimeOnIce");
    t.nonNull.int("powerPlayTimeOnIce");
    t.nonNull.int("shortHandedTimeOnIce");
    t.nonNull.field("player", {
      type: "Player",
      resolve: async (parent, _, ctx) => {
        const player = await ctx.prisma.skaterBoxscore
          .findUnique({
            where: { id: parent.id },
          })
          .player();

        if (!player) {
          throw new Error(
            `missing player relation: SkaterBoxscore ${parent.id}`
          );
        }

        return player;
      },
    });
    t.nonNull.field("game", {
      type: "Game",
      resolve: async (parent, _, ctx) => {
        const game = await ctx.prisma.skaterBoxscore
          .findUnique({
            where: { id: parent.id },
          })
          .game();

        if (!game) {
          throw new Error(`missing game relation: SkaterBoxscore ${parent.id}`);
        }

        return game;
      },
    });
    t.nonNull.field("team", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.skaterBoxscore
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(`missing team relation: SkaterBoxscore ${parent.id}`);
        }

        return team;
      },
    });
  },
});
