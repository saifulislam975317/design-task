const Contact = () => {
  return (
    <div className="flex bg-[#D7ECFB] justify-center gap-5 items-center p-12">
      <div className="w-1/2">
        <h1>Need to contact someone at Monster Ads?</h1>
        <p>
          Please complete the form below & someone will be in contact with you
          as soon as possible.
        </p>
        <form action="">
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              placeholder="company name"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <textarea
            className="textarea textarea-bordered w-full mt-4 resize-none"
            placeholder="your message..."
          ></textarea>
          <input
            className="btn btn-success "
            type="submit"
            value="submit message"
          />
        </form>
      </div>
      <div className="w-1/2">
        <p>
          With Monster Ads affiliate staff working remotely in multiple time
          zones across the globe, we are able to keep overhead low and response
          times fast, which means more money in your pocket and support around
          the clock.If you ever can’t reach our staff online, leave a message
          here and someone will respond as soon as possible.
        </p>
        <h1>Or mail us directly:</h1>
        <h3>MONSTER ADS LLC 4905 34TH ST S STE 364 ST PETERSBURG, FL 33711</h3>
      </div>
    </div>
  );
};

export default Contact;
