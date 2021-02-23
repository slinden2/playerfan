/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import * as custom from "./../graphql/sourceTypes/index"
import { Context } from "./../graphql/context"
import { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  CardInput: { // input type
    numOfGames: number; // Int!
    sortBy: NexusGenEnums['StatSortFields']; // StatSortFields!
    take: number; // Int!
  }
}

export interface NexusGenEnums {
  Decision: "L" | "W"
  GameType: "P" | "R"
  HighlightType: "CONDENSED" | "MILESTONE" | "RECAP"
  PeriodType: "OVERTIME" | "REGULAR" | "SHOOTOUT"
  Position: "C" | "D" | "G" | "L" | "NA" | "R"
  Role: "ADMIN" | "MODERATOR" | "USER"
  RosterStatus: "I" | "N" | "Y"
  ShootsCatches: "L" | "R"
  StatSortFields: "assists" | "blocked" | "evenSavePct" | "evenSaves" | "evenTimeOnIce" | "faceOffPct" | "faceOffsTaken" | "faceOffWins" | "goalsAgainstAverage" | "giveaways" | "goals" | "goalsAgainst" | "goalsFor" | "hits" | "hitsAgainstPerGame" | "hitsForPerGame" | "losses" | "otLosses" | "penaltyKillPct" | "plusMinus" | "penaltyMinutes" | "points" | "powerPlayAssists" | "powerPlayGoals" | "powerPlayPct" | "powerPlayPoints" | "powerPlaySavePct" | "powerPlaySaves" | "powerPlaySavePct" | "powerPlayShotsAgainst" | "powerPlayShotsAgainst" | "powerPlayTimeOnIce" | "savePct" | "saves" | "savesPerGame" | "savePct" | "shots" | "shotsAgainst" | "shotsAgainstPerGame" | "shotsForPerGame" | "shutouts" | "shortHandedAssists" | "shortHandedGoals" | "shortHandedPoints" | "shortHandedSavePct" | "shortHandedSaves" | "shortHandedSavePct" | "shortHandedShotsAgainst" | "shortHandedShotsAgainst" | "shortHandedTimes" | "shortHandedTimeOnIce" | "takeaways" | "timeOnIce" | "timeOnIcePerGame" | "wins" | "winPct"
  VideoDataType: "GOAL" | "SHOT"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  BestGoalie: custom.BestGoalie;
  BestSkater: custom.BestSkater;
  BestTeam: custom.BestTeam;
  Comment: { // root type
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: string; // String!
  }
  Conference: { // root type
    abbreviation: string; // String!
    conferenceIdApi: number; // Int!
    id: string; // String!
    link: string; // String!
    name: string; // String!
    shortName: string; // String!
  }
  ConferenceActiveSeasons: { // root type
    id: string; // String!
    season: string; // String!
  }
  Division: { // root type
    abbreviation: string; // String!
    divisionIdApi: number; // Int!
    id: string; // String!
    link: string; // String!
    name: string; // String!
    shortName: string; // String!
  }
  DivisionActiveSeasons: { // root type
    id: string; // String!
    season: string; // String!
  }
  DivisionConference: { // root type
    id: string; // String!
    season: string; // String!
  }
  Game: { // root type
    apiDate: NexusGenScalars['DateTime']; // DateTime!
    awayScore: number; // Int!
    boxscoresFetched: boolean; // Boolean!
    contentLink: string; // String!
    gameDate: NexusGenScalars['DateTime']; // DateTime!
    gamePk: number; // Int!
    gameType: NexusGenEnums['GameType']; // GameType!
    highlightMetaFetched: boolean; // Boolean!
    highlightsFetched: boolean; // Boolean!
    homeScore: number; // Int!
    id: string; // String!
    linescoresFetched: boolean; // Boolean!
    liveLink: string; // String!
    playbacksFetched: boolean; // Boolean!
    statusCode: number; // Int!
  }
  GoalieBoxscore: { // root type
    assists: number; // Int!
    decision?: NexusGenEnums['Decision'] | null; // Decision
    evenSavePct?: number | null; // Float
    evenSaves: number; // Int!
    gamePk: number; // Int!
    goals: number; // Int!
    id: string; // String!
    penaltyMinutes: number; // Int!
    powerPlaySavePct?: number | null; // Float
    powerPlaySaves: number; // Int!
    powerPlayShotsAgainst: number; // Int!
    savePct: number; // Float!
    saves: number; // Int!
    shortHandedSavePct?: number | null; // Float
    shortHandedSaves: number; // Int!
    shortHandedShotsAgainst: number; // Int!
    shotsAgainst: number; // Int!
    timeOnIce: number; // Int!
  }
  Highlight: { // root type
    blurb: string; // String!
    description: string; // String!
    duration: number; // Int!
    eventIdApi?: number | null; // Int
    gamePk: number; // Int!
    id: string; // String!
    mediaPlaybackIdApi: number; // Int!
    title: string; // String!
    type: NexusGenEnums['HighlightType']; // HighlightType!
    videoIdApi: number; // Int!
  }
  HighlightMeta: { // root type
    coordX: number; // Int!
    coordY: number; // Int!
    dateTime: NexusGenScalars['DateTime']; // DateTime!
    emptyNet: boolean; // Boolean!
    eventIdApi: number; // Int!
    eventIdxApi: number; // Int!
    gamePk: number; // Int!
    gameWinningGoal: boolean; // Boolean!
    hasVideo: boolean; // Boolean!
    id: string; // String!
    periodNumber: number; // Int!
    periodTime: number; // Int!
    periodType: NexusGenEnums['PeriodType']; // PeriodType!
    shotType: string; // String!
    type: NexusGenEnums['VideoDataType']; // VideoDataType!
  }
  Linescore: { // root type
    blocked: number; // Int!
    faceOffWins: number; // Int!
    faceOffsTaken: number; // Int!
    gamePk: number; // Int!
    giveaways: number; // Int!
    goalsAgainst: number; // Int!
    goalsFor: number; // Int!
    hitsAgainst: number; // Int!
    hitsFor: number; // Int!
    id: string; // String!
    isHomeGame: boolean; // Boolean!
    loss: boolean; // Boolean!
    ot: boolean; // Boolean!
    otWin: boolean; // Boolean!
    penaltyMinutes: number; // Int!
    points: number; // Int!
    powerPlayGoals: number; // Int!
    powerPlayGoalsAllowed: number; // Int!
    powerPlayOpportunities: number; // Int!
    powerPlayOpportunitiesAllowed: number; // Int!
    shootOutWin: boolean; // Boolean!
    shotsAgainst: number; // Int!
    shotsFor: number; // Int!
    takeaways: number; // Int!
    win: boolean; // Boolean!
  }
  Playback: { // root type
    id: string; // String!
    url: string; // String!
  }
  PlaybackType: { // root type
    height?: number | null; // Int
    id: string; // String!
    name: string; // String!
    width?: number | null; // Int
  }
  Player: { // root type
    active: boolean; // Boolean!
    alternateCaptain: boolean; // Boolean!
    birthCity: string; // String!
    birthCountry: string; // String!
    birthDate: NexusGenScalars['DateTime']; // DateTime!
    birthStateProvince?: string | null; // String
    captain: boolean; // Boolean!
    firstName: string; // String!
    height: number; // Int!
    id: string; // String!
    lastName: string; // String!
    link: string; // String!
    nationality: string; // String!
    playerIdApi: number; // Int!
    primaryNumber: number; // Int!
    primaryPosition: NexusGenEnums['Position']; // Position!
    rookie: boolean; // Boolean!
    rosterStatus: NexusGenEnums['RosterStatus']; // RosterStatus!
    shootsCatches: NexusGenEnums['ShootsCatches']; // ShootsCatches!
    siteLink: string; // String!
    weight: number; // Int!
  }
  PlayerTeam: { // root type
    endDate?: NexusGenScalars['DateTime'] | null; // DateTime
    id: string; // String!
    startDate: NexusGenScalars['DateTime']; // DateTime!
  }
  Query: {};
  SkaterBoxscore: { // root type
    assists: number; // Int!
    blocked: number; // Int!
    evenTimeOnIce: number; // Int!
    faceOffWins: number; // Int!
    faceOffsTaken: number; // Int!
    gamePk: number; // Int!
    giveaways: number; // Int!
    goals: number; // Int!
    hits: number; // Int!
    id: string; // String!
    penaltyMinutes: number; // Int!
    plusMinus: number; // Int!
    points: number; // Int!
    powerPlayAssists: number; // Int!
    powerPlayGoals: number; // Int!
    powerPlayTimeOnIce: number; // Int!
    shortHandedAssists: number; // Int!
    shortHandedGoals: number; // Int!
    shortHandedTimeOnIce: number; // Int!
    shots: number; // Int!
    takeaways: number; // Int!
    timeOnIce: number; // Int!
  }
  Team: { // root type
    abbreviation: string; // String!
    firstYearOfPlay: number; // Int!
    id: string; // String!
    link: string; // String!
    locationName: string; // String!
    name: string; // String!
    officialSiteUrl: string; // String!
    shortName: string; // String!
    siteLink: string; // String!
    teamIdApi: number; // Int!
    teamName: string; // String!
    twitterHashtag: string; // String!
  }
  TeamActiveSeasons: { // root type
    id: string; // String!
    season: string; // String!
  }
  TeamConference: { // root type
    id: string; // String!
    season: string; // String!
  }
  TeamDivision: { // root type
    id: string; // String!
    season: string; // String!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    id: string; // String!
    isVerified: boolean; // Boolean!
    role: NexusGenEnums['Role']; // Role!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    username: string; // String!
    usernameLower: string; // String!
  }
}

