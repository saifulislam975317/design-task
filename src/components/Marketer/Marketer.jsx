import logo from "../../assets/images/logo-two-2.png";
import applyImg from "../../assets/images/applyNow.png";
import uImage from "../../assets/images/uImage.png";
const Marketer = () => {
  return (
    <div className="lg:flex  items-center justify-evenly text-[#cccccc] bg-[#424242] ">
      <div>
        <img
          className="lg:w-[200px] lg:h-[200px] w-full mb-0 pb-0"
          src={logo}
          alt=""
        />
      </div>
      <div>
        <h1 className="text-4xl p-4">
          Are <span className="text-orange-500">YOU</span> an elite marketer?
        </h1>
        <h2 className="text-4xl p-4">
          Do you have the results to
          <span className="text-orange-500">PROVE </span> it?
        </h2>
        <p className="text-2xl p-4">
          Apply Today & see if you have what it takes!
        </p>
      </div>
      <div className="">
        <button className="appBtn p-4">
          <img className=" btnImg  my-4" src={applyImg} alt="" />
        </button>
        <img src={uImage} alt="" />
      </div>
    </div>
  );
};

export default Marketer;
