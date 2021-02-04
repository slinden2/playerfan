import { objectType } from "nexus";

export const ConferenceActiveSeasons = objectType({
  name: "ConferenceActiveSeasons",
  definition(t) {
    t.model.id();
    t.model.season();
    t.model.conference();
    t.model.conferenceId();
  },
});
