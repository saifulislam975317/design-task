import logo from "../../assets/images/logo-two-2.png";
import applyImg from "../../assets/images/applyNow.png";
import uImage from "../../assets/images/uImage.png";
const Marketer = () => {
  return (
    <div className="flex items-center justify-evenly text-[#cccccc] bg-[#424242] ">
      <div>
        <img className="w-[200px] h-[200px] mb-0 pb-0" src={logo} alt="" />
      </div>
      <div>
        <h1 className="text-4xl">
          Are <span className="text-orange-500">YOU</span> an elite marketer?
        </h1>
        <h2 className="text-4xl">
          Do you have the results to
          <span className="text-orange-500">PROVE </span> it?
        </h2>
        <p className="text-2xl">Apply Today & see if you have what it takes!</p>
      </div>
      <div>
        <img className="inline-block my-4" src={applyImg} alt="" />
        <img src={uImage} alt="" />
      </div>
    </div>
  );
};

export default Marketer;