export interface NexusGenInterfaces {
  BestPlayer: custom.BestPlayer;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  BestGoalie: { // field return type
    assists: number; // Int!
    firstName: string; // String!
    gamePks: string[]; // [String!]!
    goals: number; // Int!
    goalsAgainstAverage: number; // Float!
    id: string; // ID!
    lastName: string; // String!
    losses: number; // Int!
    penaltyMinutes: number; // Int!
    playerSiteLink: string; // String!
    powerPlaySavePct: number | null; // Float
    powerPlayShotsAgainst: number | null; // Int
    primaryPosition: string; // String!
    savePct: number; // Float!
    savesPerGame: number; // Float!
    shortHandedSavePct: number | null; // Float
    shortHandedShotsAgainst: number | null; // Int
    shotsAgainstPerGame: number; // Float!
    shutouts: number; // Int!
    teamAbbreviation: string; // String!
    teamSiteLink: string; // String!
    winPct: number; // Float!
    wins: number; // Int!
  }
  BestSkater: { // field return type
    assists: number; // Int!
    blocked: number; // Int!
    faceOffPct: number | null; // Float
    faceOffsTaken: number; // Int!
    firstName: string; // String!
    gamePks: string[]; // [String!]!
    giveaways: number; // Int!
    goals: number; // Int!
    hits: number; // Int!
    id: string; // ID!
    lastName: string; // String!
    penaltyMinutes: number; // Int!
    playerSiteLink: string; // String!
    plusMinus: number; // Int!
    points: number; // Int!
    powerPlayGoals: number; // Int!
    powerPlayPoints: number; // Int!
    primaryPosition: string; // String!
    shortHandedGoals: number; // Int!
    shortHandedPoints: number; // Int!
    shots: number; // Int!
    takeaways: number; // Int!
    teamAbbreviation: string; // String!
    teamSiteLink: string; // String!
    timeOnIcePerGame: number; // Float!
  }
  BestTeam: { // field return type
    abbreviation: string; // String!
    awayRecord: string; // String!
    gamePks: string[]; // [String!]!
    giveaways: number; // Int!
    goalsAgainst: number; // Int!
    goalsFor: number; // Int!
    hitsAgainstPerGame: number; // Float!
    hitsForPerGame: number; // Float!
    homeRecord: string; // String!
    id: string; // ID!
    locationName: string; // String!
    losses: number; // Int!
    otLosses: number; // Int!
    penaltyKillPct: number; // Float!
    powerPlayGoals: number; // Int!
    powerPlayPct: number; // Float!
    shortHandedTimes: number; // Int!
    shotsAgainstPerGame: number; // Float!
    shotsForPerGame: number; // Float!
    siteLink: string; // String!
    takeaways: number; // Int!
    teamName: string; // String!
    wins: number; // Int!
  }
  Comment: { // field return type
    author: NexusGenRootTypes['User']; // User!
    content: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    highlight: NexusGenRootTypes['Highlight']; // Highlight!
    id: string; // String!
  }
  Conference: { // field return type
    abbreviation: string; // String!
    activeSeasons: NexusGenRootTypes['ConferenceActiveSeasons'][]; // [ConferenceActiveSeasons!]!
    conferenceIdApi: number; // Int!
    divisions: NexusGenRootTypes['DivisionConference'][]; // [DivisionConference!]!
    id: string; // String!
    link: string; // String!
    name: string; // String!
    shortName: string; // String!
    teams: NexusGenRootTypes['TeamConference'][]; // [TeamConference!]!
  }
  ConferenceActiveSeasons: { // field return type
    conference: NexusGenRootTypes['Conference']; // Conference!
    id: string; // String!
    season: string; // String!
  }
  Division: { // field return type
    abbreviation: string; // String!
    activeSeasons: NexusGenRootTypes['DivisionActiveSeasons'][]; // [DivisionActiveSeasons!]!
    conferences: NexusGenRootTypes['DivisionConference'][]; // [DivisionConference!]!
    divisionIdApi: number; // Int!
    id: string; // String!
    link: string; // String!
    name: string; // String!
    shortName: string; // String!
    teams: NexusGenRootTypes['TeamDivision'][]; // [TeamDivision!]!
  }
  DivisionActiveSeasons: { // field return type
    division: NexusGenRootTypes['Division']; // Division!
    id: string; // String!
    season: string; // String!
  }
  DivisionConference: { // field return type
    conference: NexusGenRootTypes['Conference']; // Conference!
    division: NexusGenRootTypes['Division']; // Division!
    id: string; // String!
    season: string; // String!
  }
  Game: { // field return type
    apiDate: NexusGenScalars['DateTime']; // DateTime!
    awayScore: number; // Int!
    awayTeam: NexusGenRootTypes['Team']; // Team!
    boxscoresFetched: boolean; // Boolean!
    contentLink: string; // String!
    gameDate: NexusGenScalars['DateTime']; // DateTime!
    gamePk: number; // Int!
    gameType: NexusGenEnums['GameType']; // GameType!
    goalieBoxscores: Array<NexusGenRootTypes['GoalieBoxscore'] | null>; // [GoalieBoxscore]!
    highlightMetaFetched: boolean; // Boolean!
    highlights: Array<NexusGenRootTypes['Highlight'] | null>; // [Highlight]!
    highlightsFetched: boolean; // Boolean!
    homeScore: number; // Int!
    homeTeam: NexusGenRootTypes['Team']; // Team!
    id: string; // String!
    linescores: Array<NexusGenRootTypes['Linescore'] | null>; // [Linescore]!
    linescoresFetched: boolean; // Boolean!
    liveLink: string; // String!
    playbacksFetched: boolean; // Boolean!
    skaterBoxscores: Array<NexusGenRootTypes['SkaterBoxscore'] | null>; // [SkaterBoxscore]!
    statusCode: number; // Int!
  }
  GoalieBoxscore: { // field return type
    assists: number; // Int!
    decision: NexusGenEnums['Decision'] | null; // Decision
    evenSavePct: number | null; // Float
    evenSaves: number; // Int!
    game: NexusGenRootTypes['Game']; // Game!
    gamePk: number; // Int!
    goals: number; // Int!
    id: string; // String!
    penaltyMinutes: number; // Int!
    player: NexusGenRootTypes['Player']; // Player!
    powerPlaySavePct: number | null; // Float
    powerPlaySaves: number; // Int!
    powerPlayShotsAgainst: number; // Int!
    savePct: number; // Float!
    saves: number; // Int!
    shortHandedSavePct: number | null; // Float
    shortHandedSaves: number; // Int!
    shortHandedShotsAgainst: number; // Int!
    shotsAgainst: number; // Int!
    team: NexusGenRootTypes['Team']; // Team!
    timeOnIce: number; // Int!
  }
  Highlight: { // field return type
    blurb: string; // String!
    comments: Array<NexusGenRootTypes['Comment'] | null>; // [Comment]!
    description: string; // String!
    duration: number; // Int!
    eventIdApi: number | null; // Int
    game: NexusGenRootTypes['Game']; // Game!
    gamePk: number; // Int!
    highlightMeta: NexusGenRootTypes['HighlightMeta'] | null; // HighlightMeta
    id: string; // String!
    likedBy: Array<NexusGenRootTypes['User'] | null>; // [User]!
    mediaPlaybackIdApi: number; // Int!
    opponent: NexusGenRootTypes['Team'] | null; // Team
    playbacks: Array<NexusGenRootTypes['Playback'] | null>; // [Playback]!
    team: NexusGenRootTypes['Team'] | null; // Team
    title: string; // String!
    type: NexusGenEnums['HighlightType']; // HighlightType!
    videoIdApi: number; // Int!
  }
  HighlightMeta: { // field return type
    assist1: NexusGenRootTypes['Player'] | null; // Player
    assist2: NexusGenRootTypes['Player'] | null; // Player
    coordX: number; // Int!
    coordY: number; // Int!
    dateTime: NexusGenScalars['DateTime']; // DateTime!
    emptyNet: boolean; // Boolean!
    eventIdApi: number; // Int!
    eventIdxApi: number; // Int!
    gamePk: number; // Int!
    gameWinningGoal: boolean; // Boolean!
    goalie: NexusGenRootTypes['Player'] | null; // Player
    hasVideo: boolean; // Boolean!
    highlight: NexusGenRootTypes['Highlight'] | null; // Highlight
    id: string; // String!
    periodNumber: number; // Int!
    periodTime: number; // Int!
    periodType: NexusGenEnums['PeriodType']; // PeriodType!
    scorer: NexusGenRootTypes['Player']; // Player!
    shotType: string; // String!
    team: NexusGenRootTypes['Team']; // Team!
    type: NexusGenEnums['VideoDataType']; // VideoDataType!
  }
  Linescore: { // field return type
    blocked: number; // Int!
    faceOffWins: number; // Int!
    faceOffsTaken: number; // Int!
    game: NexusGenRootTypes['Game']; // Game!
    gamePk: number; // Int!
    giveaways: number; // Int!
    goalsAgainst: number; // Int!
    goalsFor: number; // Int!
    hitsAgainst: number; // Int!
    hitsFor: number; // Int!
    id: string; // String!
    isHomeGame: boolean; // Boolean!
    loss: boolean; // Boolean!
    opponent: NexusGenRootTypes['Team']; // Team!
    ot: boolean; // Boolean!
    otWin: boolean; // Boolean!
    penaltyMinutes: number; // Int!
    points: number; // Int!
    powerPlayGoals: number; // Int!
    powerPlayGoalsAllowed: number; // Int!
    powerPlayOpportunities: number; // Int!
    powerPlayOpportunitiesAllowed: number; // Int!
    shootOutWin: boolean; // Boolean!
    shotsAgainst: number; // Int!
    shotsFor: number; // Int!
    takeaways: number; // Int!
    team: NexusGenRootTypes['Team']; // Team!
    win: boolean; // Boolean!
  }
  Playback: { // field return type
    highlight: NexusGenRootTypes['Highlight']; // Highlight!
    id: string; // String!
    type: NexusGenRootTypes['PlaybackType']; // PlaybackType!
    url: string; // String!
  }
  PlaybackType: { // field return type
    height: number | null; // Int
    id: string; // String!
    name: string; // String!
    playbacks: Array<NexusGenRootTypes['Playback'] | null>; // [Playback]!
    width: number | null; // Int
  }
  Player: { // field return type
    active: boolean; // Boolean!
    alternateCaptain: boolean; // Boolean!
    birthCity: string; // String!
    birthCountry: string; // String!
    birthDate: NexusGenScalars['DateTime']; // DateTime!
    birthStateProvince: string | null; // String
    captain: boolean; // Boolean!
    favoritedBy: Array<NexusGenRootTypes['User'] | null>; // [User]!
    firstName: string; // String!
    goalieBoxscores: Array<NexusGenRootTypes['GoalieBoxscore'] | null>; // [GoalieBoxscore]!
    height: number; // Int!
    highlightMetaAssist1: Array<NexusGenRootTypes['HighlightMeta'] | null>; // [HighlightMeta]!
    highlightMetaAssist2: Array<NexusGenRootTypes['HighlightMeta'] | null>; // [HighlightMeta]!
    highlightMetaGoal: Array<NexusGenRootTypes['HighlightMeta'] | null>; // [HighlightMeta]!
    highlightMetaGoalie: Array<NexusGenRootTypes['HighlightMeta'] | null>; // [HighlightMeta]!
    id: string; // String!
    lastName: string; // String!
    link: string; // String!
    nationality: string; // String!
    playerIdApi: number; // Int!
    primaryNumber: number; // Int!
    primaryPosition: NexusGenEnums['Position']; // Position!
    rookie: boolean; // Boolean!
    rosterStatus: NexusGenEnums['RosterStatus']; // RosterStatus!
    shootsCatches: NexusGenEnums['ShootsCatches']; // ShootsCatches!
    siteLink: string; // String!
    skaterBoxscores: Array<NexusGenRootTypes['SkaterBoxscore'] | null>; // [SkaterBoxscore]!
    teams: NexusGenRootTypes['PlayerTeam'][]; // [PlayerTeam!]!
    weight: number; // Int!
  }
  PlayerTeam: { // field return type
    endDate: NexusGenScalars['DateTime'] | null; // DateTime
    id: string; // String!
    player: NexusGenRootTypes['Player']; // Player!
    startDate: NexusGenScalars['DateTime']; // DateTime!
    team: NexusGenRootTypes['Team']; // Team!
  }
  Query: { // field return type
    allDivisions: Array<NexusGenRootTypes['Division'] | null>; // [Division]!
    bestGoalies: NexusGenRootTypes['BestGoalie'][]; // [BestGoalie!]!
    bestSkaters: NexusGenRootTypes['BestSkater'][]; // [BestSkater!]!
    bestTeams: NexusGenRootTypes['BestTeam'][]; // [BestTeam!]!
  }
  SkaterBoxscore: { // field return type
    assists: number; // Int!
    blocked: number; // Int!
    evenTimeOnIce: number; // Int!
    faceOffWins: number; // Int!
    faceOffsTaken: number; // Int!
    game: NexusGenRootTypes['Game']; // Game!
    gamePk: number; // Int!
    giveaways: number; // Int!
    goals: number; // Int!
    hits: number; // Int!
    id: string; // String!
    penaltyMinutes: number; // Int!
    player: NexusGenRootTypes['Player']; // Player!
    plusMinus: number; // Int!
    points: number; // Int!
    powerPlayAssists: number; // Int!
    powerPlayGoals: number; // Int!
    powerPlayTimeOnIce: number; // Int!
    shortHandedAssists: number; // Int!
    shortHandedGoals: number; // Int!
    shortHandedTimeOnIce: number; // Int!
    shots: number; // Int!
    takeaways: number; // Int!
    team: NexusGenRootTypes['Team']; // Team!
    timeOnIce: number; // Int!
  }
  Team: { // field return type
    abbreviation: string; // String!
    activeSeasons: Array<NexusGenRootTypes['TeamActiveSeasons'] | null>; // [TeamActiveSeasons]!
    awayGames: NexusGenRootTypes['Game'][]; // [Game!]!
    conferences: NexusGenRootTypes['TeamConference'][]; // [TeamConference!]!
    divisions: NexusGenRootTypes['TeamDivision'][]; // [TeamDivision!]!
    firstYearOfPlay: number; // Int!
    goalieBoxscores: Array<NexusGenRootTypes['GoalieBoxscore'] | null>; // [GoalieBoxscore]!
    highlightMeta: Array<NexusGenRootTypes['HighlightMeta'] | null>; // [HighlightMeta]!
    highlights: Array<NexusGenRootTypes['Highlight'] | null>; // [Highlight]!
    highlightsAgainst: Array<NexusGenRootTypes['Highlight'] | null>; // [Highlight]!
    homeGames: NexusGenRootTypes['Game'][]; // [Game!]!
    id: string; // String!
    linescores: Array<NexusGenRootTypes['Linescore'] | null>; // [Linescore]!
    link: string; // String!
    locationName: string; // String!
    name: string; // String!
    officialSiteUrl: string; // String!
    opponentLinescores: Array<NexusGenRootTypes['Linescore'] | null>; // [Linescore]!
    players: NexusGenRootTypes['PlayerTeam'][]; // [PlayerTeam!]!
    shortName: string; // String!
    siteLink: string; // String!
    skaterBoxscores: Array<NexusGenRootTypes['SkaterBoxscore'] | null>; // [SkaterBoxscore]!
    teamIdApi: number; // Int!
    teamName: string; // String!
    twitterHashtag: string; // String!
  }
  TeamActiveSeasons: { // field return type
    id: string; // String!
    season: string; // String!
    team: NexusGenRootTypes['Team']; // Team!
  }
  TeamConference: { // field return type
    conference: NexusGenRootTypes['Conference']; // Conference!
    id: string; // String!
    season: string; // String!
    team: NexusGenRootTypes['Team']; // Team!
  }
  TeamDivision: { // field return type
    division: NexusGenRootTypes['Division']; // Division!
    id: string; // String!
    season: string; // String!
    team: NexusGenRootTypes['Team']; // Team!
  }
  User: { // field return type
    comments: Array<NexusGenRootTypes['Comment'] | null>; // [Comment]!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    email: string; // String!
    favoritePlayers: Array<NexusGenRootTypes['Player'] | null>; // [Player]!
    id: string; // String!
    isVerified: boolean; // Boolean!
    likedHighlights: Array<NexusGenRootTypes['Highlight'] | null>; // [Highlight]!
    role: NexusGenEnums['Role']; // Role!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
    username: string; // String!
    usernameLower: string; // String!
  }
  BestPlayer: { // field return type
    firstName: string; // String!
    id: string; // ID!
    lastName: string; // String!
    playerSiteLink: string; // String!
    primaryPosition: string; // String!
    teamAbbreviation: string; // String!
    teamSiteLink: string; // String!
  }
}

