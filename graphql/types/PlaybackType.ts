import { objectType } from "nexus";

export const PlaybackType = objectType({
  name: "PlaybackType",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.width();
    t.model.height();
    t.model.playbacks();
  },
});
