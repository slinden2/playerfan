import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.model.id();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.username();
    t.model.usernameLower();
    t.model.email();
    t.model.isVerified();
    t.model.role();
    t.model.favoritePlayers();
    t.model.likedHighlights();
    t.model.comments();
  },
});
