import React from "react";
import WeThanked from "../components/weThanked/WeThanked";
import Social from "../components/social/Social";

const WeThankedPage = ({ setId }) => {
  return (
    <>
      <WeThanked setId={setId} />
      <Social />
    </>
  );
};

export default WeThankedPage;
