import ApplyBanner from "../../assets/images/applyBanner.png";
const ApplyToday = () => {
  return (
    <div
      className="text-white bg-cover bg-no-repeat  p-16"
      style={{ backgroundImage: `url(${ApplyBanner})` }}
    >
      <h1 className="text-center text-4xl font-bold">
        Apply Today To Become Part of
        <span className="text-orange-600">Monster Ads</span>
      </h1>
    </div>
  );
};

export default ApplyToday;
