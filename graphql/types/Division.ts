import { objectType } from "nexus";

export const Division = objectType({
  name: "Division",
  definition(t) {
    t.model.id();
    t.model.season();
    t.model.divisionIdApi();
    t.model.link();
    t.model.name();
    t.model.shortName();
    t.model.abbreviation();
    t.model.active();
    t.model.conference();
    t.model.conferenceId();
    t.model.teams();
  },
});
