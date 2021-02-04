import { objectType } from "nexus";

export const DivisionConference = objectType({
  name: "DivisionConference",
  definition(t) {
    t.model.id();
    t.model.season();
    t.model.conference();
    t.model.conferenceId();
    t.model.division();
    t.model.divisionId();
  },
});
