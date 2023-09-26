import { Parallax } from "react-parallax";
import indBg from "../../assets/images/industryBg.jpg";
const Industry = () => {
  return (
    <Parallax
      className="w-full h-[600px] paraLex"
      bgImage={indBg}
      strength={-600}
    ></Parallax>
  );
};

export default Industry;
