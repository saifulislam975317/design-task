import advBanner from "../../assets/images/advertisingBanner.jpg";
const Advertising = () => {
  return (
    <div
      className="text-white w-full h-[900px] bg-cover bg-no-repeat bg-center p-16"
      style={{ backgroundImage: `url(${advBanner})` }}
    ></div>
  );
};

export default Advertising;
