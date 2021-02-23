import { objectType } from "nexus";

export const PlayerTeam = objectType({
  name: "PlayerTeam",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.field("startDate", { type: "DateTime" });
    t.field("endDate", { type: "DateTime" });
    t.nonNull.field("team", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.playerTeam
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(`missing team relation: PlayerTeam ${parent.id}`);
        }

        return team;
      },
    });
    t.nonNull.field("player", {
      type: "Player",
      resolve: async (parent, _, ctx) => {
        const player = await ctx.prisma.playerTeam
          .findUnique({
            where: { id: parent.id },
          })
          .player();

        if (!player) {
          throw new Error(`missing player relation: PlayerTeam ${parent.id}`);
        }

        return player;
      },
    });
  },
});
