import mkImg from "../../assets/images/mkImg.png";
import mkBg from "../../assets/images/money-bg.png";
const TrafficSource = () => {
  return (
    <div
      style={{ backgroundImage: `url(${mkBg})` }}
      className="flex items-center justify-center gap-5 py-12 bg-cover bg-no-repeat"
    >
      <div>
        <h1 className="text-white text-3xl text-bold">
          turn all <span className="text-orange-500">YOUR</span> traffic sources
          into money making machines
        </h1>
      </div>
      <div>
        <img className="w-[60%]" src={mkImg} alt="" />
      </div>
    </div>
  );
};

export default TrafficSource;
