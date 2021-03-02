import { PageBestCardComp, ssrBestCard } from "generated/page";
import { GetStaticProps } from "next";

import App from "../common/components/App";
import BestCards from "../modules/cardViews/components/BestCards";

const IndexPage: PageBestCardComp = ({ data }) => {
  if (!data) {
    return <div>Something went wrong</div>;
  }

  return (
    <App>
      <BestCards bestCardsQuery={data} />
    </App>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return await ssrBestCard.getServerPage({}, null);
};

export default IndexPage;
