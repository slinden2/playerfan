import { objectType } from "nexus";

export const TeamDivision = objectType({
  name: "TeamDivision",
  definition(t) {
    t.model.id();
    t.model.season();
    t.model.division();
    t.model.divisionId();
    t.model.team();
    t.model.teamId();
  },
});
