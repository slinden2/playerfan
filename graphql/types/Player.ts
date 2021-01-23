import { extendType, objectType } from "nexus";

export const Player = objectType({
  name: "Player",
  definition(t) {
    t.model.id();
    t.model.playerIdApi();
    t.model.firstName();
    t.model.lastName();
    t.model.primaryNumber();
    t.model.link();
    t.model.siteLink();
    t.model.birthDate();
    t.model.birthCity();
    t.model.birthStateProvince();
    t.model.birthCountry();
    t.model.nationality();
    t.model.height();
    t.model.weight();
    t.model.alternateCaptain();
    t.model.captain();
    t.model.rookie();
    t.model.shootsCatches();
    t.model.rosterStatus();
    t.model.primaryPosition();
    t.model.active();
    // t.model.currentTeam();
    t.model.teamId();
    // t.model.skaterBoxscores();
    // t.model.goalieBoxscores();
    // t.model.highlightMetaGoal();
    // t.model.highlightMetaAssist1();
    // t.model.highlightMetaAssist2();
    // t.model.highlightMetaGoalie();
    // t.model.favoritedBy();
  },
});

export const PlayerQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("allPlayers", {
      type: Player,
      async resolve(_root, _args, ctx) {
        const players = await ctx.prisma.player.findMany();
        return players;
      },
    });
  },
});
