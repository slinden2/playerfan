import React from "react";
import { BestCardQuery } from "generated/graphql";
import CardRow from "modules/cardViews/components/CardRow";
import { BestCardDataRow } from "modules/cardViews/types/BestCardDataRow";

interface Props {
  bestCardsQuery: BestCardQuery;
}

const BestCards = ({ bestCardsQuery }: Props) => {
  return (
    <div>
      {Object.entries(bestCardsQuery).map((rowData) => {
        const data = {
          type: rowData[0],
          cardArray: rowData[1],
        };

        return <CardRow key={rowData[0]} data={data as BestCardDataRow} />;
      })}
    </div>
  );
};

export default BestCards;
