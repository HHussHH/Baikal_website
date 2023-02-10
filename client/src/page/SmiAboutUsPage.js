import SmiAboutUs from "../components/SMI/SmiAboutUs";
import Social from "../components/social/Social";

const SmiAboutUsPage = ({ getId }) => {
  return (
    <>
      <SmiAboutUs getId={getId} />
      <Social />
    </>
  );
};

export default SmiAboutUsPage;
