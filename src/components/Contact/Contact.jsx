import ReCAPTCHA from "react-google-recaptcha";
import { AiOutlineClockCircle } from "react-icons/ai";

const Contact = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="bg-[#D7ECFB]">
      <div className="lg:flex  justify-center gap-5 items-center p-12">
        <div className="w-1/2">
          <h1>Need to contact someone at Monster Ads?</h1>
          <p>
            Please complete the form below & someone will be in contact with you
            as soon as possible.
          </p>
          <form action="">
            <div className="lg:flex mt-2 gap-2">
              <input
                type="text"
                placeholder="name"
                className="input input-bordered w-full max-w-xs"
                required
              />
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
                required
              />
              <input
                type="text"
                placeholder="company name"
                className="input input-bordered w-full max-w-xs"
                required
              />
            </div>
            <textarea
              className="textarea textarea-bordered w-full mt-4 resize-none"
              placeholder="your message..."
            ></textarea>
            <div className="lg:flex justify-between items-center">
              <ReCAPTCHA
                sitekey="6Lf0WFgoAAAAACndyRUOPplXXQ229ZzThBWJnchC"
                onChange={onChange}
              />
              <input
                className="btn btn-success "
                type="submit"
                value="submit message"
              />
            </div>
          </form>
        </div>
        <div className="lg:w-1/3 w-full mt-4  p-8 rounded-md bg-white text-black">
          <p className="relative ">
            <span className=" rounded-full  absolute -mt-16 ml-[150px] bg-white border-4">
              <AiOutlineClockCircle className="text-3xl p-4 w-[60px] h-[60px] " />
            </span>
            With Monster Ads affiliate staff working remotely in multiple time
            zones across the globe, we are able to keep overhead low and
            response times fast, which means more money in your pocket and
            support around the clock.
            <p className="my-2">
              If you ever can’t reach our staff online, leave a message here and
              someone will respond as soon as possible.
            </p>
          </p>
          <h1 className="text-2xl my-2">Or mail us directly:</h1>
          <h3>
            MONSTER ADS LLC 4905 34TH ST S STE 364 ST PETERSBURG, FL 33711
          </h3>
        </div>
      </div>
      <div className="flex justify-center gap-2 pb-8 text-blue-700">
        <a href="">Facebook</a>
        <a href="">Linkedin</a>
        <a href="">Twitter</a>
        <a href="">Instagram</a>
        <a href="">Google</a>
      </div>
    </div>
  );
};

export default Contact;
