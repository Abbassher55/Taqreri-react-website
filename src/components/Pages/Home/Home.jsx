import React, { useContext } from "react";
import { LanguageContext } from "../../../lang/LanguageContext";

const Home = () => {
  const { content } = useContext(LanguageContext);

  return (
    <div>
      <h1>{content.welcomeMessage}</h1>
    </div>
  );
};

export default Home;
