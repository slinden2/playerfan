import { objectType } from "nexus";

export const TeamActiveSeasons = objectType({
  name: "TeamActiveSeasons",
  definition(t) {
    t.model.id();
    t.model.season();
    t.model.team();
    t.model.teamId();
  },
});
