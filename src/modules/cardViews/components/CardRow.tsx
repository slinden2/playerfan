import React from "react";
import { BestCardDataRow } from "modules/cardViews/types/BestCardDataRow";

export interface Props {
  data: BestCardDataRow;
}

const CardRow = ({ data }: Props) => {
  switch (data.type) {
    case "bestSkaters":
      return (
        <div>
          <h2>Top Skaters of the Last 5 Games</h2>
          {data.cardArray.map((skater) => {
            return <div key={skater.id}>{skater.lastName}</div>;
          })}
        </div>
      );
    case "bestGoalies":
      return (
        <div>
          <h2>Top Goalies of the Last 5 Games</h2>
          {data.cardArray.map((goalie) => {
            return <div key={goalie.id}>{goalie.lastName}</div>;
          })}
        </div>
      );
    case "bestTeams":
      return (
        <div>
          <h2>Top Teams of the Last 5 Games</h2>
          {data.cardArray.map((team) => {
            return <div key={team.id}>{team.teamName}</div>;
          })}
        </div>
      );
  }
};

export default CardRow;
