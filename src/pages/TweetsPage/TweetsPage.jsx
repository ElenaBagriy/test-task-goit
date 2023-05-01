import { Filter } from "components/Filter/Filter";
import { TweetsList } from "components/TweetsList.jsx/TweetsList";

const TweetsPage = () => {
  return <>
    <Filter />
    <TweetsList />
    </>
};

export default TweetsPage;