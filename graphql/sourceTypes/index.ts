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
