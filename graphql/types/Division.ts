import { extendType, objectType } from "nexus";

export const Division = objectType({
  name: "Division",
  definition(t) {
    t.model.id();
    t.model.divisionIdApi();
    t.model.link();
    t.model.name();
    t.model.shortName();
    t.model.abbreviation();
    t.model.activeSeasons();
    t.model.conferences();
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
    // t.crud.divisions();
  },
});
