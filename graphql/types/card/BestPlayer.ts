import { enumType, inputObjectType, interfaceType } from "nexus";

export const StatSortFields = enumType({
  name: "StatSortFields",
  members: {
    // Skater / common
    ASSISTS: "assists",
    GOALS: "goals",
    POINTS: "points",
    SHOTS: "shots",
    HITS: "hits",
    PP_GOALS: "powerPlayGoals",
    PP_ASSISTS: "powerPlayAssists",
    PM: "penaltyMinutes",
    FO_TAKEN: "faceOffsTaken",
    FO_WINS: "faceOffWins",
    TAKEAWAYS: "takeaways",
    GIVEAWAYS: "giveaways",
    SH_GOALS: "shortHandedGoals",
    SH_ASSISTS: "shortHandedAssists",
    BLOCKED: "blocked",
    PLUSMINUS: "plusMinus",
    TON: "timeOnIce",
    EVEN_TON: "evenTimeOnIce",
    PP_TON: "powerPlayTimeOnIce",
    SH_TON: "shortHandedTimeOnIce",
    // Goalie
    SAVES: "saves",
    PP_SAVES: "powerPlaySaves",
    SH_SAVES: "shortHandedSaves",
    EVEN_SAVES: "evenSaves",
    SH_SH: "shortHandedShotsAgainst",
    PP_SH: "powerPlayShotsAgainst",
    SHOTSAGAINST: "shotsAgainst",
    SAVEPCT: "savePct",
    PP_SAVEPCT: "powerPlaySavePct",
    SH_SAVEPCT: "shortHandedSavePct",
    EVEN_SAVEPCT: "evenSavePct",
    WINS: "wins",
    LOSSES: "losses",
    SHUTOUTS: "shutouts",
    SAVE_PCT: "savePct",
    GAA: "goalsAgainstAverage",
    PP_SAVE_PCT: "powerPlaySavePct",
    SH_SAVE_PCT: "shortHandedSavePct",
    PP_SHOTS_AGAINST: "powerPlayShotsAgainst",
    SH_SHOTS_AGAINST: "shortHandedShotsAgainst",
    SAVES_PER_GAME: "savesPerGame",
    SHOTS_AGAINST_PER_GAME: "shotsAgainstPerGame",
    WIN_PCT: "winPct",
  },
});

export const PlayerCardInput = inputObjectType({
  name: "PlayerCardInput",
  definition(t) {
    t.nonNull.int("numOfGames", {
      default: 1,
      description: "Number of games considered in stat accumulation",
    });
    t.nonNull.int("take", {
      default: 50,
      description: "Total number of cards queried",
    });
    t.nonNull.field("sortBy", {
      type: "StatSortFields",
      description: "Primary sort column",
    });
  },
});

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
    t.nonNull.int("goals");
    t.nonNull.int("assists");
  },
});
