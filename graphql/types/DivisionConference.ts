import { objectType } from "nexus";

export const DivisionConference = objectType({
  name: "DivisionConference",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("season");
    t.nonNull.field("conference", {
      type: "Conference",
      resolve: async (parent, _, ctx) => {
        const conference = await ctx.prisma.divisionConference
          .findUnique({
            where: { id: parent.id },
          })
          .conference();

        if (!conference) {
          throw new Error(
            `missing conference relation: DivisionConference ${parent.id} `
          );
        }

        return conference;
      },
    });
    t.nonNull.field("division", {
      type: "Division",
      resolve: async (parent, _, ctx) => {
        const division = await ctx.prisma.divisionConference
          .findUnique({
            where: { id: parent.id },
          })
          .division();

        if (!division) {
          throw new Error(
            `missing division relation: DivisionConference ${parent.id} `
          );
        }

        return division;
      },
    });
  },
});
