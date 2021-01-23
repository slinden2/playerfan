import { objectType } from "nexus";

export const Game = objectType({
  name: "Game",
  definition(t) {
    t.model.id();
    t.model.gamePk();
    t.model.statusCode();
    t.model.liveLink();
    t.model.contentLink();
    t.model.gameDate();
    t.model.apiDate();
    t.model.gameType();
    t.model.awayScore();
    t.model.homeScore();
    t.model.boxscoresFetched();
    t.model.linescoresFetched();
    t.model.highlightsFetched();
    t.model.highlightMetaFetched();
    t.model.playbacksFetched();
    t.model.awayTeam();
    t.model.awayTeamId();
    t.model.homeTeam();
    t.model.homeTeamId();
    t.model.linescores();
    t.model.skaterBoxscores();
    t.model.goalieBoxscores();
    t.model.highlight();
  },
});
