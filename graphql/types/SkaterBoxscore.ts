import { objectType } from "nexus";

export const SkaterBoxscore = objectType({
  name: "SkaterBoxscore",
  definition(t) {
    t.model.id();
    t.model.gamePk();
    t.model.assists();
    t.model.goals();
    t.model.points();
    t.model.shots();
    t.model.hits();
    t.model.powerPlayGoals();
    t.model.powerPlayAssists();
    t.model.penaltyMinutes();
    t.model.faceOffsTaken();
    t.model.faceOffWins();
    t.model.takeaways();
    t.model.giveaways();
    t.model.shortHandedGoals();
    t.model.shortHandedAssists();
    t.model.blocked();
    t.model.plusMinus();
    t.model.timeOnIce();
    t.model.evenTimeOnIce();
    t.model.powerPlayTimeOnIce();
    t.model.shortHandedTimeOnIce();
    t.model.player();
    t.model.playerId();
    t.model.game();
    t.model.gameId();
    t.model.team();
    t.model.teamId();
  },
});
