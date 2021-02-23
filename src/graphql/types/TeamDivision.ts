import { objectType } from "nexus";

export const TeamDivision = objectType({
  name: "TeamDivision",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("season");
    t.nonNull.field("division", {
      type: "Division",
      resolve: async (parent, _, ctx) => {
        const division = await ctx.prisma.teamDivision
          .findUnique({
            where: { id: parent.id },
          })
          .division();

        if (!division) {
          throw new Error(
            `missing division relation: TeamDivision ${parent.id} `
          );
        }

        return division;
      },
    });
    t.nonNull.field("team", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.teamDivision
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(`missing team relation: TeamDivision ${parent.id}`);
        }

        return team;
      },
    });
  },
});