export interface NexusGenFieldTypeNames {
  BestGoalie: { // field return type name
    assists: 'Int'
    firstName: 'String'
    gamePks: 'String'
    goals: 'Int'
    goalsAgainstAverage: 'Float'
    id: 'ID'
    lastName: 'String'
    losses: 'Int'
    penaltyMinutes: 'Int'
    playerSiteLink: 'String'
    powerPlaySavePct: 'Float'
    powerPlayShotsAgainst: 'Int'
    primaryPosition: 'String'
    savePct: 'Float'
    savesPerGame: 'Float'
    shortHandedSavePct: 'Float'
    shortHandedShotsAgainst: 'Int'
    shotsAgainstPerGame: 'Float'
    shutouts: 'Int'
    teamAbbreviation: 'String'
    teamSiteLink: 'String'
    winPct: 'Float'
    wins: 'Int'
  }
  BestSkater: { // field return type name
    assists: 'Int'
    blocked: 'Int'
    faceOffPct: 'Float'
    faceOffsTaken: 'Int'
    firstName: 'String'
    gamePks: 'String'
    giveaways: 'Int'
    goals: 'Int'
    hits: 'Int'
    id: 'ID'
    lastName: 'String'
    penaltyMinutes: 'Int'
    playerSiteLink: 'String'
    plusMinus: 'Int'
    points: 'Int'
    powerPlayGoals: 'Int'
    powerPlayPoints: 'Int'
    primaryPosition: 'String'
    shortHandedGoals: 'Int'
    shortHandedPoints: 'Int'
    shots: 'Int'
    takeaways: 'Int'
    teamAbbreviation: 'String'
    teamSiteLink: 'String'
    timeOnIcePerGame: 'Float'
  }
  BestTeam: { // field return type name
    abbreviation: 'String'
    awayRecord: 'String'
    gamePks: 'String'
    giveaways: 'Int'
    goalsAgainst: 'Int'
    goalsFor: 'Int'
    hitsAgainstPerGame: 'Float'
    hitsForPerGame: 'Float'
    homeRecord: 'String'
    id: 'ID'
    locationName: 'String'
    losses: 'Int'
    otLosses: 'Int'
    penaltyKillPct: 'Float'
    powerPlayGoals: 'Int'
    powerPlayPct: 'Float'
    shortHandedTimes: 'Int'
    shotsAgainstPerGame: 'Float'
    shotsForPerGame: 'Float'
    siteLink: 'String'
    takeaways: 'Int'
    teamName: 'String'
    wins: 'Int'
  }
  Comment: { // field return type name
    author: 'User'
    content: 'String'
    createdAt: 'DateTime'
    highlight: 'Highlight'
    id: 'String'
  }
  Conference: { // field return type name
    abbreviation: 'String'
    activeSeasons: 'ConferenceActiveSeasons'
    conferenceIdApi: 'Int'
    divisions: 'DivisionConference'
    id: 'String'
    link: 'String'
    name: 'String'
    shortName: 'String'
    teams: 'TeamConference'
  }
  ConferenceActiveSeasons: { // field return type name
    conference: 'Conference'
    id: 'String'
    season: 'String'
  }
  Division: { // field return type name
    abbreviation: 'String'
    activeSeasons: 'DivisionActiveSeasons'
    conferences: 'DivisionConference'
    divisionIdApi: 'Int'
    id: 'String'
    link: 'String'
    name: 'String'
    shortName: 'String'
    teams: 'TeamDivision'
  }
  DivisionActiveSeasons: { // field return type name
    division: 'Division'
    id: 'String'
    season: 'String'
  }
  DivisionConference: { // field return type name
    conference: 'Conference'
    division: 'Division'
    id: 'String'
    season: 'String'
  }
  Game: { // field return type name
    apiDate: 'DateTime'
    awayScore: 'Int'
    awayTeam: 'Team'
    boxscoresFetched: 'Boolean'
    contentLink: 'String'
    gameDate: 'DateTime'
    gamePk: 'Int'
    gameType: 'GameType'
    goalieBoxscores: 'GoalieBoxscore'
    highlightMetaFetched: 'Boolean'
    highlights: 'Highlight'
    highlightsFetched: 'Boolean'
    homeScore: 'Int'
    homeTeam: 'Team'
    id: 'String'
    linescores: 'Linescore'
    linescoresFetched: 'Boolean'
    liveLink: 'String'
    playbacksFetched: 'Boolean'
    skaterBoxscores: 'SkaterBoxscore'
    statusCode: 'Int'
  }
  GoalieBoxscore: { // field return type name
    assists: 'Int'
    decision: 'Decision'
    evenSavePct: 'Float'
    evenSaves: 'Int'
    game: 'Game'
    gamePk: 'Int'
    goals: 'Int'
    id: 'String'
    penaltyMinutes: 'Int'
    player: 'Player'
    powerPlaySavePct: 'Float'
    powerPlaySaves: 'Int'
    powerPlayShotsAgainst: 'Int'
    savePct: 'Float'
    saves: 'Int'
    shortHandedSavePct: 'Float'
    shortHandedSaves: 'Int'
    shortHandedShotsAgainst: 'Int'
    shotsAgainst: 'Int'
    team: 'Team'
    timeOnIce: 'Int'
  }
  Highlight: { // field return type name
    blurb: 'String'
    comments: 'Comment'
    description: 'String'
    duration: 'Int'
    eventIdApi: 'Int'
    game: 'Game'
    gamePk: 'Int'
    highlightMeta: 'HighlightMeta'
    id: 'String'
    likedBy: 'User'
    mediaPlaybackIdApi: 'Int'
    opponent: 'Team'
    playbacks: 'Playback'
    team: 'Team'
    title: 'String'
    type: 'HighlightType'
    videoIdApi: 'Int'
  }
  HighlightMeta: { // field return type name
    assist1: 'Player'
    assist2: 'Player'
    coordX: 'Int'
    coordY: 'Int'
    dateTime: 'DateTime'
    emptyNet: 'Boolean'
    eventIdApi: 'Int'
    eventIdxApi: 'Int'
    gamePk: 'Int'
    gameWinningGoal: 'Boolean'
    goalie: 'Player'
    hasVideo: 'Boolean'
    highlight: 'Highlight'
    id: 'String'
    periodNumber: 'Int'
    periodTime: 'Int'
    periodType: 'PeriodType'
    scorer: 'Player'
    shotType: 'String'
    team: 'Team'
    type: 'VideoDataType'
  }
  Linescore: { // field return type name
    blocked: 'Int'
    faceOffWins: 'Int'
    faceOffsTaken: 'Int'
    game: 'Game'
    gamePk: 'Int'
    giveaways: 'Int'
    goalsAgainst: 'Int'
    goalsFor: 'Int'
    hitsAgainst: 'Int'
    hitsFor: 'Int'
    id: 'String'
    isHomeGame: 'Boolean'
    loss: 'Boolean'
    opponent: 'Team'
    ot: 'Boolean'
    otWin: 'Boolean'
    penaltyMinutes: 'Int'
    points: 'Int'
    powerPlayGoals: 'Int'
    powerPlayGoalsAllowed: 'Int'
    powerPlayOpportunities: 'Int'
    powerPlayOpportunitiesAllowed: 'Int'
    shootOutWin: 'Boolean'
    shotsAgainst: 'Int'
    shotsFor: 'Int'
    takeaways: 'Int'
    team: 'Team'
    win: 'Boolean'
  }
  Playback: { // field return type name
    highlight: 'Highlight'
    id: 'String'
    type: 'PlaybackType'
    url: 'String'
  }
  PlaybackType: { // field return type name
    height: 'Int'
    id: 'String'
    name: 'String'
    playbacks: 'Playback'
    width: 'Int'
  }
  Player: { // field return type name
    active: 'Boolean'
    alternateCaptain: 'Boolean'
    birthCity: 'String'
    birthCountry: 'String'
    birthDate: 'DateTime'
    birthStateProvince: 'String'
    captain: 'Boolean'
    favoritedBy: 'User'
    firstName: 'String'
    goalieBoxscores: 'GoalieBoxscore'
    height: 'Int'
    highlightMetaAssist1: 'HighlightMeta'
    highlightMetaAssist2: 'HighlightMeta'
    highlightMetaGoal: 'HighlightMeta'
    highlightMetaGoalie: 'HighlightMeta'
    id: 'String'
    lastName: 'String'
    link: 'String'
    nationality: 'String'
    playerIdApi: 'Int'
    primaryNumber: 'Int'
    primaryPosition: 'Position'
    rookie: 'Boolean'
    rosterStatus: 'RosterStatus'
    shootsCatches: 'ShootsCatches'
    siteLink: 'String'
    skaterBoxscores: 'SkaterBoxscore'
    teams: 'PlayerTeam'
    weight: 'Int'
  }
  PlayerTeam: { // field return type name
    endDate: 'DateTime'
    id: 'String'
    player: 'Player'
    startDate: 'DateTime'
    team: 'Team'
  }
  Query: { // field return type name
    allDivisions: 'Division'
    bestGoalies: 'BestGoalie'
    bestSkaters: 'BestSkater'
    bestTeams: 'BestTeam'
  }
  SkaterBoxscore: { // field return type name
    assists: 'Int'
    blocked: 'Int'
    evenTimeOnIce: 'Int'
    faceOffWins: 'Int'
    faceOffsTaken: 'Int'
    game: 'Game'
    gamePk: 'Int'
    giveaways: 'Int'
    goals: 'Int'
    hits: 'Int'
    id: 'String'
    penaltyMinutes: 'Int'
    player: 'Player'
    plusMinus: 'Int'
    points: 'Int'
    powerPlayAssists: 'Int'
    powerPlayGoals: 'Int'
    powerPlayTimeOnIce: 'Int'
    shortHandedAssists: 'Int'
    shortHandedGoals: 'Int'
    shortHandedTimeOnIce: 'Int'
    shots: 'Int'
    takeaways: 'Int'
    team: 'Team'
    timeOnIce: 'Int'
  }
  Team: { // field return type name
    abbreviation: 'String'
    activeSeasons: 'TeamActiveSeasons'
    awayGames: 'Game'
    conferences: 'TeamConference'
    divisions: 'TeamDivision'
    firstYearOfPlay: 'Int'
    goalieBoxscores: 'GoalieBoxscore'
    highlightMeta: 'HighlightMeta'
    highlights: 'Highlight'
    highlightsAgainst: 'Highlight'
    homeGames: 'Game'
    id: 'String'
    linescores: 'Linescore'
    link: 'String'
    locationName: 'String'
    name: 'String'
    officialSiteUrl: 'String'
    opponentLinescores: 'Linescore'
    players: 'PlayerTeam'
    shortName: 'String'
    siteLink: 'String'
    skaterBoxscores: 'SkaterBoxscore'
    teamIdApi: 'Int'
    teamName: 'String'
    twitterHashtag: 'String'
  }
  TeamActiveSeasons: { // field return type name
    id: 'String'
    season: 'String'
    team: 'Team'
  }
  TeamConference: { // field return type name
    conference: 'Conference'
    id: 'String'
    season: 'String'
    team: 'Team'
  }
  TeamDivision: { // field return type name
    division: 'Division'
    id: 'String'
    season: 'String'
    team: 'Team'
  }
  User: { // field return type name
    comments: 'Comment'
    createdAt: 'DateTime'
    email: 'String'
    favoritePlayers: 'Player'
    id: 'String'
    isVerified: 'Boolean'
    likedHighlights: 'Highlight'
    role: 'Role'
    updatedAt: 'DateTime'
    username: 'String'
    usernameLower: 'String'
  }
  BestPlayer: { // field return type name
    firstName: 'String'
    id: 'ID'
    lastName: 'String'
    playerSiteLink: 'String'
    primaryPosition: 'String'
    teamAbbreviation: 'String'
    teamSiteLink: 'String'
  }
}

export interface NexusGenArgTypes {
  Query: {
    bestGoalies: { // args
      input: NexusGenInputs['CardInput']; // CardInput!
    }
    bestSkaters: { // args
      input: NexusGenInputs['CardInput']; // CardInput!
    }
    bestTeams: { // args
      input: NexusGenInputs['CardInput']; // CardInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  BestPlayer: "BestGoalie" | "BestSkater"
}

export interface NexusGenTypeInterfaces {
  BestGoalie: "BestPlayer"
  BestSkater: "BestPlayer"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = "BestGoalie" | "BestSkater" | "BestTeam";

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: false
    isTypeOf: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}