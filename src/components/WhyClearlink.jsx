import securityIcon from "/assets/security-icon.svg"
import recordIcon from "/assets/record-icon.svg"
import scheduleIcon from "/assets/schedule-icon.svg"
import audioIcon from "/assets/audio-icon.svg"
import whyClearlinkImg from "/assets/whyChooseClearlink-img.png";
import handDrawnArrowIcon from "/assets/hand-drawn-arrow.svg"

const WhyClearlink = () => {
  return (
    <section className="relative py-6 px-10 flex flex-col justify-between items-start gap-3">
      <section className="py-6 px-8 flex flex-col justify-between items-start gap-2">
        <span className="text-sm font-semibold text-175CD3">
          The ClearLink Advantage
        </span>
        <h3 className="text-4xl text-1D2939 font-semibold">
          Why choose ClearLink?
        </h3>
        <p className="w-[60%] text-xl text-667085">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:{" "}
        </p>
      </section>
      <div className="absolute top-[10%] right-[15%]">
        <img src={handDrawnArrowIcon} alt="hand drawn arrow" className="w-[70%]" />
      </div>
      <section className="py-4 flex justify-around items-center">
        <section className="py-4 w-[60%] flex gap-7 flex-wrap">
          <section className="w-[45%] flex flex-col gap-3">
            <img
              src={recordIcon}
              alt="Record icon"
              className="w-[2.5em] h-[2.5em]"
            />
            <span className="font-semibold text-101828 text-xl">
              Crystal-clear HD video
            </span>
            <p className="text-sm text-475467">
              No more pixelation or blurriness - just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </section>
          <section className="w-[45%] flex flex-col gap-3">
            <img
              src={audioIcon}
              alt="Audio icon"
              className="w-[2.5em] h-[2.5em]"
            />
            <span className="font-semibold text-101828 text-xl">
              Noise-canceling audio
            </span>
            <p className="text-sm text-475467">
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.
            </p>
          </section>
          <section className="w-[45%] flex flex-col gap-3">
            <img
              src={scheduleIcon}
              alt="Schedule icon"
              className="w-[2.5em] h-[2.5em]"
            />
            <span className="font-semibold text-101828 text-xl">
              Scheduling made easy
            </span>
            <p className="text-475467 text-sm">
              Streamline your agenda with ClearLink&apos;s intuitive scheduling.
              Set up meetings, send invitations, and receive reminders in one
              place.
            </p>
          </section>
          <section className="w-[45%] flex flex-col gap-3">
            <img
              src={securityIcon}
              alt="Security icon"
              className="w-[2.5em] h-[2.5em]"
            />
            <span className="font-semibold text-101828 text-xl">
              Bank-grade security
            </span>
            <p className="text-sm text-475467">
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.
            </p>
          </section>
        </section>
        <section className="w-[30%] px-2">
          <img src={whyClearlinkImg} alt="Grid of profile images" />
        </section>
      </section>
    </section>
  );
};

export default WhyClearlink;
