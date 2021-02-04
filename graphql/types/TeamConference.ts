import { objectType } from "nexus";

export const TeamConference = objectType({
  name: "TeamConference",
  definition(t) {
    t.model.id();
    t.model.season();
    t.model.conference();
    t.model.conferenceId();
    t.model.team();
    t.model.teamId();
  },
});
