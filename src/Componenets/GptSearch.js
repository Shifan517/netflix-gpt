import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { netflixBG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
<img src={netflixBG} alt="BG Image"/>
        </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
