import { objectType } from "nexus";

export const ConferenceActiveSeasons = objectType({
  name: "ConferenceActiveSeasons",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("season");
    t.nonNull.field("conference", {
      type: "Conference",
      resolve: async (parent, _, ctx) => {
        const conference = await ctx.prisma.conferenceActiveSeasons
          .findUnique({
            where: { id: parent.id },
          })
          .conference();

        if (!conference) {
          throw new Error("missing conference relation");
        }

        return conference;
      },
    });
  },
});
