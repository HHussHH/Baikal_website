//components
import Ads from ".././components/adsSlider/Ads";
import OurPrograms from ".././components/ourPrograms/OurPrograms";
import Social from "../components/social/Social";
const Home = ({ setCurrentProjectId }) => {
  return (
    <>
      <Ads />
      <OurPrograms setId={setCurrentProjectId} />
      <Social />
    </>
  );
};

export default Home;
