import { objectType } from "nexus";

export const Conference = objectType({
  name: "Conference",
  definition(t) {
    t.model.id();
    t.model.conferenceIdApi();
    t.model.link();
    t.model.name();
    t.model.shortName();
    t.model.abbreviation();
    t.model.activeSeasons();
    t.model.divisions();
  },
});
