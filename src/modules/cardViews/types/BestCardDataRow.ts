import { BestGoalie, BestSkater, BestTeam } from "generated/graphql";

export type BestCardDataRow =
  | {
      type: "bestSkaters";
      cardArray: BestSkater[];
    }
  | {
      type: "bestGoalies";
      cardArray: BestGoalie[];
    }
  | {
      type: "bestTeams";
      cardArray: BestTeam[];
    };
