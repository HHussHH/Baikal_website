import CardForHowHelp from "../components/cardForHowHelpPage/CardForHowHelp";
import HowHelp from "../components/howHelp/HowHelp";
import Social from "../components/social/Social";

const HowHelpPage = ({ useId }) => {
  return (
    <>
      {useId ? <CardForHowHelp useId={useId} /> : null}
      <HowHelp />
      <Social />
    </>
  );
};

export default HowHelpPage;
