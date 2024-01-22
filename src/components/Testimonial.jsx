import shopifyLogo from "/assets/shopify.svg";
import fiveStarRatingImg from "/assets/5-stars.svg";
import clientAvatarImg from "/assets/sarah-avatar.svg";
import leftArrowIcon from "/assets/right-arrow-icon.svg";
import rightArrowIcon from "/assets/left-arrow-icon.svg";
import clientTestimonialImg from "/assets/shopify-testimonial.svg";

const Testimonial = () => {
  return (
    <section className="py-6 px-10 relative flex bg-F9FAFB">
      <section className="py-5 px-7 w-[50%] flex flex-col justify-start items-start gap-6">
        <img src={shopifyLogo} alt="Shopify logo" className="w-20 h-10" />
        <img src={fiveStarRatingImg} alt="5 Star rating" />
        <p className="py-2 text-3xl">
          ClearLink has upgraded our remote meetings. High quality video, screen
          sharing, and top notch security make it essential for our team.
        </p>
        <div className="flex justify-around items-center gap-2">
          <img src={clientAvatarImg} alt="Client Icon" />
          <span className="flex flex-col">
            <span className="text-base font-semibold">Sarah Thompson</span>
            <span className="text-base">Project Manager, Shopify</span>
          </span>
        </div>
      </section>
      <section className="py-5 px-7 w-[50%]">
        <img
          src={clientTestimonialImg}
          alt="Client testimonial"
          className="ml-[auto] mr-[auto] w-[75%]"
        />
      </section>
      <div className="absolute flex gap-6 bottom-[12%] left-[45%]">
        <div className="border-[1px] border-blue-100 bg-white rounded-full p-3 cursor-pointer">
          <img src={rightArrowIcon} alt="Left arrow icon" />
        </div>
        <div className="border-[1px] border-blue-100 bg-white rounded-full p-3 cursor-pointer">
          <img src={leftArrowIcon} alt="Right arrow icon" />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
