import people from "../../assets/images/peopleSay.avif";
import peopleBg from "../../assets/images/people.png";
const PeopleSay = () => {
  return (
    <div className="lg:flex items-center rounded-md  py-8 gap-5 bg-[#414246] text-white">
      <div className="lg:w-1/2 w-full lg:flex items-center px-8 ">
        <img className="lg:w-[300px] w-full" src={people} alt="" />
        <p className="text-4xl ml-4">
          What <span className="text-orange-500"> PEOPLE</span> have been saying
        </p>
      </div>
      <div
        className="text-white lg:w-1/2 w-full mt-4 bg-cover bg-no-repeat p-4  mr-24"
        style={{ backgroundImage: `url(${peopleBg})` }}
      >
        <p>
          This perfume is an absolute delight! The scent is long-lasting and
          truly captivating. I've received countless compliments every time I
          wear it. It strikes a perfect balance between being elegant and
          alluring. The packaging is also exquisite, making it a fantastic gift
          option. I appreciate that it doesn't feel overpowering, making it
          suitable for both daytime and evening wear. It's like a signature
          scent that embodies my style and personality. Plus, the value for the
          quality is exceptional. I've tried many perfumes, but this one stands
          out as a true favorite. I can't recommend it enough – it's simply
          enchanting!
        </p>
      </div>
    </div>
  );
};

export default PeopleSay;
