import { objectType } from "nexus";

export const Linescore = objectType({
  name: "Linescore",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("gamePk");
    t.nonNull.boolean("win");
    t.nonNull.boolean("otWin");
    t.nonNull.boolean("shootOutWin");
    t.nonNull.boolean("loss");
    t.nonNull.boolean("ot");
    t.nonNull.boolean("isHomeGame");
    t.nonNull.int("points");
    t.nonNull.int("goalsFor");
    t.nonNull.int("goalsAgainst");
    t.nonNull.int("penaltyMinutes");
    t.nonNull.int("shotsFor");
    t.nonNull.int("shotsAgainst");
    t.nonNull.int("powerPlayGoals");
    t.nonNull.int("powerPlayGoalsAllowed");
    t.nonNull.int("powerPlayOpportunities");
    t.nonNull.int("powerPlayOpportunitiesAllowed");
    t.nonNull.int("faceOffsTaken");
    t.nonNull.int("faceOffWins");
    t.nonNull.int("blocked");
    t.nonNull.int("takeaways");
    t.nonNull.int("giveaways");
    t.nonNull.int("hitsFor");
    t.nonNull.int("hitsAgainst");
    t.nonNull.field("team", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.linescore
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(`missing team relation: Linescore ${parent.id}`);
        }

        return team;
      },
    });
    t.nonNull.field("opponent", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.linescore
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(`missing opponent relation: Linescore ${parent.id}`);
        }

        return team;
      },
    });
    t.nonNull.field("game", {
      type: "Game",
      resolve: async (parent, _, ctx) => {
        const game = await ctx.prisma.linescore
          .findUnique({
            where: { id: parent.id },
          })
          .game();

        if (!game) {
          throw new Error(`missing game relation: Linescore ${parent.id}`);
        }

        return game;
      },
    });
  },
});
