import { objectType } from "nexus";

export const PlaybackType = objectType({
  name: "PlaybackType",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.int("width");
    t.int("height");
    t.nonNull.list.field("playbacks", {
      type: "Playback",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.playbackType
          .findUnique({
            where: { id: parent.id },
          })
          .playbacks();
      },
    });
  },
});
