import { LOGO } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/fireBase";
import { netflixSmiley } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggleButtonName = useSelector((store) => store.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        const { uid, displayName, email, photoURL } = user;
        console.log("USER FROM FIREBASE: ", user);
        dispatch(
          addUser({
            uid: uid,
            displayName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");

        return () => unsubscribe();
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className=" w-full py-4 px-4 absolute bg-gradient-to-b from-black to-transparent z-50 ">
      <div className="flex justify-between items-center">
        <img className="w-48  " src={LOGO} alt="netflix-logo" />
        {user && location.pathname === "/browse" && (
          <div className="flex items-center space-x-4">
            {toggleButtonName && (
              <select
                onChange={handleLanguageChange}
                className="px-2   py-[7px] rounded-md">
                {SUPPORTED_LANGUAGE.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="text-white bg-violet-600 px-2 py-[7px] rounded-md hover:opacity-80 "
              onClick={handleGptSearchClick}>
              {toggleButtonName ? "Home Page" : "GPT Search"}
            </button>

            <img
              className="w-10 rounded-md"
              src={netflixSmiley}
              alt="netFlix-Smiley"
            />
            <button className="text-white text-lg   " onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
