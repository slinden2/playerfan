import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};

export enum Role {
  Admin = "ADMIN",
  Moderator = "MODERATOR",
  User = "USER",
}

export type User = {
  __typename?: "User";
  id: Scalars["String"];
  createdAt: Scalars["DateTime"];
  updatedAt: Scalars["DateTime"];
  username: Scalars["String"];
  usernameLower: Scalars["String"];
  email: Scalars["String"];
  isVerified: Scalars["Boolean"];
  role: Role;
  favoritePlayers: Array<Maybe<Player>>;
  likedHighlights: Array<Maybe<Highlight>>;
  comments: Array<Maybe<Comment>>;
};

export type Conference = {
  __typename?: "Conference";
  id: Scalars["String"];
  conferenceIdApi: Scalars["Int"];
  link: Scalars["String"];
  name: Scalars["String"];
  shortName: Scalars["String"];
  abbreviation: Scalars["String"];
  activeSeasons: Array<ConferenceActiveSeasons>;
  divisions: Array<DivisionConference>;
  teams: Array<TeamConference>;
};

export type ConferenceActiveSeasons = {
  __typename?: "ConferenceActiveSeasons";
  id: Scalars["String"];
  season: Scalars["String"];
  conference: Conference;
};

export type Division = {
  __typename?: "Division";
  id: Scalars["String"];
  divisionIdApi: Scalars["Int"];
  link: Scalars["String"];
  name: Scalars["String"];
  shortName: Scalars["String"];
  abbreviation: Scalars["String"];
  activeSeasons: Array<DivisionActiveSeasons>;
  conferences: Array<DivisionConference>;
  teams: Array<TeamDivision>;
};

export type DivisionActiveSeasons = {
  __typename?: "DivisionActiveSeasons";
  id: Scalars["String"];
  season: Scalars["String"];
  division: Division;
};

export type DivisionConference = {
  __typename?: "DivisionConference";
  id: Scalars["String"];
  season: Scalars["String"];
  conference: Conference;
  division: Division;
};

export type Team = {
  __typename?: "Team";
  id: Scalars["String"];
  teamIdApi: Scalars["Int"];
  link: Scalars["String"];
  siteLink: Scalars["String"];
  name: Scalars["String"];
  teamName: Scalars["String"];
  shortName: Scalars["String"];
  abbreviation: Scalars["String"];
  locationName: Scalars["String"];
  firstYearOfPlay: Scalars["Int"];
  officialSiteUrl: Scalars["String"];
  twitterHashtag: Scalars["String"];
  activeSeasons: Array<Maybe<TeamActiveSeasons>>;
  conferences: Array<TeamConference>;
  divisions: Array<TeamDivision>;
  players: Array<PlayerTeam>;
  awayGames: Array<Game>;
  homeGames: Array<Game>;
  linescores: Array<Maybe<Linescore>>;
  opponentLinescores: Array<Maybe<Linescore>>;
  skaterBoxscores: Array<Maybe<SkaterBoxscore>>;
  goalieBoxscores: Array<Maybe<GoalieBoxscore>>;
  highlights: Array<Maybe<Highlight>>;
  highlightsAgainst: Array<Maybe<Highlight>>;
  highlightMeta: Array<Maybe<HighlightMeta>>;
};

export type TeamActiveSeasons = {
  __typename?: "TeamActiveSeasons";
  id: Scalars["String"];
  season: Scalars["String"];
  team: Team;
};

export type TeamConference = {
  __typename?: "TeamConference";
  id: Scalars["String"];
  season: Scalars["String"];
  conference: Conference;
  team: Team;
};

export type TeamDivision = {
  __typename?: "TeamDivision";
  id: Scalars["String"];
  season: Scalars["String"];
  division: Division;
  team: Team;
};

export enum ShootsCatches {
  L = "L",
  R = "R",
}

export enum RosterStatus {
  N = "N",
  Y = "Y",
  I = "I",
}

export enum Position {
  L = "L",
  G = "G",
  D = "D",
  R = "R",
  C = "C",
  Na = "NA",
}

