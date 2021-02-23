import { interfaceType } from "nexus";

export const BestPlayer = interfaceType({
  name: "BestPlayer",
  description: "Card meta data such as player name, team etc",
  definition(t) {
    t.nonNull.id("id", { description: "CUID of the resource" });
    t.nonNull.string("firstName", { description: "First name of the player" });
    t.nonNull.string("lastName", { description: "Last name of the player" });
    t.nonNull.string("playerSiteLink", {
      description: "Link to player profile",
    });
    t.nonNull.string("primaryPosition", { description: "Player position" });
    t.nonNull.string("teamAbbreviation", {
      description: "Abbreviated three-letter team id",
    });
    t.nonNull.string("teamSiteLink", { description: "Link to team profile" });
  },
});
