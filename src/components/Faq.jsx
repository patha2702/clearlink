import AccordionList from "./AccordionList";

const Faq = () => {

  return (
    <section className="py-6 px-10 flex">
      <section className="w-1/2 py-5 px-7 flex flex-col justify-start items-start gap-3">
        <span className="text-sm font-semibold text-175CD3">Support</span>
        <h3 className="text-4xl text-1D2939 font-semibold">FAQs</h3>
        <p className="w-[75%] text-xl text-667085">
          Everything you need to know about the product and billing. Can&apos;t
          find the answer you&apos;re looking for? Please{" "}
          <span className="underline cursor-pointer">chat to our friendly team</span>
        </p>
      </section>
      <section className="w-1/2 p-5">
       <AccordionList />
      </section>
    </section>
  );
};

export default Faq;
