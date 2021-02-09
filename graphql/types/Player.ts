import { enumType, objectType } from "nexus";

export const ShootsCatches = enumType({
  name: "ShootsCatches",
  members: ["L", "R"],
});

export const RosterStatus = enumType({
  name: "RosterStatus",
  members: ["N", "Y", "I"],
});

export const Position = enumType({
  name: "Position",
  members: ["L", "G", "D", "R", "C", "NA"],
});

export const Player = objectType({
  name: "Player",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("playerIdApi");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.int("primaryNumber");
    t.nonNull.string("link");
    t.nonNull.string("siteLink");
    t.nonNull.field("birthDate", { type: "DateTime" });
    t.nonNull.string("birthCity");
    t.string("birthStateProvince");
    t.nonNull.string("birthCountry");
    t.nonNull.string("nationality");
    t.nonNull.int("height");
    t.nonNull.int("weight");
    t.nonNull.boolean("alternateCaptain");
    t.nonNull.boolean("captain");
    t.nonNull.boolean("rookie");
    t.nonNull.field("shootsCatches", { type: "ShootsCatches" });
    t.nonNull.field("rosterStatus", { type: "RosterStatus" });
    t.nonNull.field("primaryPosition", { type: "Position" });
    t.nonNull.boolean("active");
    t.nonNull.list.nonNull.field("teams", {
      type: "PlayerTeam",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .teams();
      },
    });
    t.nonNull.list.field("skaterBoxscores", {
      type: "SkaterBoxscore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .skaterBoxscores();
      },
    });
    t.nonNull.list.field("goalieBoxscores", {
      type: "GoalieBoxscore",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .goalieBoxscores();
      },
    });
    t.nonNull.list.field("highlightMetaGoal", {
      type: "HighlightMeta",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .highlightMetaGoal();
      },
    });
    t.nonNull.list.field("highlightMetaAssist1", {
      type: "HighlightMeta",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .highlightMetaAssist1();
      },
    });
    t.nonNull.list.field("highlightMetaAssist2", {
      type: "HighlightMeta",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .highlightMetaAssist2();
      },
    });
    t.nonNull.list.field("highlightMetaGoalie", {
      type: "HighlightMeta",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .highlightMetaGoalie();
      },
    });
    t.nonNull.list.field("favoritedBy", {
      type: "User",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.player
          .findUnique({
            where: { id: parent.id },
          })
          .favoritedBy();
      },
    });
  },
});
