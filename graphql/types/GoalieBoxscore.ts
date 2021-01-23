import { objectType } from "nexus";

export const GoalieBoxscore = objectType({
  name: "GoalieBoxscore",
  definition(t) {
    t.model.id();
    t.model.gamePk();
    t.model.timeOnIce();
    t.model.assists();
    t.model.goals();
    t.model.saves();
    t.model.powerPlaySaves();
    t.model.shortHandedSaves();
    t.model.evenSaves();
    t.model.shortHandedShotsAgainst();
    t.model.powerPlayShotsAgainst();
    t.model.decision();
    t.model.shotsAgainst();
    t.model.penaltyMinutes();
    t.model.savePct();
    t.model.powerPlaySavePct();
    t.model.shortHandedSavePct();
    t.model.evenSavePct();
    t.model.player();
    t.model.playerId();
    t.model.game();
    t.model.gameId();
    t.model.team();
    t.model.teamId();
  },
});
