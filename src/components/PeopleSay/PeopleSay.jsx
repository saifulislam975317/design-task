import people from "../../assets/images/people-image.png";
import peopleBg from "../../assets/images/people.png";
const PeopleSay = () => {
  return (
    <div className="lg:flex items-center rounded-md  py-8 gap-5 bg-[#414246] text-white">
      <div className="lg:w-1/2 w-full lg:flex items-center px-8 ">
        <img className="lg:w-[200px] w-full" src={people} alt="" />
        <p className="text-4xl">
          What <span className="text-orange-500"> PEOPLE</span> have been saying
        </p>
      </div>
      <div
        className="text-white lg:w-1/2 w-full mt-4 bg-cover bg-no-repeat p-4  mr-24"
        style={{ backgroundImage: `url(${peopleBg})` }}
      >
        <p>
          Been a member of MonsterAds for around a year and a half. Within that
          time I've used other websites but always been dragged back here...
          Why? Reliable offers, excellent conversion rates, helpful team and of
          course, one of the biggest things, on time, reliable payments. Some
          sites I've used had none of these good qualities. My affiliate manager
          Adam is always there for help and advise with offers, and even there
          for a general chat. Thank you MonsterAds, I look forward to enjoying
          being apart of this for time to come. ” Smallzy90 - PUBLISHER
        </p>
      </div>
    </div>
  );
};

export default PeopleSay;
