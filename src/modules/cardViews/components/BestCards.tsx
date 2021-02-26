import React from "react";
import { BestCardQuery } from "generated/graphql";
import CardRow from "modules/cardViews/components/CardRow";

interface Props {
  bestCardsQuery: BestCardQuery;
}

type RowNames = "bestSkaters" | "bestGoalies" | "bestTeams";

const rowNames = ["bestSkaters", "bestGoalies", "bestTeams"];

const BestCards = ({ bestCardsQuery }: Props) => {
  return (
    <div>
      {Object.entries(bestCardsQuery).map(([prop, val]) => {
        if (rowNames.includes(prop)) {
          return (
            <CardRow
              key={prop}
              type={prop as RowNames}
              queryData={val as any}
            />
          );
        }
      })}
    </div>
  );
};

export default BestCards;