export type Player = {
  __typename?: "Player";
  id: Scalars["String"];
  playerIdApi: Scalars["Int"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  primaryNumber: Scalars["Int"];
  link: Scalars["String"];
  siteLink: Scalars["String"];
  birthDate: Scalars["DateTime"];
  birthCity: Scalars["String"];
  birthStateProvince?: Maybe<Scalars["String"]>;
  birthCountry: Scalars["String"];
  nationality: Scalars["String"];
  height: Scalars["Int"];
  weight: Scalars["Int"];
  alternateCaptain: Scalars["Boolean"];
  captain: Scalars["Boolean"];
  rookie: Scalars["Boolean"];
  shootsCatches: ShootsCatches;
  rosterStatus: RosterStatus;
  primaryPosition: Position;
  active: Scalars["Boolean"];
  teams: Array<PlayerTeam>;
  skaterBoxscores: Array<Maybe<SkaterBoxscore>>;
  goalieBoxscores: Array<Maybe<GoalieBoxscore>>;
  highlightMetaGoal: Array<Maybe<HighlightMeta>>;
  highlightMetaAssist1: Array<Maybe<HighlightMeta>>;
  highlightMetaAssist2: Array<Maybe<HighlightMeta>>;
  highlightMetaGoalie: Array<Maybe<HighlightMeta>>;
  favoritedBy: Array<Maybe<User>>;
};

export type PlayerTeam = {
  __typename?: "PlayerTeam";
  id: Scalars["String"];
  startDate: Scalars["DateTime"];
  endDate?: Maybe<Scalars["DateTime"]>;
  team: Team;
  player: Player;
};

export enum GameType {
  R = "R",
  P = "P",
}

export type Game = {
  __typename?: "Game";
  id: Scalars["String"];
  gamePk: Scalars["Int"];
  statusCode: Scalars["Int"];
  liveLink: Scalars["String"];
  contentLink: Scalars["String"];
  gameDate: Scalars["DateTime"];
  apiDate: Scalars["DateTime"];
  gameType: GameType;
  awayScore: Scalars["Int"];
  homeScore: Scalars["Int"];
  boxscoresFetched: Scalars["Boolean"];
  linescoresFetched: Scalars["Boolean"];
  highlightsFetched: Scalars["Boolean"];
  highlightMetaFetched: Scalars["Boolean"];
  playbacksFetched: Scalars["Boolean"];
  awayTeam: Team;
  homeTeam: Team;
  linescores: Array<Maybe<Linescore>>;
  skaterBoxscores: Array<Maybe<SkaterBoxscore>>;
  goalieBoxscores: Array<Maybe<GoalieBoxscore>>;
  highlights: Array<Maybe<Highlight>>;
};

export type Linescore = {
  __typename?: "Linescore";
  id: Scalars["String"];
  gamePk: Scalars["Int"];
  win: Scalars["Boolean"];
  otWin: Scalars["Boolean"];
  shootOutWin: Scalars["Boolean"];
  loss: Scalars["Boolean"];
  ot: Scalars["Boolean"];
  isHomeGame: Scalars["Boolean"];
  points: Scalars["Int"];
  goalsFor: Scalars["Int"];
  goalsAgainst: Scalars["Int"];
  penaltyMinutes: Scalars["Int"];
  shotsFor: Scalars["Int"];
  shotsAgainst: Scalars["Int"];
  powerPlayGoals: Scalars["Int"];
  powerPlayGoalsAllowed: Scalars["Int"];
  powerPlayOpportunities: Scalars["Int"];
  powerPlayOpportunitiesAllowed: Scalars["Int"];
  faceOffsTaken: Scalars["Int"];
  faceOffWins: Scalars["Int"];
  blocked: Scalars["Int"];
  takeaways: Scalars["Int"];
  giveaways: Scalars["Int"];
  hitsFor: Scalars["Int"];
  hitsAgainst: Scalars["Int"];
  team: Team;
  opponent: Team;
  game: Game;
};

export type SkaterBoxscore = {
  __typename?: "SkaterBoxscore";
  id: Scalars["String"];
  gamePk: Scalars["Int"];
  assists: Scalars["Int"];
  goals: Scalars["Int"];
  points: Scalars["Int"];
  shots: Scalars["Int"];
  hits: Scalars["Int"];
  powerPlayGoals: Scalars["Int"];
  powerPlayAssists: Scalars["Int"];
  penaltyMinutes: Scalars["Int"];
  faceOffsTaken: Scalars["Int"];
  faceOffWins: Scalars["Int"];
  takeaways: Scalars["Int"];
  giveaways: Scalars["Int"];
  shortHandedGoals: Scalars["Int"];
  shortHandedAssists: Scalars["Int"];
  blocked: Scalars["Int"];
  plusMinus: Scalars["Int"];
  timeOnIce: Scalars["Int"];
  evenTimeOnIce: Scalars["Int"];
  powerPlayTimeOnIce: Scalars["Int"];
  shortHandedTimeOnIce: Scalars["Int"];
  player: Player;
  game: Game;
  team: Team;
};

export enum Decision {
  L = "L",
  W = "W",
}

export type GoalieBoxscore = {
  __typename?: "GoalieBoxscore";
  id: Scalars["String"];
  gamePk: Scalars["Int"];
  timeOnIce: Scalars["Int"];
  assists: Scalars["Int"];
  goals: Scalars["Int"];
  saves: Scalars["Int"];
  powerPlaySaves: Scalars["Int"];
  shortHandedSaves: Scalars["Int"];
  evenSaves: Scalars["Int"];
  shortHandedShotsAgainst: Scalars["Int"];
  powerPlayShotsAgainst: Scalars["Int"];
  decision?: Maybe<Decision>;
  shotsAgainst: Scalars["Int"];
  penaltyMinutes: Scalars["Int"];
  savePct: Scalars["Float"];
  powerPlaySavePct?: Maybe<Scalars["Float"]>;
  shortHandedSavePct?: Maybe<Scalars["Float"]>;
  evenSavePct?: Maybe<Scalars["Float"]>;
  player: Player;
  game: Game;
  team: Team;
};

export enum HighlightType {
  Recap = "RECAP",
  Condensed = "CONDENSED",
  Milestone = "MILESTONE",
}

export type Highlight = {
  __typename?: "Highlight";
  id: Scalars["String"];
  gamePk: Scalars["Int"];
  type: HighlightType;
  videoIdApi: Scalars["Int"];
  title: Scalars["String"];
  blurb: Scalars["String"];
  description: Scalars["String"];
  duration: Scalars["Int"];
  mediaPlaybackIdApi: Scalars["Int"];
  eventIdApi?: Maybe<Scalars["Int"]>;
  game: Game;
  team?: Maybe<Team>;
  opponent?: Maybe<Team>;
  highlightMeta?: Maybe<HighlightMeta>;
  playbacks: Array<Maybe<Playback>>;
  comments: Array<Maybe<Comment>>;
  likedBy: Array<Maybe<User>>;
};

export enum VideoDataType {
  Goal = "GOAL",
  Shot = "SHOT",
}

export enum PeriodType {
  Regular = "REGULAR",
  Overtime = "OVERTIME",
  Shootout = "SHOOTOUT",
}

export type HighlightMeta = {
  __typename?: "HighlightMeta";
  id: Scalars["String"];
  gamePk: Scalars["Int"];
  eventIdxApi: Scalars["Int"];
  eventIdApi: Scalars["Int"];
  gameWinningGoal: Scalars["Boolean"];
  emptyNet: Scalars["Boolean"];
  type: VideoDataType;
  shotType: Scalars["String"];
  periodType: PeriodType;
  periodTime: Scalars["Int"];
  periodNumber: Scalars["Int"];
  dateTime: Scalars["DateTime"];
  coordX: Scalars["Int"];
  coordY: Scalars["Int"];
  hasVideo: Scalars["Boolean"];
  scorer: Player;
  assist1?: Maybe<Player>;
  assist2?: Maybe<Player>;
  goalie?: Maybe<Player>;
  team: Team;
  highlight?: Maybe<Highlight>;
};

export type Comment = {
  __typename?: "Comment";
  id: Scalars["String"];
  createdAt: Scalars["DateTime"];
  content: Scalars["String"];
  highlight: Highlight;
  author: User;
};

export type PlaybackType = {
  __typename?: "PlaybackType";
  id: Scalars["String"];
  name: Scalars["String"];
  width?: Maybe<Scalars["Int"]>;
  height?: Maybe<Scalars["Int"]>;
  playbacks: Array<Maybe<Playback>>;
};

export type Playback = {
  __typename?: "Playback";
  id: Scalars["String"];
  url: Scalars["String"];
  type: PlaybackType;
  highlight: Highlight;
};

/** Card meta data such as player name, team etc */
export type BestPlayer = {
  /** CUID of the resource */
  id: Scalars["ID"];
  /** First name of the player */
  firstName: Scalars["String"];
  /** Last name of the player */
  lastName: Scalars["String"];
  /** Link to player profile */
  playerSiteLink: Scalars["String"];
  /** Player position */
  primaryPosition: Scalars["String"];
  /** Abbreviated three-letter team id */
  teamAbbreviation: Scalars["String"];
  /** Link to team profile */
  teamSiteLink: Scalars["String"];
};

export enum StatSortFields {
  Assists = "ASSISTS",
  Goals = "GOALS",
  Points = "POINTS",
  Shots = "SHOTS",
  Hits = "HITS",
  PpGoals = "PP_GOALS",
  PpAssists = "PP_ASSISTS",
  PpPoints = "PP_POINTS",
  Pm = "PM",
  FoTaken = "FO_TAKEN",
  FoWins = "FO_WINS",
  FoPct = "FO_PCT",
  Takeaways = "TAKEAWAYS",
  Giveaways = "GIVEAWAYS",
  ShGoals = "SH_GOALS",
  ShAssists = "SH_ASSISTS",
  ShPoints = "SH_POINTS",
  Blocked = "BLOCKED",
  Plusminus = "PLUSMINUS",
  Ton = "TON",
  TonPerGame = "TON_PER_GAME",
  EvenTon = "EVEN_TON",
  PpTon = "PP_TON",
  ShTon = "SH_TON",
  Saves = "SAVES",
  PpSaves = "PP_SAVES",
  ShSaves = "SH_SAVES",
  EvenSaves = "EVEN_SAVES",
  ShSh = "SH_SH",
  PpSh = "PP_SH",
  Shotsagainst = "SHOTSAGAINST",
  Savepct = "SAVEPCT",
  PpSavepct = "PP_SAVEPCT",
  ShSavepct = "SH_SAVEPCT",
  EvenSavepct = "EVEN_SAVEPCT",
  Wins = "WINS",
  Losses = "LOSSES",
  Shutouts = "SHUTOUTS",
  SavePct = "SAVE_PCT",
  Gaa = "GAA",
  PpSavePct = "PP_SAVE_PCT",
  ShSavePct = "SH_SAVE_PCT",
  PpShotsAgainst = "PP_SHOTS_AGAINST",
  ShShotsAgainst = "SH_SHOTS_AGAINST",
  SavesPerGame = "SAVES_PER_GAME",
  ShotsAgainstPerGame = "SHOTS_AGAINST_PER_GAME",
  WinPct = "WIN_PCT",
  OtLosses = "OT_LOSSES",
  GoalsFor = "GOALS_FOR",
  GoalsAgainst = "GOALS_AGAINST",
  PpPct = "PP_PCT",
  ShTimes = "SH_TIMES",
  PkPct = "PK_PCT",
  ShotsForPerGame = "SHOTS_FOR_PER_GAME",
  HitsForPerGame = "HITS_FOR_PER_GAME",
  HitsAgainstPerGame = "HITS_AGAINST_PER_GAME",
}

export type CardInput = {
  /** Number of games considered in stat accumulation */
  numOfGames: Scalars["Int"];
  /** Total number of cards queried */
  take: Scalars["Int"];
  /** Primary sort column */
  sortBy: StatSortFields;
};

export type BestSkater = BestPlayer & {
  __typename?: "BestSkater";
  /** CUID of the resource */
  id: Scalars["ID"];
  /** First name of the player */
  firstName: Scalars["String"];
  /** Last name of the player */
  lastName: Scalars["String"];
  /** Link to player profile */
  playerSiteLink: Scalars["String"];
  /** Player position */
  primaryPosition: Scalars["String"];
  /** Abbreviated three-letter team id */
  teamAbbreviation: Scalars["String"];
  /** Link to team profile */
  teamSiteLink: Scalars["String"];
  points: Scalars["Int"];
  goals: Scalars["Int"];
  assists: Scalars["Int"];
  plusMinus: Scalars["Int"];
  penaltyMinutes: Scalars["Int"];
  powerPlayGoals: Scalars["Int"];
  powerPlayPoints: Scalars["Int"];
  shortHandedGoals: Scalars["Int"];
  shortHandedPoints: Scalars["Int"];
  timeOnIcePerGame: Scalars["Float"];
  faceOffsTaken: Scalars["Int"];
  faceOffPct?: Maybe<Scalars["Float"]>;
  shots: Scalars["Int"];
  hits: Scalars["Int"];
  takeaways: Scalars["Int"];
  giveaways: Scalars["Int"];
  blocked: Scalars["Int"];
  gamePks: Array<Scalars["String"]>;
};

export type BestGoalie = BestPlayer & {
  __typename?: "BestGoalie";
  /** CUID of the resource */
  id: Scalars["ID"];
  /** First name of the player */
  firstName: Scalars["String"];
  /** Last name of the player */
  lastName: Scalars["String"];
  /** Link to player profile */
  playerSiteLink: Scalars["String"];
  /** Player position */
  primaryPosition: Scalars["String"];
  /** Abbreviated three-letter team id */
  teamAbbreviation: Scalars["String"];
  /** Link to team profile */
  teamSiteLink: Scalars["String"];
  wins: Scalars["Int"];
  losses: Scalars["Int"];
  shutouts: Scalars["Int"];
  savePct: Scalars["Float"];
  goalsAgainstAverage: Scalars["Float"];
  powerPlaySavePct?: Maybe<Scalars["Float"]>;
  shortHandedSavePct?: Maybe<Scalars["Float"]>;
  powerPlayShotsAgainst?: Maybe<Scalars["Int"]>;
  shortHandedShotsAgainst?: Maybe<Scalars["Int"]>;
  savesPerGame: Scalars["Float"];
  shotsAgainstPerGame: Scalars["Float"];
  winPct: Scalars["Float"];
  penaltyMinutes: Scalars["Int"];
  goals: Scalars["Int"];
  assists: Scalars["Int"];
  gamePks: Array<Scalars["String"]>;
};

export type BestTeam = {
  __typename?: "BestTeam";
  id: Scalars["ID"];
  teamName: Scalars["String"];
  locationName: Scalars["String"];
  abbreviation: Scalars["String"];
  siteLink: Scalars["String"];
  wins: Scalars["Int"];
  losses: Scalars["Int"];
  otLosses: Scalars["Int"];
  awayRecord: Scalars["String"];
  homeRecord: Scalars["String"];
  goalsFor: Scalars["Int"];
  goalsAgainst: Scalars["Int"];
  powerPlayGoals: Scalars["Int"];
  powerPlayPct: Scalars["Float"];
  shortHandedTimes: Scalars["Int"];
  penaltyKillPct: Scalars["Float"];
  shotsForPerGame: Scalars["Float"];
  shotsAgainstPerGame: Scalars["Float"];
  takeaways: Scalars["Int"];
  giveaways: Scalars["Int"];
  hitsForPerGame: Scalars["Float"];
  hitsAgainstPerGame: Scalars["Float"];
  gamePks: Array<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  allDivisions: Array<Maybe<Division>>;
  bestSkaters: Array<BestSkater>;
  bestGoalies: Array<BestGoalie>;
  bestTeams: Array<BestTeam>;
};

export type QueryBestSkatersArgs = {
  input: CardInput;
};

export type QueryBestGoaliesArgs = {
  input: CardInput;
};

export type QueryBestTeamsArgs = {
  input: CardInput;
};

export type BestCardQueryVariables = Exact<{ [key: string]: never }>;

export type BestCardQuery = { __typename?: "Query" } & {
  bestSkaters: Array<
    { __typename?: "BestSkater" } & Pick<
      BestSkater,
      | "id"
      | "firstName"
      | "lastName"
      | "teamAbbreviation"
      | "points"
      | "goals"
      | "assists"
      | "plusMinus"
      | "penaltyMinutes"
      | "powerPlayGoals"
      | "powerPlayPoints"
      | "shortHandedGoals"
      | "shortHandedPoints"
      | "timeOnIcePerGame"
      | "faceOffsTaken"
      | "faceOffPct"
      | "shots"
      | "hits"
      | "takeaways"
      | "giveaways"
      | "blocked"
    >
  >;
  bestGoalies: Array<
    { __typename?: "BestGoalie" } & Pick<
      BestGoalie,
      | "id"
      | "firstName"
      | "lastName"
      | "teamAbbreviation"
      | "wins"
      | "losses"
      | "shutouts"
      | "savePct"
      | "goalsAgainstAverage"
      | "powerPlaySavePct"
      | "shortHandedSavePct"
      | "powerPlayShotsAgainst"
      | "shortHandedShotsAgainst"
      | "savesPerGame"
      | "shotsAgainstPerGame"
      | "winPct"
      | "penaltyMinutes"
      | "goals"
      | "assists"
    >
  >;
  bestTeams: Array<
    { __typename?: "BestTeam" } & Pick<
      BestTeam,
      | "id"
      | "teamName"
      | "locationName"
      | "abbreviation"
      | "siteLink"
      | "wins"
      | "losses"
      | "otLosses"
      | "awayRecord"
      | "homeRecord"
      | "goalsFor"
      | "goalsAgainst"
      | "powerPlayGoals"
      | "powerPlayPct"
      | "shortHandedTimes"
      | "penaltyKillPct"
      | "shotsForPerGame"
      | "shotsAgainstPerGame"
      | "takeaways"
      | "giveaways"
      | "hitsForPerGame"
      | "hitsAgainstPerGame"
    >
  >;
};

export type BestGoalieQueryVariables = Exact<{
  numOfGames: Scalars["Int"];
  sortBy: StatSortFields;
  take: Scalars["Int"];
}>;

export type BestGoalieQuery = { __typename?: "Query" } & {
  bestGoalies: Array<
    { __typename?: "BestGoalie" } & Pick<
      BestGoalie,
      | "id"
      | "firstName"
      | "lastName"
      | "teamAbbreviation"
      | "wins"
      | "losses"
      | "shutouts"
      | "savePct"
      | "goalsAgainstAverage"
      | "powerPlaySavePct"
      | "shortHandedSavePct"
      | "powerPlayShotsAgainst"
      | "shortHandedShotsAgainst"
      | "savesPerGame"
      | "shotsAgainstPerGame"
      | "winPct"
      | "penaltyMinutes"
      | "goals"
      | "assists"
    >
  >;
};

export type BestSkaterQueryVariables = Exact<{
  numOfGames: Scalars["Int"];
  sortBy: StatSortFields;
  take: Scalars["Int"];
}>;

export type BestSkaterQuery = { __typename?: "Query" } & {
  bestSkaters: Array<
    { __typename?: "BestSkater" } & Pick<
      BestSkater,
      | "id"
      | "firstName"
      | "lastName"
      | "teamAbbreviation"
      | "points"
      | "goals"
      | "assists"
      | "plusMinus"
      | "penaltyMinutes"
      | "powerPlayGoals"
      | "powerPlayPoints"
      | "shortHandedGoals"
      | "shortHandedPoints"
      | "timeOnIcePerGame"
      | "faceOffsTaken"
      | "faceOffPct"
      | "shots"
      | "hits"
      | "takeaways"
      | "giveaways"
      | "blocked"
    >
  >;
};

export type BestTeamQueryVariables = Exact<{
  numOfGames: Scalars["Int"];
  sortBy: StatSortFields;
  take: Scalars["Int"];
}>;

export type BestTeamQuery = { __typename?: "Query" } & {
  bestTeams: Array<
    { __typename?: "BestTeam" } & Pick<
      BestTeam,
      | "id"
      | "teamName"
      | "locationName"
      | "abbreviation"
      | "siteLink"
      | "wins"
      | "losses"
      | "otLosses"
      | "awayRecord"
      | "homeRecord"
      | "goalsFor"
      | "goalsAgainst"
      | "powerPlayGoals"
      | "powerPlayPct"
      | "shortHandedTimes"
      | "penaltyKillPct"
      | "shotsForPerGame"
      | "shotsAgainstPerGame"
      | "takeaways"
      | "giveaways"
      | "hitsForPerGame"
      | "hitsAgainstPerGame"
    >
  >;
};

export const BestCardDocument = gql`
  query BestCard {
    bestSkaters(input: { numOfGames: 5, sortBy: POINTS, take: 5 }) {
      id
      firstName
      lastName
      teamAbbreviation
      points
      goals
      assists
      plusMinus
      penaltyMinutes
      powerPlayGoals
      powerPlayPoints
      shortHandedGoals
      shortHandedPoints
      timeOnIcePerGame
      faceOffsTaken
      faceOffPct
      shots
      hits
      takeaways
      giveaways
      blocked
    }
    bestGoalies(input: { numOfGames: 5, sortBy: WINS, take: 5 }) {
      id
      firstName
      lastName
      teamAbbreviation
      wins
      losses
      shutouts
      savePct
      goalsAgainstAverage
      powerPlaySavePct
      shortHandedSavePct
      powerPlayShotsAgainst
      shortHandedShotsAgainst
      savesPerGame
      shotsAgainstPerGame
      winPct
      penaltyMinutes
      goals
      assists
    }
    bestTeams(input: { numOfGames: 5, sortBy: WINS, take: 5 }) {
      id
      teamName
      locationName
      abbreviation
      siteLink
      wins
      losses
      otLosses
      awayRecord
      homeRecord
      goalsFor
      goalsAgainst
      powerPlayGoals
      powerPlayPct
      shortHandedTimes
      penaltyKillPct
      shotsForPerGame
      shotsAgainstPerGame
      takeaways
      giveaways
      hitsForPerGame
      hitsAgainstPerGame
    }
  }
`;

/**
 * __useBestCardQuery__
 *
 * To run a query within a React component, call `useBestCardQuery` and pass it any options that fit your needs.
 * When your component renders, `useBestCardQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBestCardQuery({
 *   variables: {
 *   },
 * });
 */
export function useBestCardQuery(
  baseOptions?: Apollo.QueryHookOptions<BestCardQuery, BestCardQueryVariables>
) {
  return Apollo.useQuery<BestCardQuery, BestCardQueryVariables>(
    BestCardDocument,
    baseOptions
  );
}
export function useBestCardLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BestCardQuery,
    BestCardQueryVariables
  >
) {
  return Apollo.useLazyQuery<BestCardQuery, BestCardQueryVariables>(
    BestCardDocument,
    baseOptions
  );
}
export type BestCardQueryHookResult = ReturnType<typeof useBestCardQuery>;
export type BestCardLazyQueryHookResult = ReturnType<
  typeof useBestCardLazyQuery
