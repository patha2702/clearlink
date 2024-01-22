import screenMockImg from "/assets/screen-mockup.svg"
import checkIcon from "/assets/check-icon.svg"

const Features = () => {
  return (
    <section className="py-6 pl-10 flex ">
      <section className="w-[50%] p-7 flex flex-col justify-start items-start gap-5">
        <h4 className="text-4xl text-1D2939 font-semibold">
          Ready to clear the path to perfect communication?
        </h4>
        <ul className="px-3 flex flex-col justify-start items-start gap-3">
          <li>
            <div className="flex justify-start items-center gap-2">
              <img src={checkIcon} alt="check icon" />
              <span>30 days free trial</span>
            </div>
          </li>
          <li>
            <div className="flex justify-start items-center gap-2">
              <img src={checkIcon} alt="check icon" />
              <span>Cancel at any time</span>
            </div>
          </li>
          <li>
            <div className="flex justify-start items-center gap-2">
              <img src={checkIcon} alt="check icon" />
              <span>Access to all features</span>
            </div>
          </li>
          <li>
            <div className="flex justify-start items-center gap-2">
              <img src={checkIcon} alt="check icon" />
              <span>Personalized onboarding</span>
            </div>
          </li>
        </ul>
        <div className="flex justify-start items-center gap-2">
          <button className="rounded-full px-4 py-3 text-base font-semibold text-blue-700 bg-color-white border-[1px] border-gray-400">
            Talk to sales
          </button>
          <button className="rounded-full px-4 py-3 text-base font-semibold text-white bg-blue-700">
            Start your free trial
          </button>
        </div>
      </section>
      <section className="w-[50%]">
        <img src={screenMockImg} alt="Screen mockup" />
      </section>
    </section>
  );
};

export default Features;
