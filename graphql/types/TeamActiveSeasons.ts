import { objectType } from "nexus";

export const TeamActiveSeasons = objectType({
  name: "TeamActiveSeasons",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("season");
    t.nonNull.field("team", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.teamActiveSeasons
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(
            `missing team relation: TeamActiveSeasons ${parent.id} `
          );
        }

        return team;
      },
    });
  },
});