>;
export type BestCardQueryResult = Apollo.QueryResult<
  BestCardQuery,
  BestCardQueryVariables
>;
export const BestGoalieDocument = gql`
  query BestGoalie($numOfGames: Int!, $sortBy: StatSortFields!, $take: Int!) {
    bestGoalies(
      input: { numOfGames: $numOfGames, sortBy: $sortBy, take: $take }
    ) {
      id
      firstName
      lastName
      teamAbbreviation
      wins
      losses
      shutouts
      savePct
      goalsAgainstAverage
      powerPlaySavePct
      shortHandedSavePct
      powerPlayShotsAgainst
      shortHandedShotsAgainst
      savesPerGame
      shotsAgainstPerGame
      winPct
      penaltyMinutes
      goals
      assists
    }
  }
`;

/**
 * __useBestGoalieQuery__
 *
 * To run a query within a React component, call `useBestGoalieQuery` and pass it any options that fit your needs.
 * When your component renders, `useBestGoalieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBestGoalieQuery({
 *   variables: {
 *      numOfGames: // value for 'numOfGames'
 *      sortBy: // value for 'sortBy'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useBestGoalieQuery(
  baseOptions: Apollo.QueryHookOptions<
    BestGoalieQuery,
    BestGoalieQueryVariables
  >
) {
  return Apollo.useQuery<BestGoalieQuery, BestGoalieQueryVariables>(
    BestGoalieDocument,
    baseOptions
  );
}
export function useBestGoalieLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BestGoalieQuery,
    BestGoalieQueryVariables
  >
) {
  return Apollo.useLazyQuery<BestGoalieQuery, BestGoalieQueryVariables>(
    BestGoalieDocument,
    baseOptions
  );
}
export type BestGoalieQueryHookResult = ReturnType<typeof useBestGoalieQuery>;
export type BestGoalieLazyQueryHookResult = ReturnType<
  typeof useBestGoalieLazyQuery
>;
export type BestGoalieQueryResult = Apollo.QueryResult<
  BestGoalieQuery,
  BestGoalieQueryVariables
>;
export const BestSkaterDocument = gql`
  query BestSkater($numOfGames: Int!, $sortBy: StatSortFields!, $take: Int!) {
    bestSkaters(
      input: { numOfGames: $numOfGames, sortBy: $sortBy, take: $take }
    ) {
      id
      firstName
      lastName
      teamAbbreviation
      points
      goals
      assists
      plusMinus
      penaltyMinutes
      powerPlayGoals
      powerPlayPoints
      shortHandedGoals
      shortHandedPoints
      timeOnIcePerGame
      faceOffsTaken
      faceOffPct
      shots
      hits
      takeaways
      giveaways
      blocked
    }
  }
`;

/**
 * __useBestSkaterQuery__
 *
 * To run a query within a React component, call `useBestSkaterQuery` and pass it any options that fit your needs.
 * When your component renders, `useBestSkaterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBestSkaterQuery({
 *   variables: {
 *      numOfGames: // value for 'numOfGames'
 *      sortBy: // value for 'sortBy'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useBestSkaterQuery(
  baseOptions: Apollo.QueryHookOptions<
    BestSkaterQuery,
    BestSkaterQueryVariables
  >
) {
  return Apollo.useQuery<BestSkaterQuery, BestSkaterQueryVariables>(
    BestSkaterDocument,
    baseOptions
  );
}
export function useBestSkaterLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BestSkaterQuery,
    BestSkaterQueryVariables
  >
) {
  return Apollo.useLazyQuery<BestSkaterQuery, BestSkaterQueryVariables>(
    BestSkaterDocument,
    baseOptions
  );
}
export type BestSkaterQueryHookResult = ReturnType<typeof useBestSkaterQuery>;
export type BestSkaterLazyQueryHookResult = ReturnType<
  typeof useBestSkaterLazyQuery
>;
export type BestSkaterQueryResult = Apollo.QueryResult<
  BestSkaterQuery,
  BestSkaterQueryVariables
>;
export const BestTeamDocument = gql`
  query BestTeam($numOfGames: Int!, $sortBy: StatSortFields!, $take: Int!) {
    bestTeams(
      input: { numOfGames: $numOfGames, sortBy: $sortBy, take: $take }
    ) {
      id
      teamName
      locationName
      abbreviation
      siteLink
      wins
      losses
      otLosses
      awayRecord
      homeRecord
      goalsFor
      goalsAgainst
      powerPlayGoals
      powerPlayPct
      shortHandedTimes
      penaltyKillPct
      shotsForPerGame
      shotsAgainstPerGame
      takeaways
      giveaways
      hitsForPerGame
      hitsAgainstPerGame
    }
  }
`;

/**
 * __useBestTeamQuery__
 *
 * To run a query within a React component, call `useBestTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useBestTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBestTeamQuery({
 *   variables: {
 *      numOfGames: // value for 'numOfGames'
 *      sortBy: // value for 'sortBy'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useBestTeamQuery(
  baseOptions: Apollo.QueryHookOptions<BestTeamQuery, BestTeamQueryVariables>
) {
  return Apollo.useQuery<BestTeamQuery, BestTeamQueryVariables>(
    BestTeamDocument,
    baseOptions
  );
}
export function useBestTeamLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    BestTeamQuery,
    BestTeamQueryVariables
  >
) {
  return Apollo.useLazyQuery<BestTeamQuery, BestTeamQueryVariables>(
    BestTeamDocument,
    baseOptions
  );
}
export type BestTeamQueryHookResult = ReturnType<typeof useBestTeamQuery>;
export type BestTeamLazyQueryHookResult = ReturnType<
  typeof useBestTeamLazyQuery
>;
export type BestTeamQueryResult = Apollo.QueryResult<
  BestTeamQuery,
  BestTeamQueryVariables
>;
