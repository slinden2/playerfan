import { enumType, objectType } from "nexus";

export const Decision = enumType({
  name: "Decision",
  members: ["L", "W"],
});

export const GoalieBoxscore = objectType({
  name: "GoalieBoxscore",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("gamePk");
    t.nonNull.int("timeOnIce");
    t.nonNull.int("assists");
    t.nonNull.int("goals");
    t.nonNull.int("saves");
    t.nonNull.int("powerPlaySaves");
    t.nonNull.int("shortHandedSaves");
    t.nonNull.int("evenSaves");
    t.nonNull.int("shortHandedShotsAgainst");
    t.nonNull.int("powerPlayShotsAgainst");
    t.field("decision", { type: "Decision" });
    t.nonNull.int("shotsAgainst");
    t.nonNull.int("penaltyMinutes");
    t.nonNull.float("savePct");
    t.float("powerPlaySavePct");
    t.float("shortHandedSavePct");
    t.float("evenSavePct");
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
