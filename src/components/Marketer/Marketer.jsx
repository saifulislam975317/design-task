import perfume from "../../assets/images/perfumeImg.avif";
const Marketer = () => {
  return (
    <div className="lg:flex  items-center justify-evenly text-[#cccccc] bg-[#424242] ">
      <div>
        <img
          className="lg:w-[400px] lg:h-[300px] w-full mb-0 pb-0"
          src={perfume}
          alt=""
        />
      </div>
      <div className="p-4">
        <h1 className="text-4xl p-4">
          Enchanting Elegance Unveil Your Signature Scent with Our Exquisite
          Perfume Collection!
        </h1>
        <h2 className="text-4xl p-4">
          Do you want to buy best
          <span className="text-orange-500 ml-2">perfume? </span>
          so wait for what?
        </h2>
        <button className="btn btn-neutral">Order Now</button>
      </div>
    </div>
  );
};

export default Marketer;
