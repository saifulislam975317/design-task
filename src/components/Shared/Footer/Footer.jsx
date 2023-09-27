import footerImg from "../../../assets/images/footer.png";
const Footer = () => {
  return (
    <div className="lg:flex items-center justify-center  gap-2 bg-[#126EB2]">
      <div className="lg:w-1/2 w-full ">
        <img className="" src={footerImg} alt="" />
      </div>
      <div className="lg:w-1/2 w-full text-[#999995] bg-[#0E5589] mb-4 p-6  mr-24">
        <h1>
          © Copyright 2011-2021 Monster Ads | Terms of Service | Privacy Policy
        </h1>
      </div>
    </div>
  );
};

export default Footer;
