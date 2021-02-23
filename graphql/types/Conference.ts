import { objectType } from "nexus";

export const Conference = objectType({
  name: "Conference",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("conferenceIdApi");
    t.nonNull.string("link");
    t.nonNull.string("name");
    t.nonNull.string("shortName");
    t.nonNull.string("abbreviation");
    t.nonNull.list.nonNull.field("activeSeasons", {
      type: "ConferenceActiveSeasons",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.conference
          .findUnique({
            where: { id: parent.id },
          })
          .activeSeasons();
      },
    });
    t.nonNull.list.nonNull.field("divisions", {
      type: "DivisionConference",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.conference
          .findUnique({
            where: { id: parent.id },
          })
          .divisions();
      },
    });
    t.nonNull.list.nonNull.field("teams", {
      type: "TeamConference",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.conference
          .findUnique({
            where: { id: parent.id },
          })
          .teams();
      },
    });
  },
});
