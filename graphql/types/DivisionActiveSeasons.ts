import { objectType } from "nexus";

export const DivisionActiveSeasons = objectType({
  name: "DivisionActiveSeasons",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("season");
    t.nonNull.field("division", {
      type: "Division",
      resolve: async (parent, _, ctx) => {
        const division = await ctx.prisma.divisionActiveSeasons
          .findUnique({
            where: { id: parent.id },
          })
          .division();

        if (!division) {
          throw new Error(
            `missing division relation: DivisionActiveSeasons ${parent.id} `
          );
        }

        return division;
      },
    });
  },
});
