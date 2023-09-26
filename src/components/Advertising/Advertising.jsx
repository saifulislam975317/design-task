import { Parallax } from "react-parallax";
import advBanner from "../../assets/images/advertisingBanner.jpg";
const Advertising = () => {
  return (
    <Parallax
      className="w-full h-[600px] paraLex"
      bgImage={advBanner}
      strength={500}
    ></Parallax>
  );
};

export default Advertising;
