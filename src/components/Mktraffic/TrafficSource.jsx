import mkImg from "../../assets/images/social.avif";
import mkBg from "../../assets/images/money-bg.png";
const TrafficSource = () => {
  return (
    <div
      style={{ backgroundImage: `url(${mkBg})` }}
      className="lg:flex px-8 items-center justify-center gap-5 py-12 bg-cover bg-no-repeat"
    >
      <div className="mb-8">
        <h1 className="text-white text-3xl text-bold">
          Scented Seduction Discover Irresistible Fragrances on Facebook Ads
          Today for perfume!
        </h1>
      </div>
      <div>
        <img className="lg:w-[60%] lg:h-full w-full" src={mkImg} alt="" />
      </div>
    </div>
  );
};

export default TrafficSource;
