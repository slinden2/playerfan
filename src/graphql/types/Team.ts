import { objectType } from "nexus";

export const Team = objectType({
  name: "Team",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("teamIdApi");
    t.nonNull.string("link");
    t.nonNull.string("siteLink");
    t.nonNull.string("name");
    t.nonNull.string("teamName");
    t.nonNull.string("shortName");
    t.nonNull.string("abbreviation");
    t.nonNull.string("locationName");
    t.nonNull.int("firstYearOfPlay");
    t.nonNull.string("officialSiteUrl");
    t.nonNull.string("twitterHashtag");
    t.nonNull.list.field("activeSeasons", {
      type: "TeamActiveSeasons",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .activeSeasons();
      },
    });
    t.nonNull.list.nonNull.field("conferences", {
      type: "TeamConference",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .conferences();
      },
    });
    t.nonNull.list.nonNull.field("divisions", {
      type: "TeamDivision",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .divisions();
      },
    });
    t.nonNull.list.nonNull.field("players", {
      type: "PlayerTeam",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .players();
      },
    });
    t.nonNull.list.nonNull.field("awayGames", {
      type: "Game",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .awayGames();
      },
    });
    t.nonNull.list.nonNull.field("homeGames", {
      type: "Game",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .homeGames();
      },
    });
    t.nonNull.list.field("linescores", {
      type: "Linescore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .linescores();
      },
    });
    t.nonNull.list.field("opponentLinescores", {
      type: "Linescore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .opponentLinescores();
      },
    });
    t.nonNull.list.field("skaterBoxscores", {
      type: "SkaterBoxscore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .skaterBoxscores();
      },
    });
    t.nonNull.list.field("goalieBoxscores", {
      type: "GoalieBoxscore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .goalieBoxscores();
      },
    });
    t.nonNull.list.field("highlights", {
      type: "Highlight",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .highlights();
      },
    });
    t.nonNull.list.field("highlightsAgainst", {
      type: "Highlight",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .highlightsAgainst();
      },
    });
    t.nonNull.list.field("highlightMeta", {
      type: "HighlightMeta",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.team
          .findUnique({
            where: { id: parent.id },
          })
          .highlightMeta();
      },
    });
  },
});
