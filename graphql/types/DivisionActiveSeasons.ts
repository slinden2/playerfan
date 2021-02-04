import { objectType } from "nexus";

export const DivisionActiveSeasons = objectType({
  name: "DivisionActiveSeasons",
  definition(t) {
    t.model.id();
    t.model.season();
    t.model.division();
    t.model.divisionId();
  },
});
