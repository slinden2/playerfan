import { enumType, inputObjectType } from "nexus";

// TODO Each type need their own enum
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
    PP_POINTS: "powerPlayPoints",
    PM: "penaltyMinutes",
    FO_TAKEN: "faceOffsTaken",
    FO_WINS: "faceOffWins",
    FO_PCT: "faceOffPct",
    TAKEAWAYS: "takeaways",
    GIVEAWAYS: "giveaways",
    SH_GOALS: "shortHandedGoals",
    SH_ASSISTS: "shortHandedAssists",
    SH_POINTS: "shortHandedPoints",
    BLOCKED: "blocked",
    PLUSMINUS: "plusMinus",
    TON: "timeOnIce",
    TON_PER_GAME: "timeOnIcePerGame",
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
    // Team
    OT_LOSSES: "otLosses",
    GOALS_FOR: "goalsFor",
    GOALS_AGAINST: "goalsAgainst",
    PP_PCT: "powerPlayPct",
    SH_TIMES: "shortHandedTimes",
    PK_PCT: "penaltyKillPct",
    SHOTS_FOR_PER_GAME: "shotsForPerGame",
    HITS_FOR_PER_GAME: "hitsForPerGame",
    HITS_AGAINST_PER_GAME: "hitsAgainstPerGame",
  },
});

export const CardInput = inputObjectType({
  name: "CardInput",
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
