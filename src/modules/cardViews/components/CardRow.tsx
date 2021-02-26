import React from "react";
import { BestCardQuery } from "generated/graphql";
import assertNever from "utils/assertNever";

interface Props {
  type: "bestSkaters" | "bestGoalies" | "bestTeams";
  queryData:
    | Pick<BestCardQuery, "bestSkaters">
    | Pick<BestCardQuery, "bestGoalies">
    | Pick<BestCardQuery, "bestTeams">;
}

const CardRow = ({ type, queryData }: Props) => {
  console.log(queryData);
  switch (type) {
    case "bestSkaters":
      return <div>{type}</div>;
    case "bestGoalies":
      return <div>{type}</div>;
    case "bestTeams":
      return <div>{type}</div>;
    default:
      assertNever(type);
  }
};

export default CardRow;
