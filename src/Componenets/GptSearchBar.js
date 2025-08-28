import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const handleSearch = (e) => {
    e.preventDefault();
  };
  return (
    <div className="pt-[13%] flex justify-center">
      <form
        className="bg-black p-3 w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={handleSearch}>
        <input
          type="text"
          placeholder={lang[langKey].gptPlaceHolder}
          className="col-span-9 p-2 rounded-lg"></input>
        <button className="text-white col-span-3 bg-red-700 p-2 ml-3 rounded-lg text-xl hover:opacity-70">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
