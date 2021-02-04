import { objectType } from "nexus";

export const Team = objectType({
  name: "Team",
  definition(t) {
    t.model.id();
    t.model.teamIdApi();
    t.model.link();
    t.model.siteLink();
    t.model.name();
    t.model.teamName();
    t.model.shortName();
    t.model.abbreviation();
    t.model.locationName();
    t.model.firstYearOfPlay();
    t.model.officialSiteUrl();
    t.model.twitterHashtag();
    t.model.activeSeasons();
    t.model.conferences();
    t.model.divisions();
    t.model.players();
    t.model.awayGames();
    t.model.homeGames();
    t.model.linescores();
    t.model.opponentLinescores();
    t.model.skaterBoxscores();
    t.model.goalieBoxscores();
    t.model.highlights();
    t.model.highlightsAgainst();
    t.model.highlightMeta();
  },
});
