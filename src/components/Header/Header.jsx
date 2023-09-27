import perfume from "../../assets/images/Perfume Advertising Banner.jpg";
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
const Header = () => {
  return (
    <div className="lg:flex bg-[#191919] text-white gap-2 justify-justify-evenly items-center">
      <div className="lg:w-[60%] w-full">
        <img src={perfume} alt="" />
      </div>
      <div className="lg:w-[40%] w-full p-4 space-y-2">
        <h2 className="uppercase text-bold text-3xl">Call for advertising</h2>
        <p>
          <BsFillTelephoneOutboundFill className="text-2xl inline-block mr-2" />
          +881236542233
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
          voluptatem vel facere quis repellat doloribus quos! Facilis inventore
          deserunt commodi, aperiam beatae, non consequatur illum aliquam
          corporis exercitationem velit? Porro.
        </p>
        <button className="btn btn-neutral">Apply Now</button>
      </div>
    </div>
  );
};

export default Header;
