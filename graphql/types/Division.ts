import { extendType, objectType } from "nexus";

export const Division = objectType({
  name: "Division",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("divisionIdApi");
    t.nonNull.string("link");
    t.nonNull.string("name");
    t.nonNull.string("shortName");
    t.nonNull.string("abbreviation");
    t.nonNull.list.nonNull.field("activeSeasons", {
      type: "DivisionActiveSeasons",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.division
          .findUnique({
            where: { id: parent.id },
          })
          .activeSeasons();
      },
    });
    t.nonNull.list.nonNull.field("conferences", {
      type: "DivisionConference",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.division
          .findUnique({
            where: { id: parent.id },
          })
          .conferences();
      },
    });
    t.nonNull.list.nonNull.field("teams", {
      type: "TeamDivision",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.division
          .findUnique({
            where: { id: parent.id },
          })
          .teams();
      },
    });
  },
});

export const DivisionQuery = extendType({
  type: "Query",
  definition(t) {
    t.nonNull.list.field("allDivisions", {
      type: Division,
      async resolve(_root, _args, ctx) {
        const divisions = await ctx.prisma.division.findMany({
          include: { conferences: true },
        });
        return divisions;
      },
    });
  },
});
