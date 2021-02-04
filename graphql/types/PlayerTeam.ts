import { objectType } from "nexus";

export const PlayerTeam = objectType({
  name: "PlayerTeam",
  definition(t) {
    t.model.id();
    t.model.startDate();
    t.model.endDate();
    t.model.team();
    t.model.teamId();
    t.model.player();
    t.model.playerId();
  },
});
