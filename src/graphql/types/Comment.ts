import { objectType } from "nexus";

export const Comment = objectType({
  name: "Comment",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.field("createdAt", { type: "DateTime" });
    t.nonNull.string("content");
    t.nonNull.field("highlight", {
      type: "Highlight",
      resolve: async (parent, _, ctx) => {
        const hl = await ctx.prisma.comment
          .findUnique({ where: { id: parent.id } })
          .highlight();

        if (!hl) {
          throw new Error(`missing highlight relation: Comment ${parent.id}`);
        }

        return hl;
      },
    });
    t.nonNull.field("author", {
      type: "User",
      resolve: async (parent, _, ctx) => {
        const author = await ctx.prisma.comment
          .findUnique({
            where: { id: parent.id },
          })
          .author();

        if (!author) {
          throw new Error(`missing author relation: Comment ${parent.id}`);
        }

        return author;
      },
    });
  },
});
