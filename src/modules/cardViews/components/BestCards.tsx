import { BestCardQuery } from "generated/graphql";
import CardRow from "modules/cardViews/components/CardRow";
import { BestCardDataRow } from "modules/cardViews/types/BestCardDataRow";

interface Props {
  bestCardsQuery: BestCardQuery;
}

const BestCards = ({ bestCardsQuery }: Props) => {
  return (
    <div>
      <h1>Welcome to Player Fan</h1>
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
