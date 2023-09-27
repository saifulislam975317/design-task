import pubImg from "../../assets/images/pubImg.png";
import findImg from "../../assets/images/findImg.png";
const Publishers = () => {
  return (
    <div className="my-12">
      <div className="flex gap-2  items-center justify-center relative">
        <img src={pubImg} alt="" />
        <h1 className="absolute ml-[1rem] lg:text-3xl  lg:uppercase ">
          For Publishers
        </h1>
        <span className="absolute ml-[65%]">
          <img className="w-[200px]" src={findImg} alt="" />
        </span>
      </div>
      <p className=" flex justify-center ml-[25%]">
        Publishers join MonsterAds because we offer the top rates in the <br />
        industry on hundreds of offers. They stay due to the first class <br />
        support, accurate custom tracking, Net 5 payouts and EPCs that blow away
        <br />
        the competition. Ready to join the BEST of the BEST publishers in the
        industry?
      </p>
    </div>
  );
};

export default Publishers;
