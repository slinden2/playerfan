import { objectType } from "nexus";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.content();
    t.model.highlight();
    t.model.highlightId();
  },
});
