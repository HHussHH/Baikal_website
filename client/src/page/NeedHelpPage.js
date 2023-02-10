import PeopleCard from "../components/peopleCard/PeopleCard";
import RepostToSocial from "../components/repostToSocial/RepostToSocial";

const NeedHelp = ({ getId }) => {
  return (
    <>
      <PeopleCard getId={getId} />
      <RepostToSocial />
    </>
  );
};

export default NeedHelp;
