import { objectType } from "nexus";

export const Playback = objectType({
  name: "Playback",
  definition(t) {
    t.model.id();
    t.model.url();
    t.model.type();
    t.model.playbackTypeId();
    t.model.highlight();
    t.model.highlightId();
  },
});
