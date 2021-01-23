import { objectType } from "nexus";

export const Linescore = objectType({
  name: "Linescore",
  definition(t) {
    t.model.id();
    t.model.gamePk();
    t.model.win();
    t.model.otWin();
    t.model.shootOutWin();
    t.model.loss();
    t.model.ot();
    t.model.isHomeGame();
    t.model.points();
    t.model.goalsFor();
    t.model.goalsAgainst();
    t.model.penaltyMinutes();
    t.model.shotsFor();
    t.model.shotsAgainst();
    t.model.powerPlayGoals();
    t.model.powerPlayGoalsAllowed();
    t.model.powerPlayOpportunities();
    t.model.powerPlayOpportunitiesAllowed();
    t.model.faceOffsTaken();
    t.model.faceOffWins();
    t.model.blocked();
    t.model.takeaways();
    t.model.giveaways();
    t.model.hitsFor();
    t.model.hitsAgainst();
    t.model.team();
    t.model.teamId();
    t.model.opponent();
    t.model.opponentId();
    t.model.game();
    t.model.gameId();
  },
});
