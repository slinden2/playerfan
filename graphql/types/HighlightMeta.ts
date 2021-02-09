import { enumType, objectType } from "nexus";

export const VideoDataType = enumType({
  name: "VideoDataType",
  members: ["GOAL", "SHOT"],
});

export const PeriodType = enumType({
  name: "PeriodType",
  members: ["REGULAR", "OVERTIME", "SHOOTOUT"],
});

export const HighlightMeta = objectType({
  name: "HighlightMeta",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.int("gamePk");
    t.nonNull.int("eventIdxApi");
    t.nonNull.int("eventIdApi");
    t.nonNull.boolean("gameWinningGoal");
    t.nonNull.boolean("emptyNet");
    t.nonNull.field("type", { type: "VideoDataType" });
    t.nonNull.string("shotType");
    t.nonNull.field("periodType", { type: "PeriodType" });
    t.nonNull.int("periodTime");
    t.nonNull.int("periodNumber");
    t.nonNull.field("dateTime", { type: "DateTime" });
    t.nonNull.int("coordX");
    t.nonNull.int("coordY");
    t.nonNull.boolean("hasVideo");
    t.nonNull.field("scorer", {
      type: "Player",
      resolve: async (parent, _, ctx) => {
        const scorer = await ctx.prisma.highlightMeta
          .findUnique({
            where: { id: parent.id },
          })
          .scorer();

        if (!scorer) {
          throw new Error(
            `missing scorer relation: HighlightMeta ${parent.id}`
          );
        }

        return scorer;
      },
    });
    t.field("assist1", {
      type: "Player",
      resolve: async (parent, _, ctx) => {
        const assist1 = await ctx.prisma.highlightMeta
          .findUnique({
            where: { id: parent.id },
          })
          .assist1();

        return assist1;
      },
    });
    t.field("assist2", {
      type: "Player",
      resolve: async (parent, _, ctx) => {
        const assist2 = await ctx.prisma.highlightMeta
          .findUnique({
            where: { id: parent.id },
          })
          .assist2();

        return assist2;
      },
    });
    t.field("goalie", {
      type: "Player",
      resolve: async (parent, _, ctx) => {
        const goalie = await ctx.prisma.highlightMeta
          .findUnique({
            where: { id: parent.id },
          })
          .goalie();

        return goalie;
      },
    });
    t.nonNull.field("team", {
      type: "Team",
      resolve: async (parent, _, ctx) => {
        const team = await ctx.prisma.highlightMeta
          .findUnique({
            where: { id: parent.id },
          })
          .team();

        if (!team) {
          throw new Error(`missing team relation: HighlightMeta ${parent.id}`);
        }

        return team;
      },
    });
    t.field("highlight", {
      type: "Highlight",
      resolve: async (parent, _, ctx) => {
        const highlight = await ctx.prisma.highlightMeta
          .findUnique({
            where: { id: parent.id },
          })
          .highlight();

        return highlight;
      },
    });
  },
});
