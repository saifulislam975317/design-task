import { Parallax } from "react-parallax";
import advBanner from "../../assets/images/banner2.jpg";
const Advertising = () => {
  return (
    <Parallax
      className="w-full h-[500px] paraLex"
      bgImage={advBanner}
      strength={700}
    ></Parallax>
  );
};

export default Advertising;
