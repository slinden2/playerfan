import { enumType, objectType } from "nexus";

export const Role = enumType({
  name: "Role",
  members: ["ADMIN", "MODERATOR", "USER"],
});

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.nonNull.field("updatedAt", { type: "DateTime" });
    t.nonNull.string("username");
    t.nonNull.string("usernameLower");
    t.nonNull.string("email");
    t.nonNull.boolean("isVerified");
    t.nonNull.field("role", { type: "Role" });
    t.nonNull.list.field("favoritePlayers", {
      type: "Player",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.user
          .findUnique({ where: { id: parent.id } })
          .favoritePlayers();
      },
    });
    t.nonNull.list.field("likedHighlights", {
      type: "Highlight",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.user
          .findUnique({ where: { id: parent.id } })
          .likedHighlights();
      },
    });
    t.nonNull.list.field("comments", {
      type: "Comment",
      resolve: async (parent, _, ctx) => {
        return await ctx.prisma.user
          .findUnique({ where: { id: parent.id } })
          .comments();
      },
    });
  },
});
