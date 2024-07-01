import Header from "./Header";
import animoji1 from "/assets/animoji1.svg";
import animoji2 from "/assets/animoji2.svg";
import animoji3 from "/assets/animoji3.svg";
import animoji4 from "/assets/animoji4.svg";
import animoji5 from "/assets/animoji5.svg";
import animoji6 from "/assets/animoji6.svg";
import zap1 from "/assets/zap.svg";
import zap2 from "/assets/zap2.svg";
import zap3 from "/assets/zap3.svg";
import zap4 from "/assets/zap4.svg";
import zap5 from "/assets/zap5.svg";
import zap6 from "/assets/zap6.svg";
import roboIcon from "/assets/robo-icon.svg";
import avatarGroup from "/assets/avatar-group.svg"
import ratingsIcon from "/assets/5-stars.svg"
import MobileNav from "./MobileNav";

const Hero = () => {
  return (
    <div className="h-screen w-full sm:pt-6 sm:pb-10 sm:px-5 lg:px-10 sm:flex sm:flex-col lg:gap-20 bg-fading">
      <Header />
      <MobileNav />
      <section className="max-sm:h-full px-8 py-5 flex justify-between max-sm:justify-center">
        <section className="max-sm:w-full sm:w-[45%] max-sm:mt-12 py-2 flex flex-col max-sm:gap-6 max-sm:justify-start justify-between items-start">
          <h2 className="text-5xl font-semibold text-1D2939">
            Uniting the world, one video call at a time
          </h2>
          <p className="text-xl sm:pr-16 text-667085">
            Experience the future of communication with ClearLink - where
            crystal-clear video conferencing meets unparalleled simplicity.
          </p>
          <div className="max-sm:w-full flex max-sm:flex-col justify-start gap-1 max-sm:gap-2 items-center max-sm:items-start">
            <button className="max-sm:w-full rounded-full px-4 py-3 text-base font-semibold text-white bg-blue-700">
              Start your free trial
            </button>
            <button className="max-sm:w-full rounded-full px-4 py-3 text-base font-semibold text-blue-700 bg-white">
              <span className="flex gap-1 max-sm:gap-2 justify-center items-center">
                <img src={roboIcon} alt="Robo icon" className="pb-1" />
                <span>Discover AI assistant</span>
              </span>
            </button>
          </div>
          <div className="flex flex-wrap gap-[4px] items-center text-[12px] mt-2">
            <img src={avatarGroup} alt="client avatars" />
            <span className="flex flex-col">
              <span className="flex gap-1 items-center">
                <img src={ratingsIcon} alt="5 star icon" />
                <span className="mt-[2px] font-semibold text-lg text-344054">5.0</span>
              </span>
              <span className="text-sm text-475467">from 3,000+ reviews</span>
            </span>
          </div>
        </section>
        <section className="max-lg:hidden w-[40%]">
          <section className="bg-EFF8FF border-[1px] border-B2DDFF rounded-lg shadow-2xl">
            <section className="p-5 flex gap-3 flex-wrap">
              <img src={animoji1} alt="animoji 1" className="w-[30%]" />
              <img src={animoji2} alt="animoji 2" className="w-[30%]" />
              <img src={animoji3} alt="animoji 3" className="w-[30%]" />
              <img src={animoji4} alt="animoji 4" className="w-[30%]" />
              <img src={animoji5} alt="animoji 5" className="w-[30%]" />
              <img src={animoji6} alt="animoji 6" className="w-[30%]" />
            </section>
            <section className="p-3 flex justify-center gap-2">
              <img src={zap1} alt="zap1" className="cursor-pointer"/>
              <img src={zap2} alt="zap2" className="cursor-pointer"/>
              <img src={zap3} alt="zap3" className="cursor-pointer"/>
              <img src={zap4} alt="zap4" className="cursor-pointer"/>
              <img src={zap5} alt="zap5" className="cursor-pointer"/>
              <img src={zap6} alt="zap6" className="cursor-pointer"/>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Hero;
