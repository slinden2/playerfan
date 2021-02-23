import { objectType } from "nexus";

export const Playback = objectType({
  name: "Playback",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("url");
    t.nonNull.field("type", {
      type: "PlaybackType",
      resolve: async (parent, _, ctx) => {
        const type = await ctx.prisma.playback
          .findUnique({
            where: { id: parent.id },
          })
          .type();

        if (!type) {
          throw new Error(`missing type relation: Playback ${parent.id}`);
        }

        return type;
      },
    });
    t.nonNull.field("highlight", {
      type: "Highlight",
      resolve: async (parent, _, ctx) => {
        const highlight = await ctx.prisma.playback
          .findUnique({
            where: { id: parent.id },
          })
          .highlight();

        if (!highlight) {
          throw new Error(`missing highlight relation: Playback ${parent.id}`);
        }

        return highlight;
      },
    });
  },
});
