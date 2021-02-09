import { enumType, objectType } from "nexus";

export const HighlightType = enumType({
  name: "HighlightType",
  members: ["RECAP", "CONDENSED", "MILESTONE"],
});

export const Highlight = objectType({
  name: "Highlight",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("gamePk");
    t.nonNull.field("type", { type: "HighlightType" });
    t.nonNull.int("videoIdApi");
    t.nonNull.string("title");
    t.nonNull.string("blurb");
    t.nonNull.string("description");
    t.nonNull.int("duration");
    t.nonNull.int("mediaPlaybackIdApi");
    t.int("eventIdApi");
    t.nonNull.field("game", {
      type: "Game",
      resolve: async (parent, _, ctx) => {
        const game = await ctx.prisma.highlight
          .findUnique({
            where: { id: parent.id },
          })
          .game();

        if (!game) {
          throw new Error(`missing game relation: Comment ${parent.id}`);
        }

        return game;
      },
    });
    t.field("team", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.highlight
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(`missing team relation: Comment ${parent.id}`);
        }

        return team;
      },
    });
    t.field("opponent", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const opponent = await ctx.prisma.highlight
          .findUnique({
            where: { id: parent.id },
          })
          .opponent();

        if (!opponent) {
          throw new Error(`missing opponent relation: Comment ${parent.id}`);
        }

        return opponent;
      },
    });
    t.field("highlightMeta", {
      type: "HighlightMeta",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.highlight
          .findUnique({
            where: { id: parent.id },
          })
          .highlightMeta();
      },
    });
    t.nonNull.list.field("playbacks", {
      type: "Playback",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.highlight
          .findUnique({
            where: { id: parent.id },
          })
          .playbacks();
      },
    });
    t.nonNull.list.field("comments", {
      type: "Comment",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.highlight
          .findUnique({
            where: { id: parent.id },
          })
          .comments();
      },
    });
    t.nonNull.list.field("likedBy", {
      type: "User",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.highlight
          .findUnique({
            where: { id: parent.id },
          })
          .likedBy();
      },
    });
  },
});
