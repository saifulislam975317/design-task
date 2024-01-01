import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div className="bg-[#101010] ">
      <div className="lg:flex  justify-center gap-5 items-center p-12">
        <div className="lg:w-1/2 w-full text-gray-300">
          <h1>Need to contact someone at Perfume Ads?</h1>
          <p>
            Please complete the form below & someone will be in contact with you
            as soon as possible.
          </p>
          <form action="">
            <div className="lg:flex mt-2 gap-2">
              <input
                type="text"
                placeholder="name"
                className="input input-bordered w-full max-w-xs mb-2"
                required
              />
              <input
                type="email"
                placeholder="email"
                className="input input-bordered w-full max-w-xs mb-2"
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
                sitekey="6LdXdFwoAAAAAFJkej4tULhU4r9PQlOGyni8mUr5"
                onChange={onChange}
              />
              <input
                className="btn btn-warning "
                type="submit"
                value="submit message"
              />
            </div>
          </form>
        </div>
        <div className="lg:w-1/3 w-full mt-4  p-8 rounded-md bg-slate-400 text-gray-200">
          <p className=" ">
            This perfume is pure magic in a bottle! Its scent is both alluring
            and long-lasting, turning heads and earning me compliments wherever
            I go. The fragrance perfectly encapsulates my style and personality.
            The elegant packaging is an added bonus, making it a fantastic gift
            option. This perfume has become my signature scent, and I can't
            imagine a day without it. Worth every penny!
            <p className="my-2">
              If you ever can’t reach our staff online, leave a message here and
              someone will respond as soon as possible.
            </p>
          </p>
          <p className=" ">
            This perfume is pure magic in a bottle! Its scent is both alluring
            and long-lasting, turning heads and earning me compliments wherever
            I go. The fragrance perfectly encapsulates my style and personality.
            The elegant packaging is an added bonus, making it a fantastic gift
            option. This perfume has become my signature scent, and I can't
            imagine a day without it. Worth every penny!
            <p className="my-2">
              If you ever can’t reach our staff online, leave a message here and
              someone will respond as soon as possible.
            </p>
          </p>
          <h1 className="text-2xl my-2">Or mail us directly:</h1>
          <h3>
            PERFUME ADS LLC 4905 34TH ST S STE 364 ST PETERSBURG, FL 33711
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
