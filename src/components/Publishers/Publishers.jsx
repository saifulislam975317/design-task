import findImg from "../../assets/images/findMore.avif";
import findPro from "../../assets/images/morePro.avif";
const Publishers = () => {
  return (
    <div className="lg:flex items-center bg-[#191919] text-white">
      <div className="lg:w-1/3">
        <img className="lg:w-[400px] w-full h-[200px]" src={findImg} alt="" />
      </div>
      <div className="lg:w-1/3 w-full">
        <p className="px-4 my-4">
          In today's connected world, discovering your ideal fragrance has never
          been easier. Online perfume shopping offers customers a vast and
          diverse selection of scents to explore from the comfort of their
          homes. With detailed descriptions, customer reviews, and even virtual
          scent testers, navigating the world of perfumes is a sensory delight.
        </p>
      </div>
      <div className="lg:w-1/3 ">
        <img className="lg:w-[500px] w-full h-[200px]" src={findPro} alt="" />
      </div>
    </div>
  );
};

export default Publishers;
