import login from "../../assets/images/login-header.png";
import adsImg from "../../assets/images/ads.png";
const Header = () => {
  return (
    <div className="bg-[#1375BC] mt-1">
      <div className="flex text-white items-center ml-[85%] relative">
        <img src={login} alt="" />
        <p className="absolute ml-12">LOGIN</p>
      </div>
      <div className="w-[60%] mx-auto py-8 ">
        <img src={adsImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
