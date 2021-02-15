export interface BestPlayer {
  id: string;
  firstName: string;
  lastName: string;
  playerSiteLink: string;
  primaryPosition: string;
  teamAbbreviation: string;
  teamSiteLink: string;
}

export interface BestSkater extends BestPlayer {
  points: number;
  goals: number;
  assists: number;
  plusMinus: number;
  penaltyMinutes: number;
  powerPlayGoals: number;
  powerPlayPoints: number;
  shortHandedGoals: number;
  shortHandedPoints: number;
  timeOnIcePerGame: number;
  faceOffsTaken: number;
  faceOffPct?: number;
  shots: number;
  hits: number;
  takeaways: number;
  giveaways: number;
  blocked: number;
  gamePks: string;
}

export interface BestGoalie extends BestPlayer {
  wins: number;
  losses: number;
  shutouts: number;
  savePct: number;
  goalsAgainstAverage: number;
  powerPlaySavePct?: number;
  shortHandedSavePct?: number;
  powerPlayShotsAgainst?: number;
  shortHandedShotsAgainst?: number;
  savesPerGame: number;
  shotsAgainstPerGame: number;
  winPct: number;
  penaltyMinutes: number;
  goals: number;
  assists: number;
  gamePks: string;
}

export interface BestTeam {
  id: string;
  teamName: string;
  locationName: string;
  abbreviation: string;
  siteLink: string;
  wins: number;
  winsAway: number;
  winsHome: number;
  losses: number;
  lossesAway: number;
  lossesHome: number;
  otLosses: number;
  otLossesAway: number;
  otLossesHome: number;
  goalsFor: number;
  goalsAgainst: number;
  powerPlayGoals: number;
  powerPlayPct: number;
  shortHandedTimes: number;
  penaltyKillPct: number;
  shotsForPerGame: number;
  shotsAgainstPerGame: number;
  takeaways: number;
  giveaways: number;
  hitsForPerGame: number;
  hitsAgainstPerGame: number;
  gamePks: string;
}
