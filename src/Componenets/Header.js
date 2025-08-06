import { LOGO } from "../utils/constants"

const Header = ()=>{
    return(
        <div className=" w-full py-4 px-4 absolute bg-gradient-to-b from-black to-transparent z-10 ">
            <img className="w-48  " src={LOGO} alt="netflix-logo"/>
        </div>
    )
}
export default Header