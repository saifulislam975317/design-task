import { Parallax } from "react-parallax";
import indBg from "../../assets/images/banner1.jpg";
const Industry = () => {
  return (
    <Parallax
      className="w-full h-[500px] paraLex"
      bgImage={indBg}
      strength={700}
    ></Parallax>
  );
};

export default Industry;
