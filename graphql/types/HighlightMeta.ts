import { objectType } from "nexus";

export const HighlightMeta = objectType({
  name: "HighlightMeta",
  definition(t) {
    t.model.id();
    t.model.gamePk();
    t.model.eventIdxApi();
    t.model.eventIdApi();
    t.model.gameWinningGoal();
    t.model.emptyNet();
    t.model.type();
    t.model.shotType();
    t.model.periodType();
    t.model.periodTime();
    t.model.periodNumber();
    t.model.dateTime();
    t.model.coordX();
    t.model.coordY();
    t.model.hasVideo();
    t.model.scorer();
    t.model.scorerId();
    t.model.assist1();
    t.model.assist1Id();
    t.model.assist2();
    t.model.assist2Id();
    t.model.goalie();
    t.model.goalieId();
    t.model.team();
    t.model.teamId();
    t.model.highlight();
    t.model.highlightId();
  },
});
