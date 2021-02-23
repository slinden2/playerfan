import { objectType } from "nexus";

export const TeamConference = objectType({
  name: "TeamConference",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("season");
    t.nonNull.field("conference", {
      type: "Conference",
      resolve: async (parent, _, ctx) => {
        const conference = await ctx.prisma.teamConference
          .findUnique({
            where: { id: parent.id },
          })
          .conference();

        if (!conference) {
          throw new Error(
            `missing conference relation: TeamConference ${parent.id} `
          );
        }

        return conference;
      },
    });
    t.nonNull.field("team", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.teamConference
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(`missing team relation: TeamConference ${parent.id}`);
        }

        return team;
      },
    });
  },
});
